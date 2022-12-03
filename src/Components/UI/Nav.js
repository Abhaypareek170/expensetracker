import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
const Nav = () => {
    const darkMode = useSelector(state=>state.theme.darkMode)
    let darkClass; 
     darkMode?darkClass=`navbar-dark bg-dark`:darkClass=`navbar-light bg-light`
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = (e)=>{
      e.preventDefault();
      localStorage.removeItem('token');
      dispatch(authActions.logout());
      navigate('/login');
    }
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${darkClass}`}>
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
    </>
  )
}

export default Nav