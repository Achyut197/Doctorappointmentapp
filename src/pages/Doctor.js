import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { Speciality } = useParams();
  
  const { doctordetails } = useContext(AppContext);

  const [filterdoctor, setfilterdoctor] = useState([]);
  const [showfilter,setshowfilter]=useState();
  const navigate = useNavigate();

  // Memoize the applyfilter function
  const applyfilter = useCallback(() => {
    if (Speciality) {
      setfilterdoctor(doctordetails.filter((doc) => doc.Speciality === Speciality));
    } else {
      setfilterdoctor(doctordetails);
    }
  }, [Speciality, doctordetails]);

  useEffect(() => {
    applyfilter();
  }, [applyfilter]);

  return (
    <div className="p-4">
      <p className="text-gray-600 text-lg sm:text-xl mb-4">Browse through the doctors by specialty:</p>
      
      {/* Container for the specialist list and doctor cards */}
      <div className="flex flex-col sm:flex-row  items-start gap-5 mt-5">
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showfilter ? 'bg-primary text-white':''}`} onClick={()=>setshowfilter(prev=>!prev)}>Filters</button>
        {/* Specialist Doctor List */}
        <div className={`md:w-1/4 flex flex-col items-start gap-4 text-gray-600 ${showfilter ? 'flex':'hidden sm:flex'}`}>
        
          <p onClick={()=> Speciality ==='Dentist' ? navigate('/Doctor'):navigate('/Doctor/Dentist')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Dentist"?"bg-indigo-200 text-black":""}`}>Dentist</p>
          <p onClick={()=> Speciality ==='Cardiologist' ? navigate('/Doctor'):navigate('/Doctor/Cardiologist')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Cardiologist"?"bg-indigo-200 text-black":""}`}>Cardiologist</p>
          <p onClick={()=> Speciality ==='Neurologist' ? navigate('/Doctor'):navigate('/Doctor/Neurologist')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Neurologist"?"bg-indigo-200 text-black":""}`}>Neurologist</p>
          <p onClick={()=> Speciality ==='Ophthalmology' ? navigate('/Doctor'):navigate('/Doctor/Ophthalmology')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Ophthalmology" ?"bg-indigo-200 text-black":""}`}>Ophthalmology</p>
          <p onClick={()=> Speciality ==='Radiologist' ? navigate('/Doctor'):navigate('/Doctor/Radiologist')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Radiologist" ?"bg-indigo-200 text-black":""}`}>Radiologist</p>
          <p  onClick={()=> Speciality ==='Nephrologist' ? navigate('/Doctor'):navigate('/Doctor/Nephrologist')} className={`w-full sm:w-[220px] pl-3 py-1.5 pr-16 border border-blue-800 transition-all rounded ${Speciality==="Nephrologist" ?"bg-indigo-200 text-black":""}`}>Nephrologist</p>
        </div>
        
        {/* Doctor Cards */}
        <div className="md:w-3/4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterdoctor.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item.id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg transform hover:-translate-y-2"
              key={index}
              style={{ maxWidth: '200px' }}
            >
              {/* Image with fixed size */}
              <img
                className="w-full h-48 object-cover bg-blue-50"
                src={item.image}
                alt=""
              />
              {/* Doctor Details */}
              <div className="p-4">
                {/* Available status */}
                <div className="flex justify-center items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                {/* Doctor Name */}
                <p className="font-semibold text-center mt-2">{item.name}</p>
                {/* Doctor Specialty */}
                <p className="text-center text-sm text-gray-600">{item.Speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
