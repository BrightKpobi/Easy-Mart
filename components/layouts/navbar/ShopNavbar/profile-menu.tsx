"use client";

import Link from "next/link";
import {
    User,
    LogOut,
    LayoutDashboard,
    UserCircle,
    LogIn,
    UserPlus,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type UserType = { name: string; isSeller: boolean } | null;

export function ProfileMenu({ user }: { user: UserType }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="relative h-10 w-10 rounded-full border"
                >
                    <User className="h-5 w-5 text-muted-foreground" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 p-2" sideOffset={8}>
                {!user ? (
                    <>
                        <DropdownMenuLabel className="font-normal text-muted-foreground">
                            Account
                        </DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                            <Link href="/auth/signin" className="flex items-center gap-2">
                                <LogIn className="h-4 w-4" />
                                Sign in
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                href="/auth/signup"
                                className="flex items-center gap-2 text-primary"
                            >
                                <UserPlus className="h-4 w-4" />
                                Create account
                            </Link>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <p className="text-sm">{user.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {user.isSeller ? "Seller Account" : "Buyer Account"}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/profile" className="flex items-center gap-2">
                                <UserCircle className="h-4 w-4" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        {user.isSeller && (
                            <DropdownMenuItem asChild>
                                <Link href="/seller/dashboard" className="flex items-center gap-2">
                                    <LayoutDashboard className="h-4 w-4" />
                                    Seller Dashboard
                                </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <LogOut className="h-4 w-4" />
                            Sign out
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
