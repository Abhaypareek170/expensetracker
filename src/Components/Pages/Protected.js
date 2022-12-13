import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <>
      <Component keys={props.keys}/>
    </>
  );
};

export default Protected;
