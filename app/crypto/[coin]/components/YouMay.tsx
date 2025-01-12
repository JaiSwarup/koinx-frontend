import axios from 'axios'
import { useEffect, useState } from 'react'
import LikeCard from './LikeCard';
import { motion } from 'motion/react';
type Props = {
    
};

export default function YouMay({  }: Props) {
    const [trending, setTrending] = useState<any[]>([]);
    const [position, setPosition] = useState(0);
    const cardWidth = 150; // Width of a single card
    const maxPosition = -((cardWidth * 15) + 400); // Total draggable width (adjust based on number of cards and gap)
    
    const handleDragEnd = (event: any, info: { offset: { x: number; }; }) => {
        const newPosition = position + info.offset.x;
        setPosition(Math.min(0, Math.max(newPosition, maxPosition)));
    };

    const handleLeftClick = () => {
        setPosition((prevPosition) => Math.min(prevPosition + cardWidth, 0));
    };

    const handleRightClick = () => {
        setPosition((prevPosition) => Math.max(prevPosition - cardWidth, maxPosition));
    };
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
            <div className="flex gap-8 relative overflow-hidden">
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ left: maxPosition, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ x: 0 }}
                animate={{ x: position }}
                whileDrag={{ cursor: 'grabbing' }}
            >
                <motion.div className="flex gap-4">
                {trending.map((coin, i) => (
                    <LikeCard key={i} coin={coin} />
                ))}
            </motion.div>
            </motion.div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                onClick={handleLeftClick}
                disabled={position === 0}
            >
                ◀
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                onClick={handleRightClick}
                disabled={position === maxPosition}
            >
                ▶
            </button>
            </div>
        </div>
    );
}