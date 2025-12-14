"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="/logo.png"
                alt="Ravali Kanmani Wellness Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h3 className="text-xl font-bold text-primary">Ravali Kanmani</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Nutrition & Wellness Centre
            </p>
            <p className="text-sm text-muted-foreground">
              Transform your health through personalized nutrition and lifestyle plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Ravali
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services & Programs
                </Link>
              </li>
              <li>
                <Link href="/transformations" className="text-muted-foreground hover:text-primary transition-colors">
                  Transformations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyDAgCECMYJxiABBiKBTINCAMQLhivARjHARiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABjvBdIBCDI2MTJqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KcsEUXZNl8s7MTyTnjWqxMa8&daddr=opposite+Karur+Vysya+bank,+Tanasha+Nagar,+Manikonda,+Hyderabad,+Telangana+500089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Plot No.62, Flat No. G1, Manikonda, Hyderabad – 500089
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:9542910928" className="text-muted-foreground hover:text-primary transition-colors">
                  9542910928
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Free Checkup: 8:00 AM – 9:00 AM</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <motion.a
                href="https://www.facebook.com/ravali.kanmani.71/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
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
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ravali Kanmani Nutrition & Wellness Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
