import React from "react";
import { Link } from "react-router-dom";
import UpdateForm from "./UpdateForm";

const UpdateProfile = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>
          <i>
            <b>Welcome to Expense Tracker</b>
          </i>
        </span>
        <span>
        <Link to='/'>Back to Home</Link>
        </span>
      </div>
      <hr />
      <UpdateForm />
    </>
  );
};

export default UpdateProfile;
