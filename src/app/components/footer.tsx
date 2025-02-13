import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-[#0B0A0C] section-padding pt-8 md:pt-14 pb-8 text-white'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 mb-10">
                {/* Logo and about */}
                <div>
                    <Image className='mb-8' src="/icons/shared/logo.svg" width={200} height={200} alt="logo icon" />
                    <p className="text-sm opacity-70">A new way to make the payments easy, reliable and secure.</p>
                </div>

                {/* Links */}
                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">Usefull Links</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Content</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">How it Works</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Create</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Explore</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Terms & Services</li>
                    </ul>
                </div>

                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">Community</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Help Center</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Partners</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Suggestions</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Blog</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Newsletters</li>
                    </ul>
                </div>

                <div>
                    <p className="text-[#F8F8F8] font-semibold mb-3 md:mb-6 text-sm">Partner</p>
                    <ul className="text-sm text-white flex flex-col gap-3">
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Our Partner</li>
                        <li className="cursor-pointer hover:opacity-50 opacity-70 w-fit">Become a Partner</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white border-t-[.5px] border-gray-500 flex flex-col-reverse sm:flex-row gap-6 items-center justify-between pt-10">
                <p className="text-sm opacity-70">Copyright © 2021 HooBank. All Rights Reserved.</p>
                <div className="flex items-center gap-4">
                    <Image className="cursor-pointer hover:scale-95 transition-all ease-in-out duration-300" src="/icons/footer/instagram.svg" width={25} height={22} alt='instagram icon' />
                    <Image className="cursor-pointer hover:scale-95 transition-all ease-in-out duration-300" src="/icons/footer/facebook.svg" width={22} height={22} alt='facebook icon' />
                    <Image className="cursor-pointer hover:scale-95 transition-all ease-in-out duration-300" src="/icons/footer/twitter.svg" width={22} height={22} alt='twitter icon' />
                    <Image className="cursor-pointer hover:scale-95 transition-all ease-in-out duration-300" src="/icons/footer/linkedin.svg" width={22} height={22} alt='linkedin icon' />
                </div>
            </div>
        
        </footer>
    )
}

export default Footer
