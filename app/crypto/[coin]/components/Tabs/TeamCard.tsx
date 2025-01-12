import Image from 'next/image';
import clsx from 'clsx';
type Props = {
    src: string
    name: string
    position: string
};

export default function TeamCard({ src, name, position }: Props) {
    return (
        <div className="flex items-center rounded-lg bg-blue-100 px-4 py-2">
            <div className='flex flex-col items-center w-28'>
                <div className="rounded-lg w-24 h-24 relative overflow-hidden">
                    <Image src={src} alt="" fill className='object-cover' />
                </div>
                <div className='flex flex-col items-center mt-2 text-center'>
                    <span className='text-sm font-semibold text-gray-800'>{name}</span>
                    <span className='text-xs text-gray-500'>{position}</span>
                </div>
            </div>
            <div className="flex flex-col p-2 leading-normal">
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
            </div>
        </div>
    );
}