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
