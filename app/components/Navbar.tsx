import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap w-screen p-5 bg-white border-b border-gray-200 shadow-md font-medium">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link href="/" className="h-10 w-20 relative"><Image src="/logo.svg" alt="Koinx Logo" fill /></Link>
                <span className="sr-only">Home</span>
            </div>
            <div className="flex items-center flex-shrink-0 mr-6 gap-6">
                <Link href="#" className="" >Crypto Taxes</Link>
                <Link href="#" className="" >Free Tools</Link>
                <Link href="#" className="" >Resource Center</Link>
                <Link href="#" className="ml-4" >Get Started</Link>
            </div>
        </nav>
    );
}