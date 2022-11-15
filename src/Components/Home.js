import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <span>
          <i>
            <b>Welcome to Expense Tracker</b>
          </i>
        </span>
        <span>
          Your profile is incomplete.<Link to="/updateProfile">Complete now</Link>
        </span>
      </div>
      <hr />
    </>
  );
};

export default Home;
