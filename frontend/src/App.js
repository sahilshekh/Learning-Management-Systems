import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import {Home} from './components/Home/Home'
// import { Register } from './components/Signup/Signup'
import { Routes ,Route} from 'react-router-dom'
import  Login  from './components/Login/Login'
import { Lectures } from './components/Lectures/Letures'
import Register from './components/Signup/Register';



function App() {
 

  return (
    <div >
      
     <Routes>
    <Route path='/signup' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/lectures" element={<Lectures/>}/>
     </Routes>
    
    </div>
  )
}

export default App
