"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Logo } from "@/components/layouts/navbar/ShopNavbar/Logo";
import { NavMenu } from "@/components/layouts/navbar/ShopNavbar/Nav-menu";
import { ProfileMenu } from "@/components/layouts/navbar/ShopNavbar/profile-menu";
import { CartIcon } from "@/components/layouts/navbar/ShopNavbar/CartIcon";

type UserType = { name: string; isSeller: boolean } | null;

export function Navbar({ user }: { user: UserType }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 justify-between">

                {/* MOBILE MENU ICON */}
                <div className="flex items-center md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                            <SheetHeader>
                                <SheetTitle>
                                    <Logo />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="mt-6">
                                <NavMenu orientation="vertical" />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* LOGO */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <Logo />
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <NavMenu orientation="horizontal" />
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-4">
                    <CartIcon />
                    <ProfileMenu user={user} />
                </div>
            </div>
        </header>
    );
}
