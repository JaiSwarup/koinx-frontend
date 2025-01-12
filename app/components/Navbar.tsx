import Link from "next/link";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-5 bg-white border-b border-gray-200 shadow-md font-medium">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link href="/" className="h-10 w-20 relative"><Image src="/logo.svg" alt="Koinx Logo" fill /></Link>
                <span className="sr-only">Home</span>
            </div>
            <div className="hidden md:flex items-center flex-shrink-0 mr-6 gap-6">
                <Link href="#" className="" >Crypto Taxes</Link>
                <Link href="#" className="" >Free Tools</Link>
                <Link href="#" className="" >Resource Center</Link>
                <Link href="#" className="ml-4 bg-blue-600 rounded-lg text-white border px-4 py-2" >Get Started</Link>
            </div>
            <div className="flex md:hidden">
                <BiMenu className="h-6 w-6" />
            </div>
        </nav>
    );
}