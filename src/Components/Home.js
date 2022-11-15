import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const logoutHandler = (e)=>{
    e.preventDefault();
    localStorage.removeItem('email');
    localStorage.removeItem('token')
    navigate('/login');
  }
  const emailVerificationHandler = (e) =>{
      e.preventDefault();
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDPexDNdjOMbM7eoDYU1-DP6ytLvuzTifQ",{
        method: "POST",
        body: JSON.stringify({
          requestType:"VERIFY_EMAIL",
          idToken:token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
        if(res.ok){
          return res;
        }
        else {
          return res.json().catch((err) => {
            let errorMessage = "Failed!";
            alert(errorMessage);
            throw new Error(err);
          });
        }
      }).then((res)=>{
        console.log(res)
      })
  }
  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <span>
          <i>
            <b>Welcome to Expense Tracker</b>
          </i>
        </span>
        <span><button onClick={logoutHandler}>Logout</button></span>
        <span>
          Your profile is incomplete.<Link to="/updateProfile">Complete now</Link>
        </span>
      </div>
      <hr />
      <div>
        <h1><button onClick={emailVerificationHandler}>Verify your mail.</button></h1>
      </div>
      
    </>
  );
};

export default Home;
