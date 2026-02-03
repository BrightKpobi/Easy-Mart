import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/layouts/navbar/ShopNavbar/Logo"

const footerLinks = {
    shop: [
        { name: "All Products", href: "/products" },
        { name: "New Arrivals", href: "/new" },
        { name: "Discounts", href: "/deals" },
        { name: "Best Sellers", href: "/popular" },
    ],
    support: [
        { name: "Order Tracking", href: "/orders" },
        { name: "Shipping Policy", href: "/shipping" },
        { name: "Returns & Refunds", href: "/returns" },
        { name: "FAQs", href: "/faq" },
    ],
}

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
                            Your one-stop destination for the latest tech and lifestyle products. Quality guaranteed.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <Phone className="h-4 w-4 text-[#4cbe42]" />
                                <span>+1 (234) 567-890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <Mail className="h-4 w-4 text-[#4cbe42]" />
                                <span>support@brand.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Shop */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Shop</h4>
                        <ul className="space-y-4">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#4cbe42] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-500 hover:text-[#4cbe42] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Stay Updated</h4>
                        <p className="text-sm text-slate-500">Subscribe to get special offers and first look at new items.</p>
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-[#4cbe42]"
                            />
                            <Button className="w-full bg-[#4cbe42] hover:bg-[#43b939] text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t pt-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <p className="text-xs text-slate-400">
                            © {new Date().getFullYear()} BrandName. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-5">
                            <Link href="#" className="text-slate-400 hover:text-[#4cbe42] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-[#4cbe42] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-[#4cbe42] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-[#4cbe42] transition-colors">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>

                        {/* Payment Icons Placeholder */}
                        <div className="flex items-center gap-4 grayscale opacity-50">
                            <div className="h-6 w-10 bg-slate-200 rounded" />
                            <div className="h-6 w-10 bg-slate-200 rounded" />
                            <div className="h-6 w-10 bg-slate-200 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}