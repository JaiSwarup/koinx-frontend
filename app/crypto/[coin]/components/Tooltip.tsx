
import { FaInfoCircle } from 'react-icons/fa';
import { useState } from 'react';
type Props = {
    
};

export default function Tooltip({  }: Props) {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    return (
        <>
        <FaInfoCircle
            className="text-xl text-gray-500"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
        />
        {tooltipVisible && (
            <div
                className="absolute z-10 px-2 py-1 text-sm font-light text-white rounded-lg shadow-sm bg-gray-700 w-1/2 "
                style={{ left: '50%', transform: 'translateX(-50%)' }}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
            >
                Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user without the need for intermediaries.
            </div>
        )}
        </>
    );
}