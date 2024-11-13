import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctor = () => {

  const navigate=useNavigate();
  const {doctordetails}=useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 py-8 text-black-800 md:mx-10'>
      <h1 className='text-3xl font-semibold'> Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Browse our curated list of highly recommended healthcare professionals<br />
        and book your appointment in just a few clicks.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctordetails.slice(0, 8).map((item, index) => (
          <div
          onClick={()=>{navigate(`/appointment/${item.id}`); window.scrollTo(0,0)}} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg transform hover:-translate-y-2"
            key={index}
            style={{ maxWidth: '200px' }} // Optional: Set max width for cards
          >
            {/* Image with fixed size */}
            <img
              className="w-full h-48 object-cover bg-blue-50"
              src={item.image}
              alt=""
            />
            {/* Doctor Details */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="font-semibold text-center mt-2">{item.name}</p>
              <p className="text-center text-sm text-gray-600">{item.Speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/Doctor');window.scrollTo(0,0)}} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        More
      </button>
    </div>
  );
};

export default TopDoctor;
