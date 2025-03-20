import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import GradientButton from './common/gradient-button';

const CardDeal = () => {
    return (
        <section className='section-padding mb-14 md:mb-28 text-white flex flex-col xl:flex-row items-cente gap-10 lg:gap-6 xl:gap-10'>
            {/* Left section */}
            <div className="w-full xl:w-[50%] xl:pt-6">
                <Fade cascade damping={0.2} className='w-full overflow-hidden'>
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 xl:mb-8 !leading-[1.5] xl:w-[90%]">Find a better card deal in few easy steps.</h3>
                    <p className="text-sm md:text-normal opacity-70 mb-4 xl:mb-8 w-[90%]">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <GradientButton text='Get Started' />
                </Fade>
            </div>

            {/* Right section */}
            <div className="w-full xl:w-[50%]">
                <section className="relative flex items-center justify-center d:h-[40rem] g-[#14101D]">
                    {/* Circles */}
                    <div className="absolute w-[17rem] md:w-[27rem] h-[17rem] md:h-[27rem] rounded-full border- border-[10px] border-[#133E4B]  /10 flex items-center justify-center">
                        <div className="w-[12rem] md:w-[17rem] h-[12rem] md:h-[17rem] rounded-full border-[6px] border-[#133E4B]  /20 flex items-center justify-center">
                        <div className="w-[4rem] md:w-[7rem] h-[4rem] md:h-[7rem] rounded-full border-[3px] border-[#133E4B]  /30"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="z-10 w-full">
                        <div className="overflow-hidden xl:pl-10 mb-6 md:mb-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-16 xl:gap-0 xl:justify-between w-full">
                            <Fade cascade damping={0.2} className='w-full'>
                                {/* Scan credit card */}
                                <div className="bg-slate-950 w-full md:w-fit flex items-center flex-col gap-2 p-4 rounded-lg bg-custom-gradient">
                                    <div className="bg-[#00030C] rounded-xl p-2">
                                        <Image src="/icons/card-deal/scan.svg" width={20} height={20} alt='scan icon' />
                                    </div>
                                    <p className="text-md font-medium">Scan Credit Cards</p>
                                    <p className="opacity-70 text-center">Scan your credit card <br /> in 4 minutes.</p>
                                </div>

                                {/* Online Analysis */}
                                <div className="bg-slate-950 w-full md:w-[18rem] flex items-cente flex-col gap-2 p-4 rounded-lg bg-custom-gradient">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-md font-medium">Online Analysis</p>
                                        <div className="flex items-center gap-1">
                                            <p className='text-sm'>1 Month</p>
                                            <Image src="/icons/card-deal/white.svg" width={10} height={10} alt='white arrow down icon' />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-[#00D2AA]">
                                            <p className="">$ 2,334,67</p>
                                            <p className="opacity-70">Income</p>
                                        </div>
                                        <div className="text-[#00D9F5]">
                                            <p className="">$ 5.31M</p>
                                            <p className="opacity-70">Expenses</p>
                                        </div>
                                    </div>

                                    <div className="w-full mb-2">
                                        <Image src="/icons/card-deal/chart.svg" width={1000} height={400} alt='chart' />
                                    </div>

                                    <div className="flex items-center justify-center w-full text-xs">
                                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, index) => (
                                            <div 
                                                key={index} 
                                                className={`p-2 cursor-default rounded-lg transition-all duration-300 ease-in-out ${month === 'Mar' ? 'bg-gradient-to-br from-[#00F5A0] to-[#00D9F5]' : 'hover:bg-gradient-to-br hover:from-[#00F5A0] hover:to-[#00D9F5]'}`}
                                            >
                                                {month}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        {/* Pay method */}
                        <div className="flex justify-center items-center w-full overflow-hidden">
                            <Fade delay={200} className='w-full flex justify-center'>
                                <div className="bg-slate-950 w-full md:w-[18rem] flex flex-col gap-2 p-4 rounded-lg bg-custom-gradient">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-md font-medium">Pay Method</p>
                                        <Image src="/icons/card-deal/white.svg" width={14} height={14} alt='white arrow down icon' />
                                    </div>

                                    <div className="flex items-center justify-around w-full">
                                        <div className="bg-white hover:scale-95 transition-all duration-300 ease-in-out px-2 py-[.4rem] rounded-lg">
                                            <Image src="/icons/card-deal/paypal.svg" width={24} height={24} alt='paypal icon' />
                                        </div>
                                        <div className="bg-white hover:scale-95 transition-all duration-300 ease-in-out p-2 rounded-lg">
                                            <Image src="/icons/card-deal/apple.svg" width={24} height={24} alt='apple icon' />
                                        </div>
                                        <div className="bg-white hover:scale-95 transition-all duration-300 ease-in-out p-2 rounded-lg">
                                            <Image src="/icons/card-deal/visa.svg" width={24} height={24} alt='visa icon' />
                                        </div>
                                        <div className="bg-white hover:scale-95 transition-all duration-300 ease-in-out py-[.4rem]  rounded-lg w-ful h-ful">
                                            <Image src="/icons/card-deal/shopify.svg" width={40} height={10} alt='shopify icon' />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </section>
            </div>
        </section>
    )
}

export default CardDeal
