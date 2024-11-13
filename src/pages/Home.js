import React from 'react';
import Header from '../components/Header';
import Servicelist from '../components/Servicelist';
import TopDoctor from '../components/TopDoctor';
import Banner from '../components/Banner';

const Home=()=>{
    return (
        <>
         <Header />
         <Servicelist />
         <TopDoctor />
         <Banner/>
        </>
    )
}

export default Home;