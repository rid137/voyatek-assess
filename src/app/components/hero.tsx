import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
    return (
        <section className='flex flex-col xl:flex-row items-center section-paddin justify-center w-full border-none mb-10 -mt-[.11rem]'>
            {/* Left section: Hero text */}
            <div className="xl:pb-20 pb-8 w-full xl:w-[50%] section-paddin pl-4 lg:pl-20 xl:pl-28 g-[url('/images/hero/round-bg.svg')] bg-cover bg-center rounded-full">
                <Fade>
                    <div className="mb-5 p-2 rounded-lg flex items-center gap-4 bg-gradient-to-t from-[#272727]/30 to-[#11101D] w-fit">
                        <Image src="/icons/hero/discount.svg" width={30} height={30} alt='discount icon' />
                        <p className="uppercase text-white sm:text-normal text-xs">20% <span className="opacity-70">discount for </span>1 month <span className="opacity-70">account</span></p>
                    </div>
                </Fade>

                <div>
                    <Fade delay={200}> 
                        <div className="relative mb-4">
                            <h1 className="!leading-[45px] md:!leading-[80px] lg:!leading-[90px]  text-white font-semibold text-[1.6rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] w-full">
                                The Next <br /> <span className='bg-[linear-gradient(to_right,#33BBCF_20%,#5CE1E6_50%,#7DE7EB_80%,#DEF9FA_95%)] bg-clip-text text-transparent'>Generation</span> <br /> Payment Method.
                            </h1>
                            <Image
                                src="/icons/hero/get-started.svg" 
                                alt="get started button" 
                                width={120} 
                                height={120} 
                                className="absolute top-0 right-12 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[120px] h-auto"
                            />
                        </div>
                    </Fade>


                    <Fade delay={300}>
                        <p className="text-white opacity-70 text-sm w-full md:w-[80%]">
                            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                        </p>
                    </Fade>
                </div>
            </div>
    
            {/* Right Section: Images */}
            <div className="w-full xl:w-[50%] flex flex-col -50 pt-2 bg-[url('/images/hero/grad-bg.svg')] bg-cover bg-center">
                <div className="section-padding">
                    <Fade>
                        <div className="overflow-hidden w-full ">

                        <div className="size-14 md:size-20 z-40 mb- flex items-center justify-center bg-[linear-gradient(to_left,#DEF9FA_0%,#BEF3F5_20%,#9DEDF0_40%,#7DE7EB_60%,#5CE1E6_80%,#33BBCF_100%)] rounded-full"></div>
                        </div>
                    </Fade>

                    <div className="w-full relative -mt-8 lg:-mt-14">
                        <Fade delay={200}>
                            <div className="relative z-10">
                                <Image 
                                    src="/images/hero/first-card.png" 
                                    width={400} 
                                    height={400} 
                                    alt="second card image"
                                    className="w-full max-w-[400px] h-auto object-contain"
                                />
                            </div>
                        </Fade>

                        <div className="relative z-50 -mt-44 sm:-mt-48 d:-mt-48 lg:-mt-56">
                            <Fade delay={250}>
                                <Image 
                                    src="/images/hero/seconde.png" 
                                    width={400} 
                                    height={400} 
                                    alt="first card image"
                                    className="w-full max-w-[450px] h-auto object-contain"
                                />
                            </Fade>
                        </div>   

                        <div className="relative -z-40 -mt-32 md:-mt-44 pl-10">
                            <Fade delay={300}>
                                <Image 
                                    src="/images/hero/third-card.png" 
                                    width={400} 
                                    height={400} 
                                    alt="third card image"
                                    className="w-full max-w-[260px] md:max-w-[310px] h-auto object-contain"
                                />
                            </Fade>
                        </div>
                    </div>


                    <Fade delay={350} >
                        <div className="flex justify-end pr-16 sm:pr-28 lg:-mt-10">
                            <div className="size-10 md:size-16 z-40 flex items-center justify-center bg-[linear-gradient(to_left,#DEF9FA_0%,#BEF3F5_20%,#9DEDF0_40%,#7DE7EB_60%,#5CE1E6_80%,#33BBCF_100%)] rounded-full"></div>
                        </div>
                    </Fade>

                    <Fade delay={400}>
                        <div className="pl-10">
                            <div className="size-6 z-40 flex items-center justify-center bg-[linear-gradient(to_left,#DEF9FA_0%,#BEF3F5_20%,#9DEDF0_40%,#7DE7EB_60%,#5CE1E6_80%,#33BBCF_100%)] rounded-full"></div>
                        </div>
                    </Fade>
                </div>

                <Fade delay={450}>
                    <div className="pl-10 sm:pl-28 absolut -bottom-[12rem] sm:-mt-6">
                        <Image src="/images/hero/robot-hand.png" width={1000} height={100} alt='hero section robot hand image' />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Hero;