import Image from 'next/image';
import clsx from 'clsx';
type Props = {
    src: string
    color: string
};

export default function KeyEvent({ src, color }: Props) {
    return (
        <div className={clsx(`flex items-center border border-gray-200 rounded-lg shadow  transition-colors duration-300`, `${color}`)}>
            <div className="rounded-lg w-28 h-28 relative">
                <Image src={src} alt="" fill className='object-cover' />
            </div>
            <div className="flex flex-col p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Calculate your Profits</h5>
                <button className='bg-white rounded-lg text-black px-3 py-2'>Check Now {"->"}</button>
            </div>
        </div>
    );
}