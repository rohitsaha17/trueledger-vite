import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "tl-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function save(choice: string) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }));
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl bg-white rounded-2xl border border-black/[0.08] shadow-2xl shadow-black/10 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 size-10 rounded-xl bg-brand-tint flex items-center justify-center">
                <Cookie className="size-5 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading font-semibold text-sm text-ink">
                    We value your privacy
                  </h3>
                  <button
                    onClick={() => save("dismissed")}
                    className="shrink-0 text-muted-foreground hover:text-ink transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  We use cookies to enhance your browsing experience and analyse site traffic. Choose your preference below.
                </p>

                <AnimatePresence>
                  {showCustomize && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3 border-t pt-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" checked disabled className="size-4 rounded accent-brand" />
                          <div>
                            <span className="text-sm font-medium text-ink">Essential</span>
                            <span className="text-xs text-muted-foreground ml-2">Always active</span>
                          </div>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={analytics}
                            onChange={() => setAnalytics(!analytics)}
                            className="size-4 rounded accent-brand"
                          />
                          <span className="text-sm font-medium text-ink">Analytics</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={marketing}
                            onChange={() => setMarketing(!marketing)}
                            className="size-4 rounded accent-brand"
                          />
                          <span className="text-sm font-medium text-ink">Marketing</span>
                        </label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <Button
                    size="sm"
                    onClick={() => save("accepted")}
                    className="rounded-full px-5"
                  >
                    Accept All
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => save("rejected")}
                    className="rounded-full px-5"
                  >
                    Reject All
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      if (showCustomize) {
                        save(`custom:analytics=${analytics},marketing=${marketing}`);
                      } else {
                        setShowCustomize(true);
                      }
                    }}
                    className="rounded-full px-5 text-muted-foreground"
                  >
                    {showCustomize ? "Save Preferences" : "Customise"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
