import Image from 'next/image';
import clsx from 'clsx';
import { BsArrowRight } from 'react-icons/bs';
type Props = {
    src: string
    color: string
    title: string
};

export default function KeyEvent({ src, color, title }: Props) {
    return (
        <div className={clsx(`flex flex-1 items-center border border-gray-200 rounded-lg shadow  transition-colors duration-300 pl-3 pr-2 py-1`, `${color}`)}>
            <div className="rounded-lg w-24 h-24 relative shrink-0">
                <Image src={src} alt="" fill className='object-cover' />
            </div>
            <div className="flex flex-col p-8 leading-normal">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h5>
                <button className='bg-white rounded-lg text-black px-2 py-2 flex items-center gap-1'>Check Now <BsArrowRight  /></button>
            </div>
        </div>
    );
}