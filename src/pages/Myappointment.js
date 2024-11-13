import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Myappointment =()=>
{
    const {doctordetails}=useContext(AppContext);
    return(
        <div>
        <p className="pb-3 mt-12 font-medium text-black-800 border-b">My Appointments</p>

        <div>
            {doctordetails.slice(0,3).map((item,index)=>(
                <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                    <div>
                        <img className="w-32 bg-indigo-50" src={item.image} alt=""/>
                    </div>
                    <div className="flex-1 text-sm text-black-800">
                        <p className="text-black-800 font-semibold ">{item.name}</p>
                        <p className="font-semibold text-black-800">{item.Speciality}</p>
                        <p className="text-black-800 font-medium mt-1">Address:</p>
                        <p className="text-xs">{item.address}</p>
                        <p className="text-xs mt-1"><span className="text-sm text-black-800 font-medium">Date and Time:</span> 24,Nov,2024 | 3:54 PM</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col gap-2 justify-end">
                        <button className="text-sm text-white text-center font-semibold sm:min-w-48 py-2 border rounded bg-blue-600">Pay Online</button>
                        <button className="text-sm text-white text-center  font-semibold sm:min-w-48 py-2 border rounded bg-red-600">Cancel Appointment</button>
                    </div>
                </div>
            ))}
        </div>
        </div>

        
    )
}

export default Myappointment;