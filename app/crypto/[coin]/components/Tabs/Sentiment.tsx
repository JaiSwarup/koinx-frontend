import { motion } from 'framer-motion';
import { useState } from 'react';
import KeyEvent from './KeyEvent';
import { IoNewspaper } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import Tooltip from '../Tooltip';
import SimpleCarousel from '../SimpleCarousel';

type Props = {
    
};

export default function Sentiment({  }: Props) {    
    return (
        <div className="">
            <h1 className="font-medium text-3xl mb-4">Sentiment</h1>
            <div className="flex gap-4 items-center mb-4 relative">
                <h1 className="font-medium text-xl text-gray-500">Key Events</h1>
                <Tooltip />
            </div>
            <SimpleCarousel cardWidth={360} count={2}>
                    <KeyEvent logo={IoNewspaper} color={"bg-blue-200 hover:bg-blue-100"} hover="bg-blue-500" />
                    <KeyEvent logo={FaArrowTrendUp} color={"bg-green-200 hover:bg-green-100"} hover="bg-green-500" />
                    {/* Add more NewsCard components as needed */}
            </SimpleCarousel>
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
                        <p>8%</p>
                        <h1 className='text-2xl font-bold'>Sell</h1>
                        <div className='h-[4px] bg-red-400 w-[16%] rounded-full' />
                        <p>16%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}