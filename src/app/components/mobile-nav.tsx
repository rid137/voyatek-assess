import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, X } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';
import { useEffect } from 'react';

interface IMobileNavProps {
    isNavOpen: boolean;
    setIsNavOpen: (isNavopen: boolean) => void;
}

const MobileNav = ({isNavOpen, setIsNavOpen}: IMobileNavProps) => {
    const handleNavClick = () => {
        setIsNavOpen(!isNavOpen)
    }

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isNavOpen]);

    return (
        <>
            <Slide direction="down" triggerOnce>
        
            <header className="xl:hidden z-[9999]">
                <div className={`${isNavOpen && "hidden"} pt-6 pb-10 flex items-center justify-between section-padding`}>
                    <Link className='w-[50%]' href="/"><Image src="/icons/shared/logo.svg" width={100} height={80} alt="logo icon" /></Link>
                    <MenuIcon
                        className='size-6 cursor-pointer text-white' 
                        onClick={handleNavClick}
                    />
                </div>

                {/* Navbar */}
                <>
                    {
                        isNavOpen &&
                        <nav 
                            className="absolut bg-white/90 backdrop-blur-md h-screen w-screen bg-whit px-5 py-6 z-[999] xl:hidden flex flex-col gap-4"
                        >
                            <div className="flex self-end">
                                <X
                                    className='size-6 cursor-pointer text-black'
                                    onClick={handleNavClick}
                                />
                            </div>
                        
                        <Link onClick={handleNavClick} href="/" className="w-fit hover:opacity-50 cursor-pointer">
                            <p>Home</p>
                        </Link>
                        <div className="w-fit hover:opacity-50 opacity-70 cursor-pointer">
                            <p>About Us</p>
                        </div>
                        <div className="w-fit hover:opacity-50 opacity-70 cursor-pointer">
                            <p>Features</p>
                        </div>
                        <div className="w-fit hover:opacity-50 opacity-70 cursor-pointer">
                            <p>Solution</p>
                        </div>
                    </nav>
                    }
                </>

                <style jsx global>{`
                    .no-scroll {
                        overflow: hidden;
                    }
                `}</style>
        </header>
        </Slide>
        </>
    )
}

export default MobileNav