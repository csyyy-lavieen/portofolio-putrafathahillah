'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        let animationFrameId: number;

        let rect: DOMRect | null = null;
        const updateRect = () => {
            if (card) rect = card.getBoundingClientRect();
        };

        // Update rect on mouse enter and scroll/resize
        card.addEventListener('mouseenter', updateRect);
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect);

        const handleMouseMove = (e: MouseEvent) => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                if (!rect) rect = card.getBoundingClientRect(); // Fallback if rect is null (e.g., first move before mouseenter)
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });
        };

        card.addEventListener('mousemove', handleMouseMove);
        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', updateRect);
            window.removeEventListener('resize', updateRect);
            window.removeEventListener('scroll', updateRect);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={cardRef} className={`spotlight-card ${className}`}>
            {children}
        </div>
    );
}
