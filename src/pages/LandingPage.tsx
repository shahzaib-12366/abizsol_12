import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import LogoRow from '../components/logoRow/LogoRow'
import WhatWeDo from '../components/whatWeDo/WhatWeDo'
import OurWorkProgress from '../components/ourWorkProgress/OurWorkProgress'
import ContactUs from '../components/contactUs/ContactUs'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <LogoRow />
            <WhatWeDo />
            <OurWorkProgress />
            <ContactUs />
            <Footer />



        </>
    )
}

export default LandingPage