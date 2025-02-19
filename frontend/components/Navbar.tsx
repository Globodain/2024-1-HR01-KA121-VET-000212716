import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex items-center p-6 shadow-lg bg-[#004079] shadow-2xs m-5 rounded-xl h-16">
            <Image width={100} height={100} src="/logo_v0.1.svg" alt="Weather app logo" />
            <h1 className="text-white text-xl font-semibold">SkyCast</h1>
            <div className="flex flex-row">
                <Link href="/">
                <p>Home</p>
                </Link>
                <Link href="/help">
                <p>Help</p>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;