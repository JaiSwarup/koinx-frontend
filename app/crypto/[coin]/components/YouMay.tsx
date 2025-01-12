import axios from 'axios'
import { useEffect, useState } from 'react'
import LikeCard from './LikeCard';
import SimpleCarousel from './SimpleCarousel';

export default function YouMay() {
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
        <div className="w-full bg-white p-8">
            <h1 className="text-2xl">You May Also Like</h1>
            <SimpleCarousel cardWidth={200} count={15}>
                {trending.map((coin, i) => (
                    <LikeCard key={`you-${i}`} coin={coin} />
                ))}
            </SimpleCarousel>
            
            <h1 className="text-2xl">Trending</h1>
            <SimpleCarousel cardWidth={300} count={15}>
                {trending.map((coin, i) => (
                    <LikeCard key={`you-${i}`} coin={coin} />
                ))}
            </SimpleCarousel>
        </div>
    );
}