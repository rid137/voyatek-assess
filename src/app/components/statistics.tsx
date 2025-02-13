import React from 'react';
import { Plus } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';

const Statistics = () => {
    return (
        <Slide direction="up">
            <section className='px-20 section-padding mb-14 xl:mb-20 flex items-center justify-around flex-wrap'>
                <div className="flex items-center gap-[.2rem] md:gap-4 lg:gap-8">
                    <p className="flex items-center text-white sm:text-normal md:text-[1.5rem] lg:text-[2rem] font-semibold"> <span>3800</span> <span><Plus className='size-4 lg:size-6' /></span></p>
                    <p className='text-xs md:text-sm bg-[radial-gradient(circle,#DEF9FA,#BEF3F5,#9DEDF0,#7DE7EB,#5CE1E6,#33BBCF)] bg-clip-text text-transparent uppercase'>user active</p>
                </div>
                <div className="bg-white h-4 w-[.10rem] rounded opacity-50 md:block hidden"></div>

                <div className="flex items-center gap-[.2rem] md:gap-4 lg:gap-8">
                    <p className="flex items-center text-white sm:text-normal md:text-[1.5rem] lg:text-[2rem] font-semibold"> <span>230</span> <span><Plus className='size-4 lg:size-6' /></span></p>
                    <p className='text-xs md:text-sm bg-[radial-gradient(circle,#DEF9FA,#BEF3F5,#9DEDF0,#7DE7EB,#5CE1E6,#33BBCF)] bg-clip-text text-transparent uppercase'>trusted by company</p>
                </div>
                <div className="bg-white h-4 w-[.10rem] rounded opacity-50 md:block hidden"></div>

                <div className="flex items-center gap-[.2rem] md:gap-4 lg:gap-8">
                    <p className="flex items-center text-white sm:text-normal md:text-[1.5rem] lg:text-[2rem] font-semibold"> <span>$230M</span> <span><Plus className='size-4 lg:size-6' /></span></p>
                    <p className='text-xs md:text-sm bg-[radial-gradient(circle,#DEF9FA,#BEF3F5,#9DEDF0,#7DE7EB,#5CE1E6,#33BBCF)] bg-clip-text text-transparent uppercase'>transaction</p>
                </div>
            </section>
        </Slide>
    )
}

export default Statistics
