"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-background py-10">
            <div className="max-w-6xl mx-auto px-6">

                <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2 text-muted-foreground">
                    <Link href="/cart">
                        <ChevronLeft className="mr-1 w-4 h-4" /> Back to cart
                    </Link>
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Checkout Form */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-2">Checkout</h1>
                            <p className="text-muted-foreground text-sm">Fill in your details to complete your order.</p>
                        </div>

                        {/* Shipping Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-emerald-100 p-1.5 rounded-md">
                                    <Truck className="w-4 h-4 text-emerald-600" />
                                </div>
                                <h2 className="font-semibold text-lg">Shipping Information</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-xs uppercase tracking-wider text-muted-foreground">First Name</Label>
                                    <Input id="firstName" placeholder="John" className="rounded-md" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-xs uppercase tracking-wider text-muted-foreground">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" className="rounded-md" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address" className="text-xs uppercase tracking-wider text-muted-foreground">Address</Label>
                                <Input id="address" placeholder="123 Luxury St." className="rounded-md" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="city" className="text-xs uppercase tracking-wider text-muted-foreground">City</Label>
                                    <Input id="city" placeholder="New York" className="rounded-md" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="zip" className="text-xs uppercase tracking-wider text-muted-foreground">Zip Code</Label>
                                    <Input id="zip" placeholder="10001" className="rounded-md" />
                                </div>
                            </div>
                        </section>

                        {/* Payment Section */}
                        <section className="space-y-4 pt-4">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-emerald-100 p-1.5 rounded-md">
                                    <CreditCard className="w-4 h-4 text-emerald-600" />
                                </div>
                                <h2 className="font-semibold text-lg">Payment Method</h2>
                            </div>

                            <Tabs defaultValue="card" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-4">
                                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                                </TabsList>
                                <TabsContent value="card" className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="cardNumber" className="text-xs uppercase tracking-wider text-muted-foreground">Card Number</Label>
                                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="rounded-md" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 space-y-2">
                                            <Label htmlFor="expiry" className="text-xs uppercase tracking-wider text-muted-foreground">Expiry Date</Label>
                                            <Input id="expiry" placeholder="MM/YY" className="rounded-md" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="cvv" className="text-xs uppercase tracking-wider text-muted-foreground">CVV</Label>
                                            <Input id="cvv" placeholder="123" className="rounded-md" />
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="paypal">
                                    <div className="p-8 border-2 border-dashed rounded-xl text-center">
                                        <p className="text-sm text-muted-foreground">You will be redirected to PayPal to complete your purchase safely.</p>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </section>
                    </div>

                    {/* Right Side: Order Summary */}
                    <div className="lg:col-span-5">
                        <Card className="shadow-none border bg-muted/20 sticky top-8">
                            <CardHeader>
                                <CardTitle className="text-lg">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Small Items List */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 rounded-md border bg-background overflow-hidden flex-shrink-0">
                                            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-bl-md z-10">1</div>
                                            <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=100" className="object-cover h-full w-full" alt="PS5" />
                                        </div>
                                        <div className="flex-1 text-sm font-medium truncate">PlayStation 5 Console</div>
                                        <div className="text-sm font-bold">$499.99</div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>$499.99</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="text-emerald-600 font-medium">Free</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-base pt-2">
                                        <span>Total</span>
                                        <span>$499.99</span>
                                    </div>
                                </div>

                                <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-none transition-all">
                                    Pay $499.99 Now
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground pt-2">
                                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                    <span>SSL Encrypted & Secure Checkout</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </main>
    );
}