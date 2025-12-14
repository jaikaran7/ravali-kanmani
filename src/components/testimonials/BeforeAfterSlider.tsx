"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    className?: string;
}

export const BeforeAfterSlider = ({
    beforeImage,
    afterImage,
    beforeAlt = "Before transformation",
    afterAlt = "After transformation",
    className = ""
}: BeforeAfterSliderProps & { beforeAlt?: string; afterAlt?: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = "touches" in event ? event.touches[0].clientX : (event as MouseEvent).clientX;

        // Calculate position relative to container
        let position = ((clientX - containerRect.left) / containerRect.width) * 100;

        // Clamp between 0 and 100
        position = Math.min(100, Math.max(0, position));

        setSliderPosition(position);
    }, []);

    const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        // Only start drag on left click or touch
        if ('button' in e && e.button !== 0) return;
        setIsDragging(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging, handleMove, handleMouseUp]);

    return (
        <div
            className={`relative w-full aspect-[4/3] overflow-hidden select-none cursor-ew-resize rounded-2xl ${className}`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuenow={sliderPosition}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPosition(p => Math.max(0, p - 5));
                if (e.key === 'ArrowRight') setSliderPosition(p => Math.min(100, p + 5));
            }}
        >
            {/* After Image (Background - Shows on the right side) */}
            <img
                src={afterImage}
                alt={afterAlt}
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            {/* Label for After */}
            <div className="absolute bottom-4 right-4 z-10 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                AFTER
            </div>

            {/* Before Image (Foreground - Shows on the left side) */}
            <div
                className="absolute inset-0 h-full w-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeAlt}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                />

                {/* Label for Before */}
                <div className="absolute bottom-4 left-4 z-10 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    BEFORE
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg text-emerald-600">
                    <GripVertical size={16} />
                </div>
            </div>

            {/* Range Input for Screen Readers */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison slider"
            />
        </div>
    );
};
