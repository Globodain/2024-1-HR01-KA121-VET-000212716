import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between p-6 shadow-lg bg-[#004079] shadow-2xs m-5 rounded-xl h-16">
            {/* Logo and Brand Section */}
            <div className="flex items-center gap-4">
                <Image 
                    width={40} 
                    height={40} 
                    src="/logo_v0.1.svg" 
                    alt="Weather app logo"
                    className="object-contain"
                />
                <h1 className="text-white text-2xl font-semibold">SkyCast</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
                <Link 
                    href="/" 
                    className="text-white hover:text-gray-200 transition-colors duration-200 text-lg"
                >
                    Home
                </Link>
                <Link 
                    href="/help" 
                    className="text-white hover:text-gray-200 transition-colors duration-200 text-lg"
                >
                    Help
                </Link>
            </nav>
        </div>
     );
}
 
export default Navbar;