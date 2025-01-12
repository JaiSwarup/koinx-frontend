import { motion } from 'framer-motion';
import { useState } from 'react';
import KeyEvent from './KeyEvent';
import { IoNewspaper } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import Tooltip from '../Tooltip';

type Props = {
    
};

export default function Sentiment({  }: Props) {
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
        <div className="">
            <h1 className="font-medium text-3xl mb-4">Sentiment</h1>
            <div className="flex gap-4 items-center mb-4 relative">
                <h1 className="font-medium text-xl text-gray-500">Key Events</h1>
                <Tooltip />
            </div>
            <div className='overflow-hidden relative'>
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
                        <KeyEvent logo={IoNewspaper} color={"blue"} />
                        <KeyEvent logo={FaArrowTrendUp} color={"green"} />
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
            <div>
                <div className="flex gap-4 items-center mb-4 relative">
                    <h1 className="font-medium text-xl text-gray-500">Analyst Estimates</h1>
                    <Tooltip />
                </div>
                <div className='flex gap-4'>
                    <div className='bg-green-200 flex items-center justify-center p-2 rounded-full w-28 h-28 text-2xl text-green-600 font-bold'>
                        76%
                    </div>
                    <div className='grid grid-rows-3 grid-cols-[auto,300px,auto] gap-4 items-center'>
                        <h1 className='text-2xl font-bold'>Buy</h1>
                        <div className='h-[4px] bg-green-400 w-[76%] rounded-full' />
                        <p>76%</p>
                        <h1 className='text-2xl font-bold'>Hold</h1>
                        <div className='h-[4px] bg-gray-400 w-[8%] rounded-full' />
                        <p>76%</p>
                        <h1 className='text-2xl font-bold'>Sell</h1>
                        <div className='h-[4px] bg-red-400 w-[16%] rounded-full' />
                        <p>76%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}