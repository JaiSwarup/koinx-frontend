import Image from 'next/image';
import { FaRegClock } from 'react-icons/fa';

export default function NewsCard() {
    return (
        <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow w-[36rem] hover:bg-gray-100 relative shrink-0">
                <div className="relative w-1/2 h-full">
                    <Image src="/Frame.png" alt="Bitcoin" fill className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className="flex items-center text-gray-500 text-xs">
                        <FaRegClock className="mr-1" />
                        <span>2 hours ago</span>
                    </div>
                <div className='w-4 h-4 bg-red-800 ring-2 ring-offset-2 ring-red-400 rounded-full absolute top-5 right-5' />
                </div>
            </div>
    );
}