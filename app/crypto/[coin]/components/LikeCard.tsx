import clsx from "clsx";
import Image from "next/image";
type Props = {
    coin: any
};

export default function LikeCard({ coin }: Props) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full border border-gray-900 p-5 rounded-lg">
            <div className='flex gap-4 items-center'>
                <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 overflow-hidden relative">
                    <Image src={coin.item.small}  alt={coin.item.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-md">{coin.item.symbol}</h1>
                </div>
                <p className={clsx("rounded-md px-2", coin.item.data.price_change_percentage_24h.usd > 0 ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100")}>{coin.item.data.price_change_percentage_24h.usd > 0 ? '+' : '-'}{Math.abs(coin.item.data.price_change_percentage_24h.usd.toFixed(2))}%</p>
            </div>
            <div className='w-full h-24 relative bg-gray-50'>
                <Image src={coin.item.data.sparkline}  alt={coin.item.name} fill className="object-cover" />
            </div>
        </div>
    );
}