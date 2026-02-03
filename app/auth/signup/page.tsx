import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function SignUp() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
            <Card className="w-full max-w-md shadow-lg border-t-4 border-t-[#4cbe42]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center text-gray-800">Create Account</CardTitle>
                    <CardDescription className="text-center">
                        Join us today by filling out the information below
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" className="focus-visible:ring-[#4cbe42]" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" className="focus-visible:ring-[#4cbe42]" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" className="focus-visible:ring-[#4cbe42]" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" type="password" className="focus-visible:ring-[#4cbe42]" />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full bg-[#4cbe42] hover:bg-[#3da135] text-white font-semibold shadow-md transition-all active:scale-[0.98]">
                        Create Account
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="font-medium text-[#4cbe42] hover:underline underline-offset-4">
                            Login here
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}