import { Link } from "react-router-dom";
import { useState } from "react";
import { loginfailure, loginsuccess } from "../Redux/Login_Redux/Login_Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { store } from '../Redux/Store'

export const Login = () => {
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
    fetch("https://nikedataapi.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: { "content-type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        dispatch(loginsuccess(data));
        if (data.token){ navigate("/home");
        alert("login successfully")}
        else {
          alert("enter correct details");
        }
      })
      .catch((e) => {
        dispatch(loginfailure);
      });
  };

  return (
    <div className="main-box">
     <img className="img-login" src="https://sso.masaischool.com/brand_dark.svg" alt="" />
      <div className="sub-main">
        <h2 className='h2-text'>Login Here</h2>
        <form onSubmit={senddata}>
        <div className='form-group'>
          <label className="form-label" id="lab">Email address</label>
          <input type="text" placeholder="Email address" id="email" onChange={handlechange} className="form-control" />
          </div>
          <div className='form-group'>
          <label id="lab" className="form-label1">Password</label>
          <input type="text" placeholder="Password" id="password" onChange={handlechange} className="form-control" />
         

          <h6 className="Register">Don't Have an account?
          <Link to="/signup">Register Here</Link>
          </h6>
          <button className="button" tabIndex="0" type="submit"><span className="MuiButton-label">Login</span><span className="MuiTouchRipple-root"></span></button>
          </div>
        </form>
      </div>
    </div>
  );
};
