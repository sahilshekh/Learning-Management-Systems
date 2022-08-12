import { Link } from "react-router-dom";
import { useState } from "react";
import { loginfailure, loginsuccess } from "../Redux/Login_Redux/Login_Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [logindata, setLoginupdata] = useState({});
  const dispatch = useDispatch();

  const handlechange = (e) => {
    const { id, value } = e.target;
    setLoginupdata({ ...logindata, [id]: value });
  };

  const senddata = (e) => {
    e.preventDefault();
    dispatch(loginfailure());
    fetch("http://localhost:8080/login",{
      method: "POST",
      body: JSON.stringify(logindata),
      headers: { "Content-Type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        dispatch(loginsuccess(data));
        if (data.token) navigate("/home") 
        
      
        else {
          alert("enter correct details");
        }
        console.log(data)
      })
      .catch((e) => {
        dispatch(loginfailure());
      });
  };
  return (
    <div className='main-box'>
      <div className='sub-main'>
     <h2 className='h2-text'>Login Here</h2>

     <form onSubmit={senddata}>
     <div className='form-group'>
     <label className="form-label" >Email address</label>
     <input placeholder="Enter email" type="Email" id="email" className="form-control"  onChange={handlechange}></input>
     </div>
     <div className='form-group'>
     <label className="form-label1" >Password</label>
     <input placeholder="Enter pass" type="Password" id="pass" className="form-control" onChange={handlechange}></input>
     <h6 className="Register" >Don't Have an account?
     {/* <a href="./Register.jsx">Register Here</a> */}
     <Link to="/signup">Register Here</Link>
     </h6>
     <button className="button" tabIndex="0" type="submit"><span className="MuiButton-label">Login</span><span className="MuiTouchRipple-root"></span></button>
     </div>
    </form>
      </div>
    </div>
  )
}

export default Login
