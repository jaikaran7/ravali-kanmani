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
    name: "Sameera",
    result: "Lost 25 kilos",
    story:
      "Sameera’s journey is a testament to dedication. She lost 25 kilos and completely transformed her health and energy levels.",
    beforeImage: "/transformations/before/sameera-before.png",
    afterImage: "/transformations/after/sameera-after.png",
  },
  {
    name: "Sai",
    result: "Lost 41 kilos",
    story:
      "Sai accomplished an extraordinary transformation by losing 41 kilos with a structured, science-backed nutrition plan.",
    beforeImage: "/transformations/before/sai-before.png",
    afterImage: "/transformations/after/sai-after.png",
  },
  {
    name: "Masthu",
    result: "Lost 22 kilos",
    story:
      "Masthu, a professional beautician, achieved a remarkable 22-kilo weight loss through Ravali’s customized wellness plan.",
    beforeImage: "/transformations/before/masthu-before.png",
    afterImage: "/transformations/after/masthu-after.png",
  },
  {
    name: "Anitha",
    result: "Lost 20 kilos",
    story:
      "Anitha’s transformation was about reclaiming her confidence. Losing 20 kilos gave her a new lease on life.",
    beforeImage: "/transformations/before/Anitha-before.png",
    afterImage: "/transformations/after/Anitha-after.png",
  },
  {
    name: "Nagasudha",
    result: "Lost 18 kilos",
    story:
      "Nagasudha prioritized her well-being and lost 18 kilos, dealing with hormonal balances effectively.",
    beforeImage: "/transformations/before/Nagasudha-before.png",
    afterImage: "/transformations/after/Nagasudha-after.png",
  },
  {
    name: "Varalaxmi",
    result: "Lost 15 kilos",
    story:
      "Varalaxmi’s weight loss of 15 kilos proved that age is just a number when it comes to fitness and vitality.",
    beforeImage: "/transformations/before/Varalaxmi-before.png",
    afterImage: "/transformations/after/Varalaxmi-after.png",
  },
];

const testimonials = [
  {
    name: "Hanuma Devabhakthuni",
    quote:
      "A complete holistic wellness center with personalized nutrition guidance. Ravali Kanmani mam focuses on education and sustainable lifestyle changes.",
    rating: 5,
    designation: "Holistic Wellness",
    photo: "",
  },
  {
    name: "Jeevan Salkapuram",
    quote:
      "Genuine experience with good results. Positive, eco-friendly atmosphere and excellent guidance for a healthy lifestyle.",
    rating: 5,
    designation: "Healthy Lifestyle",
    photo: "",
  },
  {
    name: "Anitha Chowdary",
    quote:
      "I lost 20 kgs with Ravali Kanmani Nutrition and Wellness Center. Very happy with the results and guidance.",
    rating: 5,
    designation: "Weight Loss",
    photo: "",
  },
  {
    name: "Mamatha Reddy",
    quote:
      "Lost 18 kgs and achieved a healthier, more active lifestyle with improved HbA1c control.",
    rating: 5,
    designation: "Weight Loss & HbA1c Control",
    photo: "/testimonials/mamatha-reddy.png",
  },
  {
    name: "Boddu Sridhar",
    quote:
      "Reduced around 14 kgs with the guidance of Ravali madam. Very satisfied with the results.",
    rating: 5,
    designation: "Weight Management",
    photo: "/testimonials/boddu-sridhar.png",
  },
  {
    name: "Sai Lakshmi",
    quote:
      "Now leading a healthy, active, and medicine-free lifestyle. Thankful for the guidance and support.",
    rating: 5,
    designation: "Healthy Lifestyle",
    photo: "/testimonials/sai-lakshmi.png",
  },
];

function TransformationCard({ card }: {
  card: {
    name: string;
    result: string;
    story: string;
    beforeImage: string;
    afterImage: string;
    beforeImageClassName?: string;
    afterImageClassName?: string;
  }
}) {
  return (
    <div className="group relative h-full w-full max-w-[340px] rounded-[32px] border border-emerald-900/10 bg-white/90 p-6 shadow-[0_40px_80px_-50px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-3 hover:border-emerald-500/40 hover:shadow-[0_55px_95px_-60px_rgba(16,185,129,0.65)] mx-auto">
      <BeforeAfterSlider
        beforeImage={card.beforeImage}
        afterImage={card.afterImage}
        beforeAlt={`${card.name} - Before`}
        afterAlt={`${card.name} - After`}
        className="max-w-none"
        beforeImageClassName={card.beforeImageClassName}
        afterImageClassName={card.afterImageClassName}
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
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={`${testimonial.name} avatar`}
            className="h-16 w-16 rounded-full object-cover shadow-lg ring-4 ring-emerald-500/20"
            loading="lazy"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700 shadow-lg ring-4 ring-emerald-500/20">
            {testimonial.name.charAt(0)}
          </div>
        )}
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
                Real Stories, Real Transformations
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
            {/* Mobile View - Infinite Scroll */}
            <div className="block lg:hidden space-y-8">
              {/* Row 1 - Left */}
              <div className="w-full">
                <Marquee direction="left" speed={40} pauseOnHover>
                  {testimonialsRow1.map((testimonial) => (
                    <div key={testimonial.name} className="px-4 py-2 w-[320px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Row 2 - Right */}
              <div className="w-full">
                <Marquee direction="right" speed={40} pauseOnHover>
                  {testimonialsRow2.map((testimonial) => (
                    <div key={testimonial.name} className="px-4 py-2 w-[320px]">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Desktop View - Carousel */}
            <div className="hidden lg:block space-y-12">
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
