import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className='main-box'>
      <div className='sub-main'>
     <h2 className='h2-text'>Login Here</h2>
     <div className='form-group'>
     <label className="form-label" >Email address</label>
     <input placeholder="Enter email" type="Email" id="formBasicEmail" className="form-control" value=""></input>
     </div>
     <div className='form-group'>
     <label className="form-label1" >Password</label>
     <input placeholder="Enter pass" type="Password" id="formBasicEmail" className="form-control" value=""></input>
     </div>
     <h6 className="Register" >Don't Have an account?
     <a href="./Register.jsx">Register Here</a>
     </h6>
     <button className="button" tabIndex="0" type="submit"><span className="MuiButton-label">Login</span><span className="MuiTouchRipple-root"></span></button>
      </div>
    </div>
  )
}

export default Login
