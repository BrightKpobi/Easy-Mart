import { HeroBanner } from "@/components/shared/HeroBanner/HeroBanner";

import ProductGrid from "@/components/shared/product/ProductGrid";
import { FeaturedProducts } from "@/components/shared/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <ProductGrid />
      <ProductGrid />
      <FeaturedProducts />

    </main >
  );
}
