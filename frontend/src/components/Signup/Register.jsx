
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./Register.css"
const Register = () => {
  const [signupdata, setSignupdata] = useState({});
  const navigate = useNavigate();
  const [data,setData] =useState({})
  function handle(e){
    const { id, value } = e.target;
    setSignupdata({ ...signupdata, [id]: value });
  }

  
  function submit(e){
  e.preventDefault()
  fetch("http://localhost:8080/signup", {
    method: "POST",
    body: JSON.stringify(signupdata),
    headers: { "Content-Type": 'application/json' },
  })
  .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      });
}
useEffect(() => {
  if (data.token) navigate("/");
}, [data]);

  return (
    <>
        <div className='main-box2'>
    <div className='sub-main2'>
   <h2 className='h2-text2'>Register Here</h2>
   <form onSubmit={(e)=>submit(e)}>
   <div className='form-group2'>
   <label className="form-label2" >Username</label>
   <input placeholder="Enter Your Username" onChange={(e)=>handle(e)} type="text" id="name" className="form-control2" value={data.name}></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Email address</label>
   <input placeholder="Enter Email" onChange={(e)=>handle(e)} type="text" id="email" className="form-control2" value={data.email}></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Password</label>
   <input placeholder="Password" onChange={(e)=>handle(e)} type="Password" id="password" className="form-control2" value={data.password}></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Confirm Password</label>
   <input placeholder="Confirm Password" type="Password" id="formBasicEmail" className="form-control2" value=""></input>
   <h6 className="Register2" >Already Have an account?
   <Link to="/">Login Here</Link>
   </h6>
   <button className="button2" tabindex="0" type="submit"><span className="MuiButton-label">SUBMIT</span><span className="MuiTouchRipple-root"></span></button>
   </div>
   </form>
   
    </div>
  </div>
  </>

  )
}

export default Register
