import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://ravali-wellness.com'),
  title: {
    default: "Ravali Kanmani Nutrition & Wellness Centre | Manikonda, Hyderabad",
    template: "%s | Ravali Kanmani Wellness"
  },
  description: "Transform your health through personalized nutrition and lifestyle plans. Weight Loss, PCOD Care, Immunity Boost, Skin & Hair Health. Book your free wellness checkup today!",
  keywords: "Nutritionist Manikonda, Wellness Centre Hyderabad, Weight Loss Coach Manikonda, PCOD Treatment Hyderabad, Nutrition Consultant Manikonda, Diet Plans Hyderabad",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ravali Kanmani Nutrition & Wellness Centre",
    description: "Personalized nutrition plans for weight management, PCOD, immunity, and wellness in Manikonda, Hyderabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Ravali Kanmani Nutrition & Wellness",
    url: 'https://ravali-wellness.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ravali-wellness.com/#business",
        "name": "Ravali Kanmani Nutrition & Wellness Centre",
        "description": "Certified Nutrition & Wellness Consultant offering personalized diet plans for weight loss, PCOD, immunity, and family health.",
        "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/professional-circular-portrait-photo-of--d2819464-20251111183811.jpg",
        "url": "https://ravali-wellness.com",
        "telephone": "+919542910928",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No.62, Flat No. G1, Ground Floor, Tanasha Nagar, Opp: Karur Vysya Bank",
          "addressLocality": "Manikonda",
          "addressRegion": "Telangana",
          "postalCode": "500089",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.4065,
          "longitude": 78.3864
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "09:00",
            "description": "Free Wellness Checkup"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Person",
        "@id": "https://ravali-wellness.com/#person",
        "name": "Ravali Kanmani",
        "jobTitle": "Certified Nutrition & Wellness Consultant",
        "description": "Expert nutritionist with 8+ years experience specializing in weight management, PCOD care, and holistic wellness.",
        "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/professional-circular-portrait-photo-of--d2819464-20251111183811.jpg"
      },
      {
        "@type": "Service",
        "@id": "https://ravali-wellness.com/#services",
        "serviceType": [
          "Weight Loss Programs",
          "Weight Gain Programs",
          "PCOD Management",
          "Immunity Boosting",
          "Skin & Hair Health",
          "Kids Nutrition",
          "Family Nutrition",
          "Sports Nutrition"
        ],
        "provider": {
          "@id": "https://ravali-wellness.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Hyderabad"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}