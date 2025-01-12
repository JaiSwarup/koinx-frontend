
type Props = {
    
};

export default function YouMay({  }: Props) {
    return (
        <div className="w-full bg-white p-8">
            <h1 className="text-2xl">You May Also Like</h1>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">Bitcoin</h1>
                        <p className="text-gray-500">BTC</p>
                    </div>
                    <p className="text-green-500">+5.2%</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">Ethereum</h1>
                        <p className="text-gray-500">ETH</p>
                    </div>
                    <p className="text-red-500">-3.2%</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold">Dogecoin</h1>
                        <p className="text-gray-500">DOGE</p>
                    </div>
                    <p className="text-green-500">+1.2%</p>
                </div>
            </div>
        </div>
    );
}