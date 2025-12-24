"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
    name: string;
    quote: string;
    photo: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export function HomeTestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="group relative isolate h-full rounded-[32px] border border-emerald-900/10 bg-white/90 px-6 py-8 shadow-[0_35px_70px_-45px_rgba(16,185,129,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_45px_90px_-50px_rgba(16,185,129,0.65)] sm:px-8 sm:py-10">
            <div className="absolute inset-x-8 top-6 -z-10 h-28 rounded-full bg-emerald-100/40 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                {testimonial.photo ? (
                    <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover shadow-lg ring-4 ring-emerald-500/20 sm:h-16 sm:w-16"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700 shadow-lg ring-4 ring-emerald-500/20 sm:h-16 sm:w-16">
                        {testimonial.name.charAt(0)}
                    </div>
                )}
                <div>
                    <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                        {testimonial.name}
                    </h4>
                    <div className="mt-1 flex items-center gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current sm:h-4 sm:w-4" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500 sm:mt-6 sm:text-sm sm:leading-6">
                "{testimonial.quote}"
            </p>
        </div>
    );
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [
            AutoScroll({
                speed: 1, // approx 1px/frame, adjust for ~25-30s loop depending on width
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const [isFocused, setIsFocused] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
            scrollPrev();
        } else if (e.key === "ArrowRight") {
            scrollNext();
        }
    };

    return (
        <div
            className="relative outline-none"
            role="region"
            aria-label="Client Success Stories Carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_50%] min-[375px]:flex-[0_0_33.333%] pl-4 sm:pl-6 lg:pl-10"
                        >
                            <HomeTestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Visual cue for keyboard users (optional, consistent with "no generic arrows") */}
            {isFocused && (
                <div className="sr-only">
                    Use Left and Right arrow keys to navigate testimonials.
                </div>
            )}
        </div>
    );
}
