
import React from 'react'
import "./Register.css"
const Register = () => {
  return (
    <div className='main-box2'>
    <div className='sub-main2'>
   <h2 className='h2-text2'>Register Here</h2>
   <div className='form-group2'>
   <label className="form-label2" >Username</label>
   <input placeholder="Enter Your Username" type="Email" id="formBasicEmail" className="form-control2" value=""></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Email address</label>
   <input placeholder="Enter Email" type="Password" id="formBasicEmail" className="form-control2" value=""></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Password</label>
   <input placeholder="Password" type="Password" id="formBasicEmail" className="form-control2" value=""></input>
   </div>
   <div className='form-group'>
   <label className="form-label1" >Confirm Password</label>
   <input placeholder="Confirm Password" type="Password" id="formBasicEmail" className="form-control2" value=""></input>
   </div>
   <h6 className="Register2" >Already Have an account?
   <a href="./Login.jsx">Login Here</a>
   </h6>
   <button className="button2" tabindex="0" type="submit"><span className="MuiButton-label">SUBMIT</span><span className="MuiTouchRipple-root"></span></button>
    </div>
  </div>
  )
}

export default Register
