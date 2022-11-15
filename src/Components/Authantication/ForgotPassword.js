import React, { useEffect, useRef } from 'react'

const ForgotPassword = () => {
    const mailInputRef = useRef();
    const sendLinkHandler = (event)=>{
        event.preventDefault();
        const usermail = mailInputRef.current.value;
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDPexDNdjOMbM7eoDYU1-DP6ytLvuzTifQ",{
                method: "POST",
                body: JSON.stringify({
                  requestType:"PASSWORD_RESET",
                  email:usermail,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res)=>{
                if(res.ok){
                  return res.json();
                }
                else {
                  return res.json().catch((err) => {
                    let errorMessage = "Failed!";
                    alert(errorMessage);
                    throw new Error(err);
                  });
                }
        }).then((res)=>{
            console.log(res.email);
        })
    }
    
    return (
        <section className="vh-100 bg-image"
      style={{backgroundImage:`url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`}}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: "15px"}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Forgot Password</h2>
    
                  <form >
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" ref={mailInputRef} required  />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>
    
                  
                    <div className="d-flex justify-content-center">
                      <button type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={sendLinkHandler} >Send Link</button>
                    </div>
                  </form>
                  {/* {isSending?<p className="centered">Sending Request...</p>:''} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
}

export default ForgotPassword