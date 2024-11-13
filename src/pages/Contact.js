import React from "react";
import assets from "../assets/assets";

const Contact = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-10">
            {/* Contact Us Heading */}
            <div className="text-xl my-4 text-center pt-10 text-black-800">
                <p>CONTACT <span className="text-black-800 font-semibold">US</span></p>
            </div>
            
            {/* Centered Content */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10 text-sm">
                {/* Image on the left */}
                <img className="w-full md:w-auto md:max-w-[450px]" src={assets.contact_img} alt="Contact" />
                
                {/* Contact Details on the right */}
                <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <p className="font-semibold">OUR OFFICE</p>
                    <p>50247 Wilton Station <br /> Suite 350, Washington, USA </p>
                    <p>
                        Tel: (+91)-092-243-8769 <br />
                        Email: arogyam122@gmail.com
                    </p>
                    <p className="font-semibold">CAREERS AT AROGYAM</p>
                    <p>Learn more about our teams and job openings.</p>
                    <button className="bg-blue-600 py-2 px-4 rounded-full text-white">
                        Explore Jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
