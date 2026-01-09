'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
    children: ReactNode;
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    className?: string;
}

export default function Marquee({
    children,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    className = '',
}: MarqueeProps) {
    const animationDirection = direction === 'left' ? 'normal' : 'reverse';

    return (
        <div className={`overflow-hidden ${className}`}>
            <div
                className={`flex gap-8 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                    animationDirection: animationDirection,
                }}
            >
                {/* First set */}
                <div className="flex gap-8 shrink-0">
                    {children}
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex gap-8 shrink-0">
                    {children}
                </div>
                {/* Third set for extra smooth */}
                <div className="flex gap-8 shrink-0">
                    {children}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
        </div>
    );
}
