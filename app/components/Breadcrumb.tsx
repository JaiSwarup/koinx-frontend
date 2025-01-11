"use client";
import { usePathname } from "next/navigation";
type Props = {
    
};


export default function Pagination({  }: Props) {
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
    const capitalize= <T extends string>(s: T) => (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;
    // console.log(pathname.split("/"))
    return (
        <header className="flex self-start gap-2 text-sm text-gray-600 p-4 pt-0">
            {pathname.split("/").map((path: string, index) => {
                if (index == 0) {
                    return
                }
                if (index === pathname.split("/").length - 1) {
                    return <span key={index} className="text-gray-900">{capitalize(path)}</span>
                }
                return <span key={index} className="">{pathVariables[path]} &raquo;</span>
            })}
        </header>
    );
}