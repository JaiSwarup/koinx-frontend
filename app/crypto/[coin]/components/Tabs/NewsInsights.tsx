import { motion } from 'framer-motion';
import { useState } from 'react';
import NewsCard from './NewsCard';
import SimpleCarousel from '../SimpleCarousel';

type Props = {};

export default function NewsInsights({}: Props) {

    return (
        <div className="overflow-hidden relative">
            <h1 className="font-medium text-xl mb-4">News Insights</h1>
            <SimpleCarousel count={3} cardWidth={360}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                {/* Add more NewsCard components as needed */}
            </SimpleCarousel>
        </div>
    );
}
