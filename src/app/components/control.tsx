import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import GradientButton from './common/gradient-button';

const Control = () => {
    return (
        <section className="section-padding xl:h-[28rem] mb-14 md:mb-28 xl:mb-40 text-white flex flex-col-reverse xl:flex-row items-center justify-center gap-10 w-full">
            {/* Left section */}
            <div className="w-full xl:w-[50%] xl:relative h-full">
                {/* Paypal */}
                <Fade className='xl:absolute mb-4 xl:mb-0 right-36 -top-[4rem] ottom-40 z-50 w-ful '>
                    <div className="mb- l:mb-0  w-full md:w-[15rem] p-5 rounded-lg" style={{ backgroundImage: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), #14101D)" }}>
                        <div className="flex items-center gap-3 text-white mb-7">
                            <div className="bg-white rounded-full p-3">
                                <Image src="/icons/control/paypal.svg" width={20} height={20} alt="paypal icon" />
                            </div>
                            <div>
                                <p className="text-xl font-semibold mb-2">Paypal</p>
                                <p className="opacity-70">Checkout</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-7">
                            <div>
                                <p className="opacity-70">Total</p>
                                <p className="text-md">$210</p>
                            </div>
                            <div className="border border-[#5CE1E6] !text-[#33BBCF] px-4 py-2 rounded cursor-pointer hover:opacity-70">
                                Change
                            </div>
                        </div>
                        <div className="w-full">
                            <GradientButton text="Make Payment" className="!py-2 w-full" />
                        </div>
                    </div>
                </Fade>

                {/* Last transaction */}
                <Fade className='xl:absolute mb-4 xl:mb-0 left-0 top-32 z-10'>
                    <div className="mb- l:mb-0  w-full md:w-[25rem] p-5 pt-6 rounded-lg bg-custom-gradient">
                        <p className="text-xl font-semibold mb-6">Last Transaction</p>
                        <div className="flex flex-col gap-6 pb-6">
                            {/* Dribble */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/control/dribble.svg" width={40} height={40} alt="dribble icon" />
                                    <div>
                                        <p className="text-m">Dribbble Pro</p>
                                        <p className="opacity-70 text-sm">15 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/control/red.svg" width={10} height={10} alt="red icon" />
                                    <p>-$250,93</p>
                                </div>
                            </div>

                            {/* Netflix */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white size-10 flex justify-center items-center rounded-full">
                                        <Image src="/icons/control/netflix.svg" width={30} height={30} alt="netflix icon" />
                                    </div>
                                    <div>
                                        <p className="text-m">Netflix</p>
                                        <p className="opacity-70 text-sm">4 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/control/red.svg" width={10} height={10} alt="red icon" />
                                    <p>-$250,93</p>
                                </div>
                            </div>

                            {/* Manulife */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#DFFFF0] p-2 rounded-full">
                                        <Image src="/icons/control/manulife.svg" width={22} height={22} alt="manulife icon" />
                                    </div>
                                    <div>
                                        <p className="text-m">Manulife Cash</p>
                                        <p className="opacity-70 text-sm">4 Days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src="/icons/control/green.svg" width={10} height={10} alt="green icon" />
                                    <p>-$250,93</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* White bg text */}
                <Fade className='xl:absolute mb-4 xl:mb-0 right-14 -bottom-4 z-50 w-ful'>
                    <div className="m w-full sm:w-[20rem] bg-white rounded-lg p-3 flex items-center gap-4">
                        <Image src="/icons/control/mark.svg" width={20} height={20} alt="green mark icon" />
                        <p className="text-[#080915]">Great! Your Payment is successfully.</p>
                    </div>
                </Fade>
            </div>

            {/* Right section */}
            <div className="w-full xl:w-[50%] self-center">
                <Fade >
                    <div className="w-full">
                        <h3 className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 xl:mb-8 !leading-[1.5]">
                            Easily control your billing & invoicing.
                        </h3>
                        <p className="text-sm md:text-normal opacity-70 mb-4 xl:mb-8">
                            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci
                            rhoncus aliporttitor integer platea placerat.
                        </p>
                        <div className="flex items-center gap-4">
                            <Image
                                className="cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out"
                                src="/icons/control/app-store.svg"
                                width={150}
                                height={150}
                                alt="app store button"
                            />
                            <Image
                                className="cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out"
                                src="/icons/control/play-store.svg"
                                width={150}
                                height={150}
                                alt="play store button"
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Control;