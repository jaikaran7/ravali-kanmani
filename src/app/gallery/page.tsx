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
      src: "/gallery/gallery-1.png",
      alt: "Wellness Coaching Session",
      height: "tall"
    },
    {
      src: "/gallery/gallery-2.jpg",
      alt: "Community Gathering",
      height: "medium"
    },
    {
      src: "/gallery/gallery-3.jpg",
      alt: "Health Transformation Success",
      height: "medium"
    },
    {
      src: "/gallery/gallery-4.png",
      alt: "Group Wellness Activity",
      height: "tall"
    },
    {
      src: "/gallery/gallery-5.jpg",
      alt: "Celebrating Milestones",
      height: "medium"
    },
    {
      src: "/gallery/gallery-6.png",
      alt: "Community Event",
      height: "medium"
    },
    {
      src: "/gallery/gallery-7.png",
      alt: "Wellness Session",
      height: "tall"
    },
    {
      src: "/gallery/gallery-8.png",
      alt: "Awards Celebration",
      height: "medium"
    },
    {
      src: "/gallery/gallery-9.jpg",
      alt: "Group Counseling",
      height: "medium"
    },
    {
      src: "/gallery/gallery-10.jpg",
      alt: "Team Success",
      height: "tall"
    }
  ];

  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "min-h-[200px] sm:min-h-[420px]";
      case "medium":
        return "min-h-[160px] sm:min-h-[340px]";
      default:
        return "min-h-[140px] sm:min-h-[260px]";
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
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 640: 2, 1024: 3, 1400: 4 }}>
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
