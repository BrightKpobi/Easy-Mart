// data/itemdata.ts

export interface Product {
    id: string | number
    name: string
    image: string

    price: string
    priceValue: number
    currency?: string

    rating: number
    reviews: number

    category: string
    vendor: string

    available: boolean
    isFavorite?: boolean
}

/* ================= HOME APPLIANCES ================= */

export const HomeAppliances: Product[] = [
    {
        id: "ha-1",
        name: "LG Smart Refrigerator",
        image:
            "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=800",
        price: "799",
        priceValue: 799,
        currency: "USD",
        rating: 4.8,
        reviews: 21,
        category: "home-appliances",
        vendor: "LG Official Store",
        available: true,
        isFavorite: false,
    },
    {
        id: "ha-2",
        name: "Samsung Washing Machine",
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800",
        price: "499",
        priceValue: 499,
        currency: "USD",
        rating: 4.6,
        reviews: 18,
        category: "home-appliances",
        vendor: "Samsung Store",
        available: true,
        isFavorite: true,
    },
    {
        id: "ha-3",
        name: "Samsung Washing Machine",
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800",
        price: "499",
        priceValue: 499,
        currency: "USD",
        rating: 4.6,
        reviews: 18,
        category: "home-appliances",
        vendor: "Samsung Store",
        available: true,
        isFavorite: true,
    },
    {
        id: "ha-4",
        name: "Samsung Washing Machine",
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800",
        price: "499",
        priceValue: 499,
        currency: "USD",
        rating: 4.6,
        reviews: 18,
        category: "home-appliances",
        vendor: "Samsung Store",
        available: true,
        isFavorite: true,
    },
    {
        id: "ha-5",
        name: "Samsung Washing Machine",
        image:
            "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800",
        price: "499",
        priceValue: 499,
        currency: "USD",
        rating: 4.6,
        reviews: 18,
        category: "home-appliances",
        vendor: "Samsung Store",
        available: true,
        isFavorite: true,
    },
]

/* ================= FRUITS ================= */

export const Fruits: Product[] = [
    {
        id: "fr-1",
        name: "Fresh Apples",
        image:
            "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800",
        price: "5",
        priceValue: 5,
        currency: "USD",
        rating: 4.9,
        reviews: 34,
        category: "fruits",
        vendor: "Green Farm",
        available: true,
        isFavorite: true,
    },
    {
        id: "fr-2",
        name: "Organic Bananas",
        image:
            "https://images.unsplash.com/photo-1574226516831-e1dff420e12e?q=80&w=800",
        price: "3",
        priceValue: 3,
        currency: "USD",
        rating: 4.7,
        reviews: 20,
        category: "fruits",
        vendor: "Organic Market",
        available: true,
    },
]

/* ================= STAFF / SERVICES ================= */

export const StaffServices: Product[] = [
    {
        id: "st-1",
        name: "Home Cleaning Service",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        price: "25",
        priceValue: 25,
        currency: "USD",
        rating: 5.0,
        reviews: 50,
        category: "staff",
        vendor: "CleanPro",
        available: true,
        isFavorite: true,
    },
]
