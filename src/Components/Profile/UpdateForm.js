import React, { useEffect, useRef, useState } from "react";

const UpdateForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDPexDNdjOMbM7eoDYU1-DP6ytLvuzTifQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("Done");
          return res.json();
        } else {
          return res.json().catch((err) => {
            let errorMessage = "Failed!";
            alert(errorMessage);
            throw new Error(err);
          });
        }
      })
      .then((res) => {
        setFormData(res);
      });
  }, [token]);
  const nameInputRef = useRef();
  const profileInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredProfileUrl = profileInputRef.current.value;
    setIsSending(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDPexDNdjOMbM7eoDYU1-DP6ytLvuzTifQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: enteredName,
          photoUrl: enteredProfileUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsSending(false);
      if (res.ok) {
        console.log("Data Updated.");
        return res.json();
      } else {
        return res.json().catch((err) => {
          let errorMessage = "Failed!";
          alert(errorMessage);
          throw new Error(err);
        });
      }
    });
  };
  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`,
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Update Profile
                  </h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        className="form-control form-control-lg"
                        defaultValue={formData.displayName}
                        required
                        ref={nameInputRef}
                      />
                      <label className="form-label" htmlFor="name">
                        Full Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="profile"
                        className="form-control form-control-lg"
                        defaultValue={formData.photoUrl}
                        required
                        ref={profileInputRef}
                      />
                      <label className="form-label" htmlFor="profile">
                        Profile Photo Url
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={submitHandler}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                  {isSending ? (
                    <p className="centered">Sending Request...</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateForm;
