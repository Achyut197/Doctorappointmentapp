import React, { useState } from "react";
import assets from "../assets/assets";

const Profile = () => {
  const [userdata, setuserdata] = useState({
    name: "Terry Vincent",
    image: assets.profile_img,
    email: "terryvincent12@gmail.com",
    phone: "22489733230",
    address: {
      line1: "57th cross-road, Richmond",
      line2: "Circle, Church-road, London",
    },
    gender: "Female",
    dob: "2000-01-19",
  });

  const [Edit, setEdit] = useState(false);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col gap-4 sm:gap-6 text-sm sm:text-base">
      <div className="flex flex-col items-center">
        <img className="w-36 h-36 rounded-full shadow-md" src={userdata.image} alt="Profile" />
        {Edit ? (
          <input
            className="bg-gray-100 dark:bg-gray-700 text-2xl font-medium mt-4 w-full text-center border-b focus:outline-none focus:border-primary dark:text-white"
            type="text"
            value={userdata.name}
            onChange={(e) => setuserdata((prev) => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className="font-medium text-2xl text-blue-700 dark:text-blue-300 mt-4 text-center">{userdata.name}</p>
        )}
      </div>

      <hr className="border-gray-300 dark:border-gray-600" />

      <div>
        <p className="text-black dark:text-white font-semibold underline mt-3">Contact Information</p>
        <div className="grid grid-cols-[auto_1fr] gap-y-3 mt-4 text-black-800 dark:text-gray-300">
          <p className="font-medium">Email:</p>
          <p className="text-blue-600 dark:text-blue-400">{userdata.email}</p>

          <p className="font-medium">Phone:</p>
          {Edit ? (
            <input
              className="bg-gray-100 dark:bg-gray-700 px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 max-w-full dark:text-black-800"
              type="text"
              placeholder="phone no"
              value={userdata.phone}
              onChange={(e) => setuserdata((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-blue-600 dark:text-blue-400">{userdata.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {Edit ? (
            <div>
              <input
                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 border mb-2 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300 dark:text-white"
                type="text"
                value={userdata.address.line1}
                onChange={(e) =>
                  setuserdata((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-100 dark:bg-gray-700 px-2 py-1 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300 dark:text-white"
                type="text"
                value={userdata.address.line2}
                onChange={(e) =>
                  setuserdata((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-blue-600 dark:text-blue-400">
              {userdata.address.line1}
              <br />
              {userdata.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-black dark:text-white font-semibold underline mt-3">Basic Information</p>
        <div className="grid grid-cols-[auto_1fr] gap-y-3 mt-4 text-black-800 dark:text-gray-300">
          <p className="font-medium">Gender:</p>
          {Edit ? (
            <select
              className="bg-gray-100 dark:bg-gray-700 px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:text-white"
              value={userdata.gender}
              onChange={(e) => setuserdata((prev) => ({ ...prev, gender: e.target.value }))}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-blue-600 dark:text-blue-400">{userdata.gender}</p>
          )}

          <p className="font-medium">Date of Birth:</p>
          {Edit ? (
            <input
              className="bg-gray-100 dark:bg-gray-700 px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:text-white"
              type="date"
              value={userdata.dob}
              onChange={(e) => setuserdata((prev) => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p className="text-blue-600 dark:text-blue-400">{userdata.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        {Edit ? (
          <button
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            onClick={() => setEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
