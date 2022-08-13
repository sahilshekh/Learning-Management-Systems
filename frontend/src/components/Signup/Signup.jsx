import "./Signup.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [signupdata, setSignupdata] = useState({});
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handlechange = (e) => {
    const { id, value } = e.target;
    setSignupdata({ ...signupdata, [id]: value });
  };

  const senddata = (e) => {
    e.preventDefault();

    fetch("https://nikedataapi.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(signupdata),
      headers: { "content-type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    if (data.token) navigate("/");
  }, [data]);

  // const loginpage=()=>{
  //   <Link to="/login"></Link>
  // }
  return (
    <div>
      <div className="main-box2">
      
        <div className="sub-main2">
        <h2 className='h2-text2'>Register Here</h2>
          <form id="signup_form" onSubmit={senddata}>
          <div className='form-group2'>
            <label id="lab" className="form-label2">Enter First Name</label>
            
            <input
              placeholder="Enter you first name here"
        
              type="text"
              id="name"
              className="form-control2"
              onChange={handlechange}
              required
            />
           </div>
           <div className='form-group2'>
            <label id="lab" className="form-label1" >Enter Last Name</label>
  
            <input
              placeholder="Lastname"
             
              type="text"
              id="sir_name"
              className="form-control2"
              onChange={handlechange}
              required
            />
         </div>

         <div className='form-group2'>
            <label id="lab" className="form-label1">Email address</label>
          
            <input
              placeholder="Email address"
             className="form-control2"
              type="text"
              id="email"
              onChange={handlechange}
              required
            />
         </div>
         <div className='form-group2'>
            <label id="lab" className="form-label1">Enter Password</label>
          
            <input
              placeholder="Password"
              className="form-control2"
              type="text"
              id="password"
              onChange={handlechange}
              required
            />
          </div>
          <div className='form-group2'>
            <label id="lab" className="form-label1">Enter Your Number</label>
           
            <input
              placeholder="Number"
              className="form-control2"
              type="text"
              id="mobile_number"
              onChange={handlechange}
              required
            />
          
            <h6 className="Register2">Already have an account?<Link to="/">Login Here</Link></h6>
            
            <button className="button2" tabindex="0" type="submit"><span className="MuiButton-label">SUBMIT</span><span className="MuiTouchRipple-root"></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
