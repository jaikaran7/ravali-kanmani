"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Scale, Heart, Shield, Sparkles, Users, Baby, Utensils, Activity } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";

interface Service {
  icon: typeof Scale;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Scale,
    title: "Weight Loss & Management",
    description: "Custom tailored programs for sustainable results.",
    features: ["Custom meal plans", "Weekly progress tracking", "Lifestyle modifications", "Long-term maintenance"]
  },
  {
    icon: Heart,
    title: "PCOD & Women's Health",
    description: "Holistic care for hormonal balance and wellness.",
    features: ["Hormonal balance", "Symptom management", "Fertility support", "Natural remedies"]
  },
  {
    icon: Shield,
    title: "Immunity Booster",
    description: "Strengthen your body's natural defenses.",
    features: ["Immune-boosting foods", "Supplement guidance", "Disease prevention", "Energy optimization"]
  },
  {
    icon: Sparkles,
    title: "Skin & Hair Health",
    description: "Nutrition for glowing skin and healthy hair.",
    features: ["Anti-aging nutrition", "Hair growth support", "Acne management", "Glow enhancement"]
  },
  {
    icon: Users,
    title: "Family Nutrition",
    description: "Healthy habits for the whole family.",
    features: ["Family meal planning", "Healthy cooking tips", "Budget-friendly options", "Lifestyle balance"]
  },
  {
    icon: Baby,
    title: "Kids & Teen Nutrition",
    description: "Fostering healthy growth and development.",
    features: ["Growth optimization", "Healthy habits", "School lunch ideas", "Picky eater solutions"]
  },
  {
    icon: Utensils,
    title: "Weight Gain Program",
    description: "Healthy strategies for building mass.",
    features: ["Calorie-dense meals", "Muscle building", "Appetite enhancement", "Nutritional supplements"]
  },
  {
    icon: Activity,
    title: "Sports Nutrition",
    description: "Fueling performance and recovery.",
    features: ["Performance optimization", "Recovery nutrition", "Supplement strategies", "Energy management"]
  }
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Free initial assessment" },
  { step: "02", title: "Custom Plan", desc: "Personalized for you" },
  { step: "03", title: "Weekly Check-ins", desc: "Track your progress" },
  { step: "04", title: "Achieve Goals", desc: "Reach your targets" }
];

function ServiceCard({ service }: { service: Service }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25, mass: 0.6 });
  const [enableTilt, setEnableTilt] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnableTilt(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;
    const percentX = (relativeX / rect.width - 0.5) * 18;
    const percentY = (relativeY / rect.height - 0.5) * -18;
    rotateX.set(percentY);
    rotateY.set(percentX);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const cardStyle = enableTilt
    ? { rotateX: springX, rotateY: springY, transformPerspective: 900, touchAction: "pan-y" as const }
    : { touchAction: "pan-y" as const };

  return (
    <motion.div
      ref={cardRef}
      className="group relative isolate flex w-full flex-col items-center rounded-[24px] border border-emerald-900/10 bg-white px-5 py-8 shadow-[0_20px_40px_-25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:border-emerald-500/40 md:rounded-[32px] md:px-8 md:py-10 md:shadow-[0_40px_70px_-50px_rgba(16,185,129,0.6)]"
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      whileHover={{ y: enableTilt ? -12 : -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <motion.div
        className="absolute inset-0 -z-10 rounded-[24px] bg-gradient-to-br from-emerald-200/0 via-emerald-200/20 to-emerald-300/30 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 md:rounded-[32px]"
        aria-hidden
      />

      <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-[0_15px_35px_-20px_rgba(15,118,110,0.65)] mx-auto md:mb-6 md:h-16 md:w-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-emerald-100/50 to-emerald-50/30" aria-hidden />
        <service.icon className="relative h-6 w-6 md:h-7 md:w-7" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 text-center md:text-xl">
        {service.title}
      </h3>
      {/* <p className="mt-3 text-sm leading-6 text-slate-500 md:mt-4">
        {service.description}
      </p> */}
      <ul className="mt-5 space-y-2 text-xs leading-5 text-slate-500 md:mt-6 md:text-sm md:leading-6">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-2 text-left"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.06 }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ServicesContent() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeStep < processSteps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
    else if (isRightSwipe && activeStep > 0) { // Added 'else' to prevent double jump if logic somehow allows
      setActiveStep(prev => prev - 1);
    }

    // Resume auto-scroll after interaction
    setIsPaused(false);

    // Reset touch refs
    touchStart.current = null;
    touchEnd.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && activeStep < processSteps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
    if (e.key === 'ArrowLeft' && activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
            animate={{ x: [0, -30, 20, 0], y: [0, -40, 20, 0], scale: [1, 0.9, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="mx-auto max-w-7xl text-center">
          <FadeIn direction="up" duration={0.6}>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Services & Programs
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              Personalized Nutrition for Every Goal
            </motion.p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8" staggerDelay={0.08}>
            {services.map((service, index) => (
              <StaggerItem
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                custom={index}
                className="h-full"
              >
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute left-1/3 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl"
            animate={{ scale: [1, 1.15, 0.95, 1], opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="mx-auto max-w-4xl text-center relative">
          <FadeIn>
            <motion.h2
              className="text-4xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Book Your Free Consultation
            </motion.h2>
            <motion.p
              className="text-xl text-primary-foreground/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Take the first step towards your wellness goals. Let's discuss the perfect program for you.
            </motion.p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-xl"
              >
                Get Started Today
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              How It Works
            </h2>
          </FadeIn>

          {/* Mobile Stepper (<= 768px) */}
          <div
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              className="flex justify-between relative mb-8"
              role="tablist"
              aria-label="Process steps"
              onKeyDown={handleKeyDown}
            >
              {/* Connecting Line */}
              <div className="absolute top-4 left-0 w-full h-0.5 bg-emerald-100 -z-10" />

              {processSteps.map((item, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={item.step}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`step-panel-${index}`}
                    onClick={() => {
                      setActiveStep(index);
                      // Optional: Pause on manual click too? usually good idea.
                    }}
                    className="group flex flex-col items-center gap-2 focus:outline-none"
                  >
                    <div className={`
                        flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300
                        ${isActive
                        ? "bg-emerald-500 text-white shadow-lg scale-110"
                        : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      }
                      `}>
                      {item.step}
                    </div>
                    <span className={`text-[10px] font-medium max-w-[60px] text-center leading-tight transition-colors ${isActive ? "text-emerald-700 font-semibold" : "text-slate-500"}`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Panel */}
            <div
              className="relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/90 p-6 text-center shadow-lg transition-all"
              role="tabpanel"
              id={`step-panel-${activeStep}`}
              aria-live="polite"
            >
              <div className="text-4xl font-bold text-emerald-500/20 mb-2">{processSteps[activeStep].step}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{processSteps[activeStep].title}</h3>
              <p className="text-sm text-slate-500">{processSteps[activeStep].desc}</p>
            </div>
          </div>

          {/* Desktop Grid (> 768px) */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <motion.div
                  className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/90 px-6 py-10 text-center shadow-[0_30px_60px_-45px_rgba(16,185,129,0.55)] transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/0 via-emerald-200/30 to-emerald-300/40 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="text-5xl font-bold text-primary/25 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {item.step}
                  </motion.div>
                  <motion.h3
                    className="font-semibold text-foreground mb-2"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
