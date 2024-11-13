import React from 'react';
import assets from '../assets/assets';
const About =()=>{
    return (
        <div>

        <div className='text-center text-2xl pt-10 text-black-800'>
            <p>ABOUT <span className='text-black-800 font-semibold'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-black-800'>
                <p>Welcome to AROGYAM APP, your trusted partner in managing your healthcare needs convienently and efficiently.At ARROGYAM ,We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health.</p>
                <p>AROGYAM is commited to excellence health Technology.We continuously strive to enhance our platform,integrating the latest advancements to improve user experience and deliver superior service.</p>
                <b className='text-black-800'>OUR VISION</b>
                <p>Our Vision at ARROGYAM is to create a seamless healthcare experience for every user.We aim to bridge the gap between patients and healthcare Provider, making it easier for you to access the care you need,when you need it.</p>
            </div>
        </div>
        <div className='text-xl my-4'>
            <p>WHY  <span className='text-black-800 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-black-800 cursor-pointer'>
            {/* first column */}
            <b>EFFICIENCY</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-black-800 cursor-pointer'>
            {/* second column */}
            <b>CONVINEIENCE</b>
            <p>Access to a network of trusted healthcare proffesionals in your area.</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-black-800 cursor-pointer'>
            {/* third column */}
            <b>PERSONALIZATION</b>
            <p>Tailored recommendations reminders to help you stay on top of your health.</p>
            </div>
        </div>
        </div>
    )
}

export default About;