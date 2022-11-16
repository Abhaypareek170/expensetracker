import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

const Protected = (props) => {
    const {Component} = props;
    const authCntx = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!authCntx.isLoggedIn){
            navigate('/login');
        }
    })
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected;