
import { Navbar as ShopNavbar } from "@/components/layouts/navbar/ShopNavbar/Navbar";

import ShopFooter from "@/components/layouts/footer/ShopFooter/Footer";

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>

            <main >
                <ShopNavbar />
                {children}
                <ShopFooter />
            </main>

        </>
    );
}