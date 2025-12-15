"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Heart, Shield, Sparkles, Users, Star } from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { BeforeAfterSlider } from "@/components/testimonials/BeforeAfterSlider";

export default function Home() {
  const keyServices = [
    { icon: Scale, title: "Weight Management", description: "Sustainable loss or gain programs" },
    { icon: Heart, title: "PCOD Care", description: "Hormonal balance & wellness" },
    { icon: Shield, title: "Immunity Boost", description: "Strengthen your defenses" },
    { icon: Users, title: "Family Nutrition", description: "Comprehensive nutrition for the whole family" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      quote: "Lost 12 kgs in 3 months! The personalized plan was easy to follow.",
      photo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/professional-headshot-of-indian-woman-pr-2ef3f4b6-20251111183852.jpg"
    },
    {
      name: "Rajesh Kumar",
      quote: "My PCOD symptoms improved significantly. Highly recommended!",
      photo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ee9defd1-ab12-4e1d-bb8e-742f48a34f2e/generated_images/professional-headshot-of-indian-man-raje-5faf6e06-20251111183852.jpg"
    },
    {
      name: "Anjali Reddy",
      quote: "Finally a diet that doesn't feel like a diet. Loving the energy!",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Vikram Singh",
      quote: "Great for sports nutrition. Helped me gain muscle mass effectively.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Meera Nair",
      quote: "My skin has never looked better. The holistic approach works wonders.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Arun P.",
      quote: "Effective weight management without starving. Highly satisfied.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic Mesh Gradient Background - Simplified */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-background">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px] animate-pulse delay-1000" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
                    ✨ Transform Your Life
                  </span>
                </motion.div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="block"
                  >
                    Set Your
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-accent"
                  >
                    Wellness Goal
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="block"
                  >
                    Today!
                  </motion.span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Experience a holistic transformation with personalized nutrition plans designed solely for your unique lifestyle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-full shadow-emerald-500/20 shadow-xl w-full sm:w-auto">
                      Book Consultation
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for new clients in Manikonda, Hyderabad</span>
              </motion.div>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:flex relative justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-48 h-48 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
              >
                {/* Main Image Container */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-accent/20 rounded-[40px] rotate-6 transform" />
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                    <img
                      src="/ravali-hero.jpg"
                      alt="Ravali Kanmani"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src="/ravali-hero.jpg"
                alt="Ravali Kanmani"
                className="w-40 h-40 md:w-32 md:h-32 rounded-full object-cover shadow-lg ring-4 ring-primary/20 block"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Meet Ravali Kanmani
                </h2>
                <p className="text-muted-foreground mb-4">
                  Certified Nutrition & Wellness Consultant with 8+ years of experience,
                  helping 500+ clients achieve their health goals through personalized,
                  sustainable nutrition plans.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4 Key Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Our Specialties
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Comprehensive programs crafted for long-term wellness
            </p>
          </FadeIn>

          <StaggerContainer className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4 lg:gap-8" staggerDelay={0.1}>
            {keyServices.map((service, index) => (
              <StaggerItem
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative isolate flex h-full w-full flex-col items-center rounded-[32px] border border-emerald-900/10 bg-white/90 px-4 py-8 text-center shadow-[0_30px_60px_-35px_rgba(15,118,110,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500/40 hover:shadow-[0_45px_80px_-40px_rgba(15,118,110,0.65)] md:px-6 md:py-12"
                >
                  <div className="absolute inset-x-6 top-5 -z-10 h-24 rounded-full bg-emerald-100/40 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-[0_15px_35px_-20px_rgba(15,118,110,0.65)] md:h-16 md:w-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-emerald-100/50 to-emerald-50/30" />
                    <service.icon className="relative h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500 md:mt-3 md:text-sm md:leading-6">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="text-center mt-10">
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Real people sharing real journeys towards better health.
            </p>
          </FadeIn>

          <FadeIn>
            {/* Carousel Container */}
            <div className="mt-8 -mx-4 sm:mx-0">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/transformations#reviews">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold">
                  View All Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Real Transformations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Real Transformations
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Drag the slider to see the amazing transformations of our clients.
            </p>
          </FadeIn>

          {/* Desktop/Tablet Grid - Mobile Horizontal Scroll */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:px-0 md:pb-0 scrollbar-hide md:overflow-visible">
            {[
              {
                name: "Meera J.",
                result: "Lost 15 kg in 4 months",
                story: "The personalised plans meant I never felt deprived.",
                beforeImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
                afterImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Arun S.",
                result: "Gained 8 kg healthy weight",
                story: "Nutrition changed everything for me.",
                beforeImage: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
                afterImage: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Divya K.",
                result: "PCOD symptoms reduced by 70%",
                story: "Balanced nutrition brought my cycles back on track.",
                beforeImage: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=600&q=80",
                afterImage: "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=600&q=80"
              }
            ].map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-auto md:flex-shrink snap-center"
              >
                <div className="group relative h-full w-full rounded-[32px] border border-emerald-900/10 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mx-auto">
                  <BeforeAfterSlider
                    beforeImage={card.beforeImage}
                    afterImage={card.afterImage}
                    beforeAlt={`${card.name} - Before`}
                    afterAlt={`${card.name} - After`}
                    className="max-w-none rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[4/3]"
                  />
                  <div className="mt-6 space-y-2 text-center">
                    <h3 className="text-xl font-bold text-slate-900">{card.name}</h3>
                    <p className="text-base font-semibold text-emerald-600">
                      {card.result}
                    </p>
                    <p className="text-sm text-slate-500">{card.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/transformations">
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold">
                  View All Transformations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Take the first step towards a healthier, happier you. Book your free consultation now!
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-xl rounded-full shadow-2xl"
              >
                Get Started Now
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}