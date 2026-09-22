import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface WhitepaperDownloadModalProps {
  pdfUrl: string;
  title: string;
  trigger: React.ReactNode;
}

/**
 * Gates a whitepaper PDF behind a short lead-capture form. The details are
 * saved as an enquiry and the PDF opens in a new tab.
 */
export function WhitepaperDownloadModal({
  pdfUrl,
  title,
  trigger,
}: WhitepaperDownloadModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Saved in the background — a failed save must not block the download.
    api
      .post("/enquiries", {
        name: form.get("name"),
        email: form.get("email"),
        company: form.get("company"),
        message: `Downloaded whitepaper: ${title}`,
        source: "whitepaper",
      })
      .catch(() => {});

    setSubmitted(true);
    // Triggered by a user gesture, so the popup is allowed.
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => setSubmitted(false), 300);
    }, 2200);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download the Whitepaper</DialogTitle>
          <DialogDescription>
            Enter your details to access{" "}
            <span className="font-medium text-ink">{title}</span>.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="size-14 rounded-full bg-secondary flex items-center justify-center mb-3">
              <CheckCircle2 className="size-7 text-primary" />
            </div>
            <h4 className="text-base font-semibold font-heading">
              Your download is ready
            </h4>
            <p className="text-muted-foreground text-sm mt-1">
              If it didn&rsquo;t open,{" "}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline"
              >
                click here
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 pt-1">
            <div className="grid gap-2">
              <Label htmlFor="wp-name">
                Full Name <span className="text-coral">*</span>
              </Label>
              <Input id="wp-name" name="name" required placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wp-email">
                Work Email <span className="text-coral">*</span>
              </Label>
              <Input
                id="wp-email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="wp-company">Company</Label>
              <Input id="wp-company" name="company" placeholder="Acme Inc." />
            </div>
            <Button type="submit" size="lg" className="w-full mt-1">
              Access Whitepaper
              <Download className="size-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
