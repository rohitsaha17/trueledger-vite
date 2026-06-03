import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const services = [
  "Global Entity Setup",
  "Managed Accounting & Bookkeeping",
  "Tax Compliance & Advisory",
  "Business Advisory",
  "Support to CPAs & Accounting Firms",
];

const timeZones = ["IST (India Standard Time)", "EST (Eastern Standard Time)"];

interface ConsultationModalProps {
  trigger?: React.ReactNode;
}

export function ConsultationModal({ trigger }: ConsultationModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => setSubmitted(false), 300);
    }, 2500);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg">
            Book a Consultation
            <ChevronRight className="size-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Book a Consultation</DialogTitle>
          <DialogDescription>
            Tell us about your needs and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10"
          >
            <div className="size-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold font-heading">Thank you!</h4>
            <p className="text-muted-foreground mt-1">We'll be in touch shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 pt-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name <span className="text-coral">*</span></Label>
              <Input id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email <span className="text-coral">*</span></Label>
                <Input id="email" name="email" type="email" required placeholder="john@company.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" name="company" placeholder="Acme Inc." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" name="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <select
                  id="timezone"
                  name="timezone"
                  className="h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="">Select...</option>
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Input id="time" name="time" type="time" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service">Select Service</Label>
              <select
                id="service"
                name="service"
                className="h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your requirements..." />
            </div>
            <Button type="submit" size="lg" className="w-full mt-2">
              Submit Request
              <ChevronRight className="size-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
