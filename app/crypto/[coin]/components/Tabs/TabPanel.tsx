import { useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion'
import clsx from 'clsx';
import Overview from './Overview';
import Fundamentals from './Fundamentals';
import NewsInsights from './NewsInsights';
import Sentiment from './Sentiment';
import About from './About';
import Tokenomics from './Tokenomics';
import Team from './Team';
const tabs = [
	{
		name: 'tab1',
		label: 'Overview',
		render: () => <Overview />
	},
	{
		name: 'tab2',
		label: 'Fundamentals',
		render: () => <Fundamentals />
	},
	{
		name: 'tab3',
		label: 'News Insights',
		render: () => <NewsInsights />
	},
	{
		name: 'tab4',
		label: 'Sentiment',
		render: () => <Sentiment />
	},
	{
		name: 'tab5',
		label: 'Team',
		render: () => <Team />
	},
	{
		name: 'tab6',
		label: 'Technicals',
		render: () => <About />
	},
	{
		name: 'tab7',
		label: 'Tokenomics',
		render: () => <Tokenomics />
	}
];

const tabContentVariants: Variants = {
	initial: {
		y: 10,
		opacity: 0
	},
	enter: {
		y: 0,
		opacity: 1
	},
	exit: {
		y: 10,
		opacity: 0
	}
}

export default function TabPanel() {
 
    const [activeTab, setActiveTab] = useState<any>(tabs[0])

    const handleClick = (e: any, tab: any) => {
        e.preventDefault()

        setActiveTab(tab)
    }

	const isSelected = (tab: any) => activeTab.name === tab.name

	return (
        <>
			<div className="flex my-2 text-gray-700 relative">
                <div className='absolute bottom-0 right-0 left-0 rounded-full bg-gray-400 h-[2px] w-full' />
                {tabs.map((tab) => (
                    <div
                    key={tab.name}
                    className={clsx(`relative flex items-center`, isSelected(tab) && 'text-blue-500 font-bold')}
                    >
                        <button onClick={(e: any) => handleClick(e, tab)} className='flex-1 px-3 py-2' >
                            {tab.label}
                        </button>
                        {isSelected(tab) && <motion.div layoutId='indicator' className='absolute bottom-0 right-0 left-0 h-[4px] bg-blue-500 rounded-full' />}
                    </div>
                ))}
            </div>
            <div className="w-full bg-white rounded-xl p-4 overflow-hidden flex flex-col">
                
            <div className='flex-1 p-4 text-black h-[50rem] bg-white '>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab.name || "empty"}
                        variants={tabContentVariants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        transition={{
                            duration: .3
                        }}
                    >
                        {activeTab && activeTab.render()}
                    </motion.div>
                </AnimatePresence>
            </div>
            
        </div>
        </>
	)
}