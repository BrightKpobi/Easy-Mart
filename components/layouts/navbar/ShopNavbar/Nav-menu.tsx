import Link from "next/link";

type NavMenuProps = {
    orientation?: "horizontal" | "vertical";
};

export function NavMenu({ orientation }: NavMenuProps) {
    const isVertical = orientation === "vertical";

    return (
        <div
            className={
                isVertical
                    ? "flex flex-col gap-4 text-lg"
                    : "hidden md:flex gap-8 text-sm font-medium"
            }
        >
            <Link href="/" className="hover:text-primary">
                Home
            </Link>
            <Link href="/products" className="hover:text-primary">
                Products
            </Link>

            {/* Categories dropdown */}
            <div className="relative group">
                <span className="cursor-pointer hover:text-primary">Categories</span>
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border rounded shadow-md min-w-[160px] z-50">
                    <Link href="/categories/phones" className="block px-4 py-2 hover:bg-gray-100">
                        Phones
                    </Link>
                    <Link href="/categories/laptops" className="block px-4 py-2 hover:bg-gray-100">
                        Laptops
                    </Link>
                    <Link href="/categories/accessories" className="block px-4 py-2 hover:bg-gray-100">
                        Accessories
                    </Link>
                </div>
            </div>

            <Link href="/about" className="hover:text-primary">
                About
            </Link>
        </div>
    );
}
