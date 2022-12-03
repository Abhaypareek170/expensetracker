import React from "react";
import { useSelector } from "react-redux";
import { darkTheme } from "../UI/Theme";
import { lightTheme } from "../UI/Theme";
import Nav from "../UI/Nav";


const Home = () => {
  const token = localStorage.getItem('token');
  const darkMode = useSelector(state=>state.theme.darkMode)
  let classStyle ;
   if(darkMode===true) classStyle=lightTheme;
   else classStyle = darkTheme;
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
    <div style={classStyle}>
  <Nav />
      <div className="mt-3" >
        <h1><button onClick={emailVerificationHandler}>Verify your mail.</button></h1>
      </div>
    </div>
  );
}; 

export default Home;
