import React from "react";
import assets from "../assets/assets";

const Footer = () => {
    return (
        <div className="px-4 md:px-10">
            <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr] gap-10 md:gap-14 my-10 mt-20 text-sm">
                
                {/*----left----*/}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
                    <img className="logo-img mb-3 cursor-pointer"
                        style={{ width: '50px', height: 'auto' }} 
                        src={assets.logo_img} alt="" />
                    <h1 className="text-lg font-bold">
                        <span className="text-blue-500">AROGYAM</span>
                        <span style={{ color: 'rgba(64, 224, 208, 1)' }}> APP</span>
                    </h1>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                
                {/*--- middle ----*/}
                <div className="mb-10 md:mb-0">
                    <p className="text-xl font-medium mb-5 text-center md:text-left">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600 text-center md:text-left">
                        <li className="cursor-pointer hover:text-blue-500">HOME</li>
                        <li className="cursor-pointer hover:text-blue-500">ABOUT US</li>
                        <li className="cursor-pointer hover:text-blue-500">CONTACT US</li>
                        <li className="cursor-pointer hover:text-blue-500">PRIVACY POLICY</li>
                    </ul>
                </div>
                
                {/*--- Right ---*/}
                <div>
                    <p className="text-xl font-medium mb-5 text-center md:text-left">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600 text-center md:text-left">
                        <li>+91-092-243-8764</li>
                        <li>arogyam122@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* copy right */}
            <div>
                <hr className="border-gray-300" />
                <p className="py-5 text-sm text-center text-gray-600">Copyright © 2024 Arogyam APP - All Right Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
