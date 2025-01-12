import Image from "next/image";

export default function GetStarted() {
    return (
        <div className="py-8 px-8 w-full flex flex-col  bg-blue-600 rounded-xl items-center text-center gap-4 text-white">
            <h1 className="text-2xl font-semibold">Get Started with KoinX for free</h1>
            <p className="font-light text-base">With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.</p>
            <div className="relative w-40 h-40">
              <Image src="/Frame.png" alt="" fill className="object-cover" />
            </div>
            <button className="bg-white text-black rounded-lg px-4 py-2">Get Started for FREE</button>
        </div>
    );
}