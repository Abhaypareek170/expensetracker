import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const logoutHandler = (e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(authActions.logout());
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
        console.log(res);
      })
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">Welcome to Expense Tracker</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span></button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/expenses">Expense</Link>
      </li>
      <li className="nav-item">
     
      </li>
     
    </ul>
    </div>
    <div className="navbar-nav mr-5">Your profile is incomplete.<Link to="/updateProfile">Complete now</Link></div>
      
    <span className="mr-3">
      <button onClick={logoutHandler}>Logout</button>
    </span>
   
  
</nav>
      <div className="mt-3">
        <h1><button onClick={emailVerificationHandler}>Verify your mail.</button></h1>
      </div>
    </>
  );
};

export default Home;
