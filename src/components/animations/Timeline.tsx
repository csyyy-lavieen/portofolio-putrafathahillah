'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
    title?: string;
}

export default function Timeline({ items, title = "Journey" }: TimelineProps) {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = refs.current.indexOf(entry.target as HTMLDivElement);
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleItems((prev) => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative">
            {title && (
                <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-8 sm:mb-12 text-center">
                    {title}
                </h3>
            )}

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-neutral-400 to-neutral-200 dark:from-neutral-800 dark:via-neutral-600 dark:to-neutral-800" />

                <div className="space-y-8 sm:space-y-12">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { refs.current[index] = el; }}
                            className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                } items-start sm:items-center gap-4 sm:gap-8 transition-all duration-700 ${visibleItems.has(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Year Badge - Mobile */}
                            <div className="sm:hidden absolute left-0 w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center z-10">
                                <span className="text-[10px] font-bold text-white dark:text-black">{item.year.slice(-2)}</span>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`ml-12 sm:ml-0 flex-1 ${index % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'
                                    }`}
                            >
                                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1">
                                    <span className="hidden sm:inline-block text-xs font-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-3">
                                        {item.year}
                                    </span>
                                    <h4 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Dot - Desktop */}
                            <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-neutral-50 dark:border-neutral-950 z-10" />

                            {/* Empty space for opposite side */}
                            <div className="hidden sm:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
