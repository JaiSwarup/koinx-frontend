"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Pagination() {
    const pathname = usePathname();
    const pathVariables: { [key: string]: string } = {
        "" : "Home",
        "crypto-taxes": "Crypto Taxes",
        "free-tools": "Free Tools",
        "resource-center": "Resource Center",
        "get-started": "Get Started",
        "404": "404",
        "crypto": "Cryptocurrencies",
    } 
    const capitalize = <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;

    if (pathname === "/") {
        return null;
    }

    const paths = pathname.split("/").filter(Boolean);

    return (
        <header className="flex self-start gap-2 text-sm text-gray-600 p-4 pt-4">
            {/* <Link href="/">
                <p className="text-gray-900">Home &raquo;</p>
            </Link> */}
            {paths.map((path: string, index) => {
                const href = "/" + paths.slice(0, index + 1).join("/");
                if (index === paths.length - 1) {
                    return <span key={index} className="text-gray-900">{capitalize(path)}</span>;
                }
                return (
                    <Link key={index} href={href}>
                        <p className="">{pathVariables[path]} &raquo;</p>
                    </Link>
                );
            })}
        </header>
    );
}
