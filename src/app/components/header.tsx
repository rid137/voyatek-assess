"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';
import MobileNav from './mobile-nav';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    return (
        <div className='z-[999999]'>
            <Slide direction="down">
                {/* Large screen nav */}
                <nav className="hidden xl:flex items-center justify-between w-full border-0 shadow-none">
                    {/* Left Section: Logo */}
                    <div className="py-8 w-[50%] section-padding">
                        <Image src="/icons/shared/logo.svg" width={100} height={80} alt="logo icon" />
                    </div>

                    {/* Right Section: Navigation */}
                    <div className="w-[50%] flex z-[999999] py-8 section-padding" style={{ backgroundImage: 'url(/images/hero/grad-bg.svg)' }}>
                        <div className="w-full flex items-end justify-end gap-12 text-s text-white">
                        <p className="hover:opacity-50 cursor-pointer">Home</p>
                        <p className="hover:opacity-50 opacity-70 cursor-pointer">About Us</p>
                        <p className="hover:opacity-50 opacity-70 cursor-pointer">Features</p>
                        <p className="hover:opacity-50 opacity-70 cursor-pointer">Solution</p>
                        </div>
                    </div>
                </nav>
            </Slide>
            {/* Small screen nav */}
            <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>

    )
}

export default Header
