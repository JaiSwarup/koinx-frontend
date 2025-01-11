import Link from "next/link";

type Props = {
    
};

export default function Navbar({  }: Props) {
    return (
        <nav className="flex items-center justify-between flex-wrap p-5 bg-white border-b border-gray-200 shadow-md font-medium">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link href="/">Logo</Link>
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