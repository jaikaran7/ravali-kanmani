"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/gallery/event-1.jpg",
      alt: "Community Wellness Event",
      height: "medium"
    },
    {
      src: "/gallery/event-2.jpg",
      alt: "Wellness Seminar",
      height: "medium"
    },
    {
      src: "/gallery/group-1.png",
      alt: "Group Session",
      height: "tall"
    },
    {
      src: "/gallery/group-2.png",
      alt: "Awards Ceremony",
      height: "medium"
    },
    {
      src: "/gallery/group-3.png",
      alt: "Team Gathering",
      height: "medium"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/wellness-transformation-gallery-photo-sh-567b61e7-20251111183852.jpg",
      alt: "Healthy meal prep",
      height: "tall"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/wellness-transformation-gallery-photo-of-cad233a0-20251111183855.jpg",
      alt: "Yoga and wellness",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=800&fit=crop",
      alt: "Fresh produce",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop",
      alt: "Healthy food",
      height: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=800&fit=crop",
      alt: "Salad bowl",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop",
      alt: "Fresh vegetables",
      height: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=800&fit=crop",
      alt: "Smoothie bowl",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&h=800&fit=crop",
      alt: "Healthy breakfast",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=800&fit=crop",
      alt: "Nutritious meal",
      height: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop",
      alt: "Cooking healthy",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&h=800&fit=crop",
      alt: "Wellness lifestyle",
      height: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=800&fit=crop",
      alt: "Fruit bowl",
      height: "tall"
    }
  ];

  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "min-h-[420px]";
      case "medium":
        return "min-h-[340px]";
      default:
        return "min-h-[260px]";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn direction="up" duration={0.6}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Glimpses of Health Transformations and Wellness Journeys
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3, 1400: 4 }}>
            <Masonry gutter="24px">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`group relative isolate cursor-pointer overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white/40 shadow-[0_40px_80px_-60px_rgba(15,118,110,0.65)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_55px_100px_-70px_rgba(15,118,110,0.7)] ${getHeightClass(image.height)}`}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-emerald-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-black/45 p-4 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">{image.alt}</p>
                    <p className="text-xs text-white/70">Click to view full size</p>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              className="relative max-w-5xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
