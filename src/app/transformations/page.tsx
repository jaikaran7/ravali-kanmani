"use client";

import { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";
import { BeforeAfterSlider } from "@/components/testimonials/BeforeAfterSlider";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Marquee from "react-fast-marquee";

const transformationCards = [
  {
    name: "Meera J.",
    result: "Lost 15 kg in 4 months",
    story:
      "The personalised plans meant I never felt deprived. I gained confidence in every aspect of my life.",
    beforeImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Arun S.",
    result: "Gained 8 kg healthy weight",
    story:
      "From constant fatigue to feeling energised every morning - nutrition changed everything for me.",
    beforeImage:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Divya K.",
    result: "PCOD symptoms reduced by 70%",
    story:
      "Balanced nutrition and mindful lifestyle tweaks brought my cycles back on track within months.",
    beforeImage:
      "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rakesh P.",
    result: "Reduced body fat by 12%",
    story:
      "Strength training + customised meals helped me get lean without losing energy.",
    beforeImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Anita M.",
    result: "Improved digestion & energy",
    story:
      "Small habit changes and focused nutrition transformed my daily energy levels.",
    beforeImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vikram T.",
    result: "Maintained muscle while losing fat",
    story:
      "Macro tracking and recovery planning made progress steady and sustainable.",
    beforeImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    name: "Priya S.",
    quote:
      "Lost 15kg in 3 months! The personalised approach made all the difference. Ravali's guidance was life-changing.",
    rating: 5,
    designation: "Weight Loss Journey",
    photo:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Anjali R.",
    quote:
      "My PCOD symptoms improved significantly with Ravali's guidance. I feel more energetic and confident.",
    rating: 5,
    designation: "PCOD Management",
    photo:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Meera K.",
    quote:
      "The meal plans were so easy to follow. I never felt deprived and still achieved my weight loss goals.",
    rating: 5,
    designation: "Sustainable Weight Loss",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Rakesh P.",
    quote:
      "Strength training + customised meals helped me get lean without losing energy.",
    rating: 5,
    designation: "Reduced body fat by 12%",
    photo:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Anita M.",
    quote:
      "Small habit changes and focused nutrition transformed my daily energy levels.",
    rating: 5,
    designation: "Improved digestion & energy",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Vikram T.",
    quote:
      "Macro tracking and recovery planning made progress steady and sustainable.",
    rating: 5,
    designation: "Maintained muscle while losing fat",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  },
];

function TransformationCard({ card }: { card: typeof transformationCards[0] }) {
  return (
    <div className="group relative h-full w-full max-w-[340px] rounded-[32px] border border-emerald-900/10 bg-white/90 p-6 shadow-[0_40px_80px_-50px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500/40 hover:shadow-[0_55px_95px_-60px_rgba(16,185,129,0.65)] mx-auto">
      <BeforeAfterSlider
        beforeImage={card.beforeImage}
        afterImage={card.afterImage}
        beforeAlt={`${card.name} - Before`}
        afterAlt={`${card.name} - After`}
        className="max-w-none"
      />
      <div className="mt-6 space-y-3 text-center">
        <h3 className="text-xl font-bold text-slate-900">{card.name}</h3>
        <p className="text-base font-semibold text-emerald-600">
          {card.result}
        </p>
        <p className="text-sm leading-6 text-slate-500">{card.story}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="group flex h-full w-full max-w-[360px] flex-col gap-6 rounded-[28px] border border-emerald-900/10 bg-white/90 p-8 text-left shadow-[0_30px_70px_-45px_rgba(16,185,129,0.55)] transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500/40 hover:shadow-[0_40px_90px_-55px_rgba(16,185,129,0.65)] mx-auto"
    >
      <div className="flex items-center gap-4">
        <img
          src={testimonial.photo}
          alt={`${testimonial.name} avatar`}
          className="h-16 w-16 rounded-full object-cover shadow-lg ring-4 ring-emerald-500/20"
          loading="lazy"
        />
        <div>
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map(
              (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-5 w-5 fill-current"
                />
              )
            )}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            {testimonial.name}
          </h3>
          <p className="text-sm font-medium text-emerald-600">
            {testimonial.designation}
          </p>
        </div>
      </div>
      <p className="text-sm leading-6 text-slate-500">
        "{testimonial.quote}"
      </p>
    </div>
  );
}

export default function TransformationsPage() {
  // Split cards into two rows
  const transformRow1 = transformationCards.slice(0, 3);
  const transformRow2 = transformationCards.slice(3, 6);

  const testimonialsRow1 = testimonials.slice(0, 3);
  const testimonialsRow2 = testimonials.slice(3, 6);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f9f5ee]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_65%)]" />
      <main className="relative z-10 pt-24 pb-24">
        {/* Transformations Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <FadeIn direction="up" duration={0.6}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm ring-1 ring-emerald-600/20">
                Real Stories
              </span>
              <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
                Real Transformations
              </h1>
              <p className="mt-4 text-lg text-slate-600 sm:text-xl">
                Drag the slider to see the amazing transformations of our clients.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="mt-20 px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Row 1 */}
          <div className="mx-auto max-w-7xl" data-analytics="transform-row-1">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                dragFree: true,
              }}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <CarouselContent className="-ml-4 pb-12 cursor-grab active:cursor-grabbing">
                {transformRow1.map((card, index) => (
                  <CarouselItem key={card.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <TransformationCard card={card} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Row 2 */}
          <div className="mx-auto max-w-7xl" data-analytics="transform-row-2">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                dragFree: true,
              }}
              className="w-full cursor-grab active:cursor-grabbing"
            >
              <CarouselContent className="-ml-4 pb-4 cursor-grab active:cursor-grabbing">
                {transformRow2.map((card, index) => (
                  <CarouselItem key={card.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <TransformationCard card={card} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-24 px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                Client Testimonials
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Stories from people who trusted us with their health and saw results
                that lasted.
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-7xl space-y-12">
            {/* Mobile View: Infinite Scroll Marquee */}
            <div className="block md:hidden space-y-8">
              {/* Row 1: Left Scroll */}
              <div className="w-full">
                <Marquee speed={40} direction="left" gradient={false}>
                  {testimonialsRow1.map((testimonial) => (
                    <div key={testimonial.name} className="mx-4 w-[300px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Row 2: Right Scroll */}
              <div className="w-full">
                <Marquee speed={40} direction="right" gradient={false}>
                  {testimonialsRow2.map((testimonial) => (
                    <div key={testimonial.name} className="mx-4 w-[300px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Desktop View: Carousel */}
            <div className="hidden md:block space-y-12">
              {/* Row 1 */}
              <div className="w-full" role="group" aria-label="Client testimonials row 1" data-analytics="testimonials-row-1">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                    dragFree: true,
                  }}
                  className="w-full cursor-grab active:cursor-grabbing"
                >
                  <CarouselContent className="-ml-4 pb-4 cursor-grab active:cursor-grabbing">
                    {testimonialsRow1.map((testimonial) => (
                      <CarouselItem key={testimonial.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                        <TestimonialCard testimonial={testimonial} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Row 2 */}
              <div className="w-full" role="group" aria-label="Client testimonials row 2" data-analytics="testimonials-row-2">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                    dragFree: true,
                  }}
                  className="w-full cursor-grab active:cursor-grabbing"
                >
                  <CarouselContent className="-ml-4 pb-4 cursor-grab active:cursor-grabbing">
                    {testimonialsRow2.map((testimonial) => (
                      <CarouselItem key={testimonial.name} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                        <TestimonialCard testimonial={testimonial} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
