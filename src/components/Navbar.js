import assets from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faArrowDown, faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);
  const [Token, setToken] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  const handleLogout = () => {
    setToken(false);
    setmenuOpen(false); // Close the menu on logout
  };

  return (
    <div className="flex items-center justify-between text-sm py-2 mb-5 border-b border-blue-400">
      {/* Logo and AROGYAM APP Text */}
      <div className="flex items-center space-x-3 ml-4 md:ml-8">
        <img onClick={() => navigate('/')}
          src={assets.logo_img}
          alt="AROGYAM_LOGO"
          className="logo-img cursor-pointer"
          style={{ width: '50px', height: 'auto' }}
        />
        <h1 className="text-lg font-bold">
          <span className="text-blue-500">AROGYAM</span>
          <span style={{ color: 'rgba(64, 224, 208, 1)' }}> APP</span>
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-grow justify-center space-x-6 lg:space-x-10 font-medium">
        <NavLink to='/' className="hover:text-blue-500">HOME</NavLink>
        <NavLink to='/Doctor' className="hover:text-blue-500">ALL DOCTORS</NavLink>
        <NavLink to='/About' className="hover:text-blue-500">ABOUT</NavLink>
        <NavLink to='/Contact' className="hover:text-blue-500">CONTACT</NavLink>
      </div>

      {/* Right Section: Profile Dropdown or Login Button and Dark Mode Toggle */}
      <div className="flex items-center space-x-4 md:space-x-8">
        {Token ? (
          <div className="relative hidden md:block">
            <div 
              onClick={() => setmenuOpen(!menuOpen)} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <img className="w-10 h-10 rounded-full" src={assets.profile_img} alt="profile" />
              <FontAwesomeIcon icon={faArrowDown} className="w-4" />
            </div>
            {/* Profile Dropdown Menu */}
            {menuOpen && (
              <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 px-4 z-20">
                <p 
                  onClick={() => navigate('/Profile')} 
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium"
                >
                  My Profile
                </p>
                <p 
                  onClick={() => navigate('/Myappointment')} 
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium"
                >
                  My Appointment
                </p>
                <p 
                  onClick={handleLogout} 
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/Login')}
            className="hidden md:flex items-center space-x-1 bg-primary border text-white px-6 py-2 rounded-full font-bold"
          >
            <span>CREATE ACCOUNT</span>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
        )}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-200 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setmenuOpen(!menuOpen)}>
          <FontAwesomeIcon className="w-6" icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden z-10">
          <div className="flex flex-col items-center space-y-4 py-4 text-center">
            <NavLink to='/' onClick={() => setmenuOpen(false)} className="hover:text-blue-500">HOME</NavLink>
            <NavLink to='/Doctor' onClick={() => setmenuOpen(false)} className="hover:text-blue-500">ALL DOCTORS</NavLink>
            <NavLink to='/About' onClick={() => setmenuOpen(false)} className="hover:text-blue-500">ABOUT</NavLink>
            <NavLink to='/Contact' onClick={() => setmenuOpen(false)} className="hover:text-blue-500">CONTACT</NavLink>
            {Token ? (
              <>
                <p onClick={() => { navigate('/Profile'); setmenuOpen(false); }} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium">My Profile</p>
                <p onClick={() => { navigate('/Myappointment'); setmenuOpen(false); }} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium">My Appointment</p>
                <p onClick={handleLogout} className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer font-medium">Logout</p>
              </>
            ) : (
              <button onClick={() => navigate('/Login')} className="bg-primary text-white px-4 py-2 rounded-full font-bold">CREATE ACCOUNT</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
