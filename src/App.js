import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Doctor from './pages/Doctor';
import About from './pages/About';
import Myappointment from './pages/Myappointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='mx-4 sm:mx-[10]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Doctor' element={<Doctor/>}/>
      <Route path='/Doctor/:Speciality' element={<Doctor/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Appointment/:docId' element={<Appointment/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Myappointment' element={<Myappointment/>} />
     </Routes>
    <Footer />
    </div>
   

  );
}

export default App;
