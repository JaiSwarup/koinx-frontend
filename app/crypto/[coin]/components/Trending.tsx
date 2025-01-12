
type Props = {
    
};

export default function Trending({  }: Props) {
    return (
        <div className="w-full flex flex-col bg-white rounded-lg p-8">
            <h1 className="text-2xl font-semibold">Trending Coins (24h)</h1>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            <h1 className="font-medium">Bitcoin(BTC)</h1>
                    </div>
                    <p className="text-green-500 bg-green-100 rounded-md px-4 py-2">+5.2%</p>
                </div>
                <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <h1 className="font-medium">Ethereum(ETH)</h1>
                    </div>
                    <p className="text-green-500 bg-green-100 rounded-md px-4 py-2">+5.2%</p>
                </div>
                <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                            <h1 className="font-medium">Polygon(MATIC)</h1>
                            
                    </div>
                    <p className="text-green-500 bg-green-100 rounded-md px-4 py-2">+5.2%</p>
                </div>
                
            </div>
        </div>
    );
}