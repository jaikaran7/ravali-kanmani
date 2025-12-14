"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "9542910928";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Send to WhatsApp
      const whatsappMessage = `Hi, I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`;
      window.open(
        `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );

      toast.success("Redirecting to WhatsApp...");

      // Reset form
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn direction="up" duration={0.6}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your wellness journey today. Book your free consultation!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Enquiry Form */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-card rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Send an Enquiry
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll redirect you to WhatsApp to continue the conversation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your wellness goals..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send via WhatsApp
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </FadeIn>

            {/* Right: Map & Contact Info */}
            <div className="space-y-8">
              {/* Contact Information */}
              <FadeIn direction="right" delay={0.3}>
                <div className="bg-card rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Address</p>
                        <p className="text-muted-foreground text-sm">
                          Plot No.62, Flat No. G1, Ground Floor<br />
                          Tanasha Nagar, Opp: Karur Vysya Bank<br />
                          Manikonda, Hyderabad – 500089
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone / WhatsApp</p>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="text-primary hover:underline text-lg"
                        >
                          {phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Free Checkup Timing</p>
                        <p className="text-muted-foreground">8:00 AM – 9:00 AM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Follow Us</p>
                        <div className="flex items-center gap-3 mt-2">
                          <motion.a
                            href="https://www.facebook.com/ravali.kanmani.71/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Facebook"
                          >
                            <Facebook className="h-5 w-5" />
                          </motion.a>
                          <motion.a
                            href="https://www.instagram.com/ravalikanmani_/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Instagram"
                          >
                            <Instagram className="h-5 w-5" />
                          </motion.a>
                          <motion.a
                            href="#"
                            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Youtube"
                          >
                            <Youtube className="h-5 w-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Google Map */}
              <FadeIn direction="right" delay={0.4}>
                <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5447892!2d78.3864!3d17.4065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzIzLjQiTiA3OMKwMjMnMTEuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ravali Kanmani Nutrition & Wellness Centre Location"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your free wellness checkup today and take the first step!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {phoneNumber}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#25D366] text-white hover:bg-[#20BA5A] px-8 py-6 text-lg"
                onClick={() =>
                  window.open(
                    `https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi, I'd like to book a consultation!")}`,
                    "_blank"
                  )
                }
              >
                WhatsApp Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
