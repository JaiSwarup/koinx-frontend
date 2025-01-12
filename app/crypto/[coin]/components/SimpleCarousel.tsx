import { useState } from 'react';
import {motion} from 'motion/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
type Props = {
    children?: React.ReactNode;
    cardWidth: number;
    count: number;
};

export default function SimpleCarousel({ children, cardWidth,  count}: Props) {
    const [position, setPosition] = useState(0);
    const maxPosition = -((cardWidth * count) - 200); // Total draggable width (adjust based on number of cards and gap)

    const handleLeftClick = () => {
        setPosition((prevPosition) => Math.min(prevPosition + cardWidth, 0));
    };

    const handleRightClick = () => {
        setPosition((prevPosition) => Math.max(prevPosition - cardWidth, maxPosition));
    };
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex"
                initial={{ x: 0 }}
                animate={{ x: position }}
            >
                <motion.div className="flex gap-4">
                    {children}
            </motion.div>
            </motion.div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full text-3xl font-bold"
                onClick={handleLeftClick}
                disabled={position === 0}
            >
                <BiChevronLeft />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full text-3xl font-bold"
                onClick={handleRightClick}
                disabled={position === maxPosition}
            >
                <BiChevronRight />
            </button>
        </div>
    );
}