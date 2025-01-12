import { IconType } from "react-icons";
import clsx from "clsx";
type Props = {
    logo: IconType
    color: string
};

export default function KeyEvent({ logo: Icon, color }: Props) {
    return (
        <div className={clsx(`flex items-center border border-gray-200 rounded-lg shadow w-[28rem] transition-colors duration-300 relative shrink-0`, `bg-${color}-200 hover:bg-${color}-400 `)}>
            <div className={`pt-4 px-2 h-full`}>
                <div className={`bg-${color}-600 flex items-center justify-center p-2 rounded-full w-10 h-10`}>
                    <Icon className="text-xl text-white font-bold" />
                </div>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    );
}