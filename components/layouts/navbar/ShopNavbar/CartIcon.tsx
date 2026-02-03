"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartIcon() {
    return (
        <Link href="/cart" aria-label="Go to cart">
            <Button variant="ghost" size="icon" className="rounded-full border p-2">
                <ShoppingCart className="h-5 w-5" />
            </Button>
        </Link>
    );
}
