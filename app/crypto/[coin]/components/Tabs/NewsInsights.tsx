import { motion } from 'framer-motion';
import { useState } from 'react';
import NewsCard from './NewsCard';

type Props = {};

export default function NewsInsights({}: Props) {
    const [position, setPosition] = useState(0);
    const cardWidth = 360; // Width of a single card
    const maxPosition = -((cardWidth * 3) + 20); // Total draggable width (adjust based on number of cards and gap)
    
    const handleDragEnd = (event: any, info: { offset: { x: number; }; }) => {
        const newPosition = position + info.offset.x;
        setPosition(Math.min(0, Math.max(newPosition, maxPosition)));
    };

    const handleLeftClick = () => {
        setPosition(Math.min(position + cardWidth, 0));
    };

    const handleRightClick = () => {
        setPosition(Math.max(position - cardWidth, maxPosition));
    };

    return (
        <div className="overflow-hidden relative">
            <h1 className="font-medium text-xl mb-4">News Insights</h1>
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
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    {/* Add more NewsCard components as needed */}
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
    );
}
