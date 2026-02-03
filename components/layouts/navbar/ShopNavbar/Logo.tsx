// components/navbar/logo.tsx
import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/img/logo.png"
                alt="Groceri logo"
                width={120}
                height={40}
                priority
            />
        </Link>
    );
}
