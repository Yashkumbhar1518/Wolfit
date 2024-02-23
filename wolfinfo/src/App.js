
import './App.css';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { useContext } from 'react';
import { Mycontext } from './components/context/Mycontext';
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';

function App() {
  const{welcome} =useContext(Mycontext);
  return (
    <BrowserRouter>
         
     {welcome?<Navbar/> : null}
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/login" element={<MainPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
     </BrowserRouter>
 
     
    
  );
}

export default App;
