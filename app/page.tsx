import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to Koinx</h1>
            <h1 className="text-2xl font-semibold text-gray-500">Your Gateway to Crypto Taxes and Accounting</h1>
            <p>
                Check out <Link href="/crypto" className='text-blue-500 underline'>crypto currencies</Link>
            </p>
        </div>
    );
}