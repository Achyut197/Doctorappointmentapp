import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// Utility function to fetch doctor details by ID

const Appointment = () => {
    const { docId } = useParams(); 
   const { doctordetails,currencySymbol} = useContext(AppContext);  
    const [docInfo, setDocInfo] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = () => {
            const docInfo = doctordetails.find(doc => doc.id === docId);
            setDocInfo(docInfo);
            console.log(docInfo);
        };
        fetchDoctorDetails();
    }, [doctordetails, docId]);
    

   const dayofweek=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  
    
   const [DoctorSlot, setDoctorSlot] = useState([]);
   const [SlotIndex, setSlotIndex] = useState(0);
   const [SlotTime, setSlotTime] = useState('');

   const GetAvailableslot = async () => {
    setDoctorSlot([]);  
    let Today = new Date();
    for (let i = 0; i < 7; i++) {
        let currentdate = new Date(Today);
        currentdate.setDate(Today.getDate() + i);
        let endtime = new Date();
        endtime.setDate(Today.getDate() + i);
        endtime.setHours(21, 0, 0, 0);

        if (Today.getDate() === currentdate.getDate()) {
            currentdate.setHours(currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10);
            currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
        } else {
            currentdate.setHours(10);
            currentdate.setMinutes(0);
        }

        let timeslot = [];
        while (currentdate < endtime) {
            let formatTime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeslot.push({
                datetime: new Date(currentdate),
                time: formatTime
            });
            currentdate.setMinutes(currentdate.getMinutes() + 30);
        }
        setDoctorSlot(prev => ([...prev, timeslot]));
    }
};



useEffect(() => {
    if (docInfo) {
        GetAvailableslot();
    }
}, [docInfo]);



    // Function to fetch available slots
    
   
   
    return docInfo && (
        <div className="container mx-auto p-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Doctor Image and Basic Info */}
                <div className="lg:w-1/3 flex justify-center lg:justify-start">
                    <img
                        className="bg-primary w-full max-w-xs rounded-lg shadow-lg"
                        src={docInfo.image}
                        alt="Doctor"
                    />
                </div>

                {/* Doctor Details */}
                <div className="flex-1 border border-gray-300 rounded-lg p-6 shadow-lg">
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-black-800">
                        {docInfo.name}
                        <FontAwesomeIcon className="text-blue-500" icon={faCircleCheck} />
                    </h2>
                    <div className="flex items-center gap-2 text-sm mt-2 text-black-800 font-medium">
                        <span>{docInfo.degree} - {docInfo.Speciality}</span>
                        <span className="py-1 px-2 border text-xs rounded-full bg-gray-400">
                            {docInfo.experience}
                        </span>
                    </div>
                    <div className="mt-4">
                        <h3 className="flex items-center gap-1 text-lg font-semibold text-black-800">
                            About
                            <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500" />
                        </h3>
                        <p className="text-sm text-black-800 mt-2">{docInfo.about}</p>
                    </div>
                    <p className="text-black-800 font-medium text-sm mt-4">
                        Appointment Fee: <span className="font-semibold">{currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* Booking Slots */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Slots</h3>
                
                {/* Date Slots */}
                <div className="flex gap-3 overflow-x-auto py-4">
                    {DoctorSlot.length > 0 && DoctorSlot.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSlotIndex(index)}
                           className={`min-w-[3rem] text-center py-2 rounded-full cursor-pointer ${SlotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`}
                        >
                            <p className="font-semibold">{item[0] && dayofweek[item[0].datetime.getDay()]}</p>
                            <p className="text-sm">{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                {/* Time Slots */}
                <div className="flex gap-3 overflow-x-auto mt-4">
                    {DoctorSlot.length > 0 && DoctorSlot[SlotIndex].map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSlotTime(item.time)}
                            className={`text-sm font-light px-4 py-2 rounded-full ${item.time === SlotTime ? 'bg-primary text-white' : 'border border-gray-300'}`}
                        >
                            {item.time}
                        </button>
                    ))}
                </div>

                {/* Book Appointment Button */}
                <div className="text-center mt-6">
                    <button className="bg-primary text-white text-sm font-medium px-10 py-3 rounded-full">
                        Book an Appointment
                    </button>
                </div>
            </div>
            {/* listing related Doctors  */}
            
        </div>
    );
};


export default Appointment;