import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./genericPage.scss";
import Header from '../../components/Header';
import Navbar from '../../components/navbar/Navbar';
import LogoRow from '../../components/logoRow/LogoRow';
import GenericPgePartherWithus from '../../components/genericPgePartherWithus/GenericPgePartherWithus';
import GenericpgeInFoucs from '../../components/genericpgeInFoucs/GenericpgeInFoucs';
import Platement from '../../components/platement/Platement';
import Footer from '../../components/footer/Footer';
import WorkProcessComponent from '../../components/workProcessComponent/WorkProcessComponent';

const GenericPage = () => {
    const [bannerData, setBannerData] = useState<{
        heading: string;
        description: string;
        buttonName: string;
    } | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://377a-119-73-112-80.ngrok-free.app/api/generic-banners');
            setBannerData(response.data.data[0].attributes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            <Header />
            <Navbar />
            <div className='main-GenericPage-page'>
                <div className='inner-GenericPage-bg'>
                    {bannerData && (
                        <>
                            <div className='main-name-GenericPage'>{bannerData.heading}</div>
                            <div className='subheading-GenericPage'>{bannerData.description}</div>
                            <button className="bannercONtent-btnn">{bannerData.buttonName}</button>
                        </>
                    )}
                </div>
            </div>
            <LogoRow />
            <GenericPgePartherWithus />
            <GenericpgeInFoucs />
            <Platement />
            <WorkProcessComponent />
            <Footer />
        </>
    );
};

export default GenericPage;
