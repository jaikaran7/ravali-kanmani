"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12">
      {/* Progress Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/20">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              bounce: 0.3
            }}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2, type: "spring", bounce: 0.5 }}
              className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full ring-4 ring-background z-10"
            />

            {/* Content */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>

            <div className="hidden md:block md:w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
