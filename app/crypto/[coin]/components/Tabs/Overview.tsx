type Props = {
    
};

export default function Overview({  }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-3xl">Performance</h1>
            <div className="grid grid-cols-[auto,1fr,auto] grid-rows-2 gap-4 items-center">
                {/* <div className=""> */}
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">Today's Low</h1>
                        <p className="text-gray-500">${"444.90"}</p>
                    </div>
                    <div className="w-full h-[4px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">Today's High</h1>
                        <p className="text-gray-500">${"444.90"}</p>
                    </div>
                {/* </div> */}
                {/* <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center"> */}
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">52W Low</h1>
                        <p className="text-gray-500">${"444.90"}</p>
                    </div>
                    <div className="w-full h-[4px] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">52W High</h1>
                        <p className="text-gray-500">${"444.90"}</p>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}
