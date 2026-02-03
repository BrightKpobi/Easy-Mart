import ProductCard from "@/components/shared/product/ProductCard"

const PRODUCTS = [
    { id: '1', name: 'Apple AirPods Pro 2nd gen', description: 'Apple AirPods Pro (2nd Gen) with M...', price: 399.99, rating: 4.5, image: '/img/item.png' },
    { id: '2', name: 'Canon EOS R5', description: 'The Canon EOS R5 is a game-chan...', price: 3899.99, rating: 4.5, image: '/img/item.png' },
    { id: '3', name: 'PlayStation 5', description: 'The PlayStation 5 takes gaming to t...', price: 499.99, rating: 4.5, image: '/img/item.png' },
    { id: '4', name: 'Samsung Galaxy S23', description: 'The Samsung Galaxy S23 offers an ...', price: 799.99, rating: 4.5, image: '/img/item.png' },
    { id: '5', name: 'ASUS ROG Zephyrus G16', description: 'The ASUS ROG Zephyrus G16 gamin...', price: 1999.99, rating: 4.5, image: '/img/item.png' },
];

export default function ProductGrid() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-[#374151] mb-8">Popular products</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
                {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}