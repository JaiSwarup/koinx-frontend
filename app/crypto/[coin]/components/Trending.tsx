"use client"
import axios from 'axios';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Trending() {
    const [trending, setTrending] = useState<any[]>([]);
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then((res) => {
            setTrending(res.data.coins);
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="w-full flex flex-col bg-white rounded-lg p-8">
            <h1 className="text-2xl font-semibold">Trending Coins (24h)</h1>
            <div className="flex flex-col gap-4">
                {trending.slice(0, 3).map((coin, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 overflow-hidden relative">
                            <Image src={coin.item.large} alt={coin.item.name} fill className="object-cover" />
                        </div>
                        <div key={i} className="flex items-center gap-4 justify-between w-full">
                            <div className="flex flex-col">
                                <h1 className="text-md">{coin.item.name}({coin.item.symbol})</h1>
                            </div>
                            <p className={clsx("rounded-md px-2", coin.item.data.price_change_percentage_24h.usd > 0 ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100")}>{coin.item.data.price_change_percentage_24h.usd > 0 ? '+' : '-'}{Math.abs(coin.item.data.price_change_percentage_24h.usd.toFixed(2))}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}