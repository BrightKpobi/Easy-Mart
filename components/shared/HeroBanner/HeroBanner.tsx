"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselDots,
} from "@/components/ui/carousel"

const BANNER_DATA = [
    {
        id: 1,
        subtitle: "Hurry up only few lefts!",
        title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
        buttonText: "Shop Now",
        image: "/img/item.png",
        bgColor: "#E9EEF6",
    },
    {
        id: 2,
        subtitle: "Hurry up only few lefts!",
        title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
        buttonText: "Shop Now",
        image: "/img/item.png",
        bgColor: "#E9EEF6",
    },
]

export function HeroBanner() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    return (
        <section className="mx-auto max-w-7xl px-4 py-4 md:py-8">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {BANNER_DATA.map((item, index) => (
                        <CarouselItem key={item.id}>
                            <div
                                className="flex flex-col items-center justify-between rounded-3xl overflow-hidden p-6 sm:p-8 md:flex-row md:px-16 md:py-10 min-h-[320px] md:min-h-[380px]"
                                style={{ backgroundColor: item.bgColor }}
                            >
                                {/* Text Side */}
                                <div className="flex-1 space-y-3 sm:space-y-4 text-center md:text-left z-10">
                                    <span className="text-[10px] sm:text-xs font-bold text-[#4cbe42] uppercase tracking-widest">
                                        {item.subtitle}
                                    </span>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight max-w-md">
                                        {item.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 pt-2 sm:pt-4">
                                        <Button className="rounded-full bg-[#4cbe42] px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg hover:bg-[#43b939] w-full sm:w-auto">
                                            {item.buttonText}
                                        </Button>
                                        <Link href="#" className="group flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base">
                                            Explore Deals
                                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="relative mt-6 md:mt-0 w-full flex-1 flex items-center justify-center">
                                    <div className="relative w-full aspect-[4/3] md:aspect-square max-h-[220px] sm:max-h-[280px] md:max-h-[340px]">
                                        <Image
                                            src={item.image}
                                            alt="Banner Product"
                                            fill
                                            priority={index === 0}
                                            className="object-contain drop-shadow-xl"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselDots className="mt-4" />
            </Carousel>
        </section>
    )
}