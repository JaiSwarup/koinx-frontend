"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CryptoPage() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res) => {
            // console.log(res.data.length)
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {data && data.map((coin: any, i: number) => (
                <Link href={`/crypto/${coin.id}`} key={i} className="flex gap-4 bg-white p-4 rounded-md shadow-md">
                    <div className="w-8 h-8 relative">
                        <Image src={coin.image} alt={coin.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h2>{coin.name}</h2>
                        <p>{coin.symbol.toUpperCase()}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}