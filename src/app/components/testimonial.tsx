import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import GradientButton from './common/gradient-button';
import { testimonials } from '@/data/handle-business-data';

const Testimonial = () => {
    return (
        <section className='section-padding mb-10 text-white w-full'>
            <Slide direction="down">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-20 w-full mb-10 md:mb-16">
                    <div className="w-full lg:w-[50%]"><h3 className="text-xl md:text-2xl lg:text-4xl font-bold !leading-[1.5] lg:w-[70%]">What people are saying about us</h3></div>
                    <div className="w-full lg:w-[50%]"><p className="text-sm md:text-normal opacity-70 lg:w-[60%]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>                </div>
                </div>
            </Slide>

            {/* Testimonial card */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-2 md:gap-10 mb-16 overflow-hidden">
                <Fade cascade damping={0.2} className='w-full overflow-hidden'>
                {
                    testimonials?.map((testimonial, index) => (
                        <article key={index} className={`${index === 0 && "bg-custom-gradient"} cursor-default -1/3 md:h-[18rem] px-4 py-6 flex flex-col justify-center gap-6 md:gap-10 hover:bg-custom-gradient rounded-lg`}>
                            <Image src="/icons/testimonials/quote.svg" width={24} height={24} alt='quote string' />
                            <p className='w-full md:w-[80%] md:h-[28%]'>{testimonial?.message}</p>

                            <div className="flex items-center gap-3">
                                <Image className='rounded-full object-cover' src={testimonial.profileImage} width={36} height={36} alt='user profile image' />
                                <div className="">
                                    <p className="text-md">{testimonial?.name}</p>
                                    <p className="opacity-70 text-sm">{testimonial?.role}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }
                </Fade>
            </div>

            {/* Logo icons */}
            <Fade cascade damping={0.2}>
                <div className="flex items-center justify-evenly w-full mb-16 gap-4">
                    <div className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8">
                        <Image src="/icons/testimonials/airbnb.svg" layout="responsive" width={150} height={150} alt='airbnb logo' />
                    </div>
                    <div className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8">
                        <Image src="/icons/testimonials/binance.svg" layout="responsive" width={150} height={150} alt='binance logo' />
                    </div>
                    <div className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8">
                        <Image src="/icons/testimonials/coinbase.svg" layout="responsive" width={150} height={150} alt='coinbase logo' />
                    </div>
                    <div className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8">
                        <Image src="/icons/testimonials/dropbox.svg" layout="responsive" width={150} height={150} alt='dropbox logo' />
                    </div>
                </div>
            </Fade>

            {/* Try our service component */}
            <Fade delay={0.4}>
                <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full rounded-lg bg-gradient-to-bl from-[#FFFFFF]/30 via-[#6D6D6D]/30 to-[#11101D] py-6 md:py-12 px-6 lg:px-10 xl:px-32">
                    <div className="">
                        <h3 className="text-xl md:text-2xl lg:text-4xl  font-bold mb-4 !leading-[1.5]">Let’s try our service now!</h3>
                        <p className="text-sm md:text-normal opacity-70 lg:w-[90%] xl:w-[80%]">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    </div>

                    <div className="w-full md:w-fit flex justify-start items-start md:justify-end">
                    <GradientButton text='Get Started' />
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Testimonial
