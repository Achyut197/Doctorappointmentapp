import React from 'react';
import { Servicedata } from '../assets/assets';

const Servicelist = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-black-800' id='speciality'>
      <h1 className='text-3xl font-semibold'> Our Services</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Explore our trusted network of doctors<br /> 
        and book your appointment in just a few clicks.
      </p>  {/* Manually break the line with <br /> */}
      <div className='flex flex-row flex-wrap justify-center gap-8 overflow-scroll w-full'>
        {Servicedata.map((item, index) => (
          <div key={index} to={`/doctors/${item.ServiceList}`} className='flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
            <img src={item.image} alt={item.ServiceList} className='w-24 h-24 object-cover mt-2 sm:w-24 ' />
            <p className='text-center mt-3 '>{item.ServiceList}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicelist;
