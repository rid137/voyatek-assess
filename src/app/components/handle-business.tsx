import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import GradientButton from './common/gradient-button';
import { handleBusinessData } from '@/data/handle-business-data';

const HandleBusiness = () => {
    return (
        <section className='section-padding mb-14 md:mb-28 xl:mb-40 text-white flex flex-col xl:flex-row items-cente gap-10'>
            {/* Left section */}
            <div className="w-full xl:w-[50%]">
                <Fade cascade damping={0.2} className='w-full overflow-hidden'>
                    <h3 className="text-xl md:text-2xl lg:text-4xl font-medium mb-4 xl:mb-8 !leading-[1.5]">You do the business, <br /> we’ll handle the money.</h3>
                    <p className="text-sm md:text-normal opacity-70 mb-4 xl:mb-8 w-[90%]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <GradientButton text='Get Started' />
                </Fade>
            </div>

            {/* Right section */}
            <div className="w-full overflow-hidde xl:w-[50%]">
                <div className="flex flex-col w-full overflow-hidden gap-4">
                    <Fade cascade damping={0.2} className='w-full overflow-hidden'>
                        {
                            handleBusinessData?.map((item, index) => (
                                <article 
                                    key={index} 
                                    className={`${index === 1 && "bg-gradient-to-b from-white/30 to-[#14101D]"} flex items-start gap-4 p-4 rounded-lg transition-all duration-300 cursor-default hover:bg-gradient-to-b hover:from-white/30 hover:to-[#14101D]`}
                                >
                                    <Image src={item?.icon} width={40} height={40} alt='card icon' />
                                    <div className='text-white'>
                                        <p className="text-md">{item?.title}</p>
                                        <p className="text opacity-70">{item?.body}</p>
                                    </div>
                                </article>
                            ))
                        }
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default HandleBusiness
