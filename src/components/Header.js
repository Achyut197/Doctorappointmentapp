import React from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header=()=>{
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-14 md:px-10 lg:px-20'>
        {/* -------- left side --------- */}

        <div className='md:w-1/2 flex flex-col items-start justify-items-center gap-4 py-8 m-auto md:py-[10vw] md:mb-[-30px]'>
         <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Connecting You to the Right Care,<br/> One Appointment at a Time.</p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-22 h-24  mr-2 rounded-full ' src={assets.group_person_img} alt='' />
            <p className='text-sm'>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/> schedule your Appointment hassle-free.</p>
          </div>
          <a className='flex items-center justify-center bg-white px-6 py-2 rounded-full md:m-0 ml-10 text-gray-600 text-sm mt-2 hover:scale-105 transition-all duration-300' href="#speciality">
        Book Appointment <FontAwesomeIcon className='w-3 ml-1.5' icon={faArrowRight} />
          </a>
        </div>

        {/* -----right side ----- */}

        <div className='md:w-1/2 relative'>
        <img  className='w-full md:absolute bottom-0 h-auto rounded-full mb-8' src={assets.doctor_group_img} alt='doctor group' />
        </div>
        </div>


    )
}

export default Header;