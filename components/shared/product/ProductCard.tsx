"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductProps {
    product: {
        id: string;
        name: string;
        slug: string;
        description: string;
        price: number;
        rating: number;
        image: string;
    }
}

export default function ProductCard({ product }: ProductProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="flex flex-col gap-3 group">
            {/* Image Container - Full Bleed */}
            <div className="relative aspect-square rounded-2xl bg-[#F3F4F6] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsFavorite(!isFavorite);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-all active:scale-95 z-10"
                >
                    <Heart
                        className={`w-4 h-4 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                </button>
            </div>

            {/* Content Area */}
            <div className="flex flex-col gap-1 px-1">
                <h3 className="font-bold text-[#1F2937] text-base truncate">
                    {product.name}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-1">
                    {product.description}
                </p>

                {/* Rating Row */}
                <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[#FF8A00] text-[#FF8A00]' : 'fill-gray-200 text-gray-200'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Price & Link */}
                <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-xl text-[#111827]">
                        ${product.price.toLocaleString()}
                    </span>

                    <Link href={`/products/${product.slug}`}>
                        <Button
                            variant="outline"
                            className="rounded-full px-6 h-9 text-xs font-medium border-gray-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 shadow-none transition-all"
                        >
                            Buy now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}