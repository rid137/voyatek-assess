import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Statistics from './components/statistics'
import HandleBusiness from './components/handle-business'
import Control from './components/control'
import CardDeal from './components/card-deal'
import Testimonial from './components/testimonial'
import Footer from './components/footer'

const HomePage = () => {
    return (
        // <div className="container size-20 flex items-center justify-center bg-[linear-gradient(to_left,#DEF9FA_0%,#BEF3F5_20%,#9DEDF0_40%,#7DE7EB_60%,#5CE1E6_80%,#33BBCF_100%)] rounded-full">
        
        // </div>
        <div>
            <Header />
            <Hero />
            <Statistics />
            <HandleBusiness />
            <Control />
            <CardDeal />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default HomePage
