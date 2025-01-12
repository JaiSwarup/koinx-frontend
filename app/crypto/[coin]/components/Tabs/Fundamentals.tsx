import Tooltip from "../Tooltip";

type Props = {};

export default function Fundamentals({}: Props) {

    return (
        <div>
            <div className="flex gap-4 items-center mb-4 relative">
                <h1 className="font-medium text-xl">Fundamentals</h1>
                <Tooltip />
            </div>
            <div className="grid grid-cols-2 gap-4 font-light text-sm">
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">Market Cap</h1>
                    <p className="">$1.2T</p>
                </div>
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">Volume</h1>
                    <p className="">$1.2T</p>
                </div>
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">Circulating Supply</h1>
                    <p className="">1.2T</p>
                </div>
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">Total Supply</h1>
                    <p className="">1.2T</p>
                </div>
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">All Time High</h1>
                    <p className="">$1.2T</p>
                </div>
                <div className="flex justify-between pb-2 border-b-2">
                    <h1 className="text-gray-600">All Time Low</h1>
                    <p className="">$1.2T</p>
                </div>
            </div>
        </div>
    );
}
