"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function Modal1() {
  ///////////////////////////////
 // create a state variable to control whether the modal is shown WHEN USER SIGN IN
 const [showModal, setShowModal] = useState(false);
 const [modalMessage, setModalMessage] = useState("");
 
  ///////////////////////////////



  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  //close all other modals
///////////////////
const handleCloseAllOtherModals = () => {
  setShow(false);
  setShow2(false);
  
  // Add more lines here if you have more modals
};
///////////////////
  //using axios to fetch api (sign up)
///////////////////////////////////
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
//SIGN UP CLEANER FIELDS
  const handleCloseModal = () => {
    setShowModal(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setShowPassword(false);
  };
  const handleShowModal = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setShowPassword(false);
  };
  //login UP CLEANER FIELDS

  const handleCloseModal2 = () => {
    setShowModal(false);
    setLoginEmail("");
    setLoginPassword("");
    setShowPassword(false);
    setLoginError('');
  };
  const handleShowModal2 = () => {
    setLoginEmail("");
    setLoginPassword("");
    setShowPassword(false);
    setLoginError('');
  };


  //log in useState and handler
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

  //////////////////////////////
 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
      // Email validation regex pattern
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
       // Password validation regex patterns
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
    if (!FirstName || !LastName || !Email || !Password) {
      setModalMessage("Please fill all the fields");
      setShowModal(true);
      }
      else if (!emailPattern.test(Email)) {
        setEmailError("Please enter a valid email address");
      }
      else {
      setEmailError(""); // Reset email error message
    }
    if (Password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError(""); // Reset password error message
    }
  
    if (emailPattern.test(Email) && Password.length >= 8) {
      // Check if both email and password are valid
      if (!lowerCaseLetters.test(Password)) {
        setPasswordError("Password must contain at least one lowercase letter");
      } else if (!upperCaseLetters.test(Password)) {
        setPasswordError("Password must contain at least one uppercase letter");
      } else if (!numbers.test(Password)) {
        setPasswordError("Password must contain at least one number");
      } else if (!specialCharacters.test(Password)) {
        setPasswordError("Password must contain at least one special character");
      } else {
        try {
          const response = await axios.post("http://localhost:3000/signup", {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Password: Password,
          });
  
          if (response.data.error) {
            setEmailError("Email is already in use");
          } else {
            console.log(response.data);
            // Handle successful submission here
            setModalMessage("Account Created Successfully");
            setShowModal(true);
  
            // Clear form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setEmailError("");
            setPasswordError("");
            setShowPassword(false);
          }
        } catch (error: any) {
          if (error.response && error.response.status === 400) {
            console.log("Email is already in use");
            setEmailError("Email is already in use");
          } else {
            console.error(error);
            // Handle error here
          }
        }
      }
    }
  };
///////////////////////////////////


    //using axios to fetch api (login)
  
    const loginHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Make a POST request to your login endpoint
      try {
        const response = await axios.post("http://localhost:3000/login", {
            Email: loginEmail,
            Password: loginPassword
        });

        console.log(response.data); // Output success message 


        
        // Clear any previous login error
        setLoginError('');

        if (response.status === 200 && response.data === 'Login successful') {
          handleCloseAllOtherModals(); // Close all other modals
          setShow(false);
          setLoginEmail("");
          setLoginPassword("");
          setShowPassword(false);
          
          // Close the login modal
          // You can add any other actions you want here after successful login
        }


    }catch (error:any) {
      console.error(error.response.data); // Output error message or perform any other action
  
      // If there is an error response, set the LoginError state
      if (error.response && error.response.data) {
          setLoginError(error.response.data);
      }
  }
};
    
    ////////////////////////////////////////////////////////


  return (
    <>
      {/* button to open login model */}
      <button
        onClick={handleShow}
        className="btn btn-primary"
        id="login-btn"
        type="button"
        style={{
          marginRight: "14px",
          width: "75.0156px",
          borderRadius: "7px",
          fontFamily: '"Abhaya Libre", serif',
        }}
      >
        Login
      </button>

      {/* button to open sign up model */}
      <button
        onClick={handleShow2}
        className="btn btn-primary"
        id="signup-btn"
        type="button"
        style={{
          width: "75.8906px",
          borderRadius: "7px",
          fontFamily: '"Abhaya Libre", serif',
        }}
      >
        Signup
      </button>

      {/* login modal */}
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          handleCloseModal2();
         

        }}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card border-0 shadow-lg o-hidden my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{
                        background:
                          'url("assets/index/img/dogs/pexels-jonathan-borba-2917382.jpg") center / cover no-repeat',
                        height: "400px",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4
                          className="text-dark mb-4"
                          style={{ fontSize: "30px" }}
                        >
                          Welcome Back!
                        </h4>
                      </div>

                      {/* login form */}
                      <form className="user" onSubmit={loginHandleSubmit} action="/" method="post">
                        <div className="mb-3">
                          {/* input for email address  */}
                          <label
                            className="form-label form-label form-label"
                            htmlFor="exampleInputEmail"
                            id="email-label"
                          >
                            Email :
                          </label>
                          <input
                            name="loginEmail"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="form-control form-control form-control form-control-user"
                            type="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            required
                          />
                        </div>
                        <div className="mb-3">
                          {/* input for password  */}
                          <label
                            className="form-label form-label form-label"
                            htmlFor="exampleInputPassword"
                            id="password-lable"
                          >
                            Password :
                          </label>
                          <input
                            type={showPassword? "text" : "password"}
                            name="loginPassword"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="form-control form-control form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            required
                          />
                    {loginError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {loginError} 
          </div>
           )}
                      </div>
                   
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              {/* input for checkbox  */}
                              {/* don't add name attribute due not submitting to data base   */}
                              <input
                               onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state on checkbox change
                                type="checkbox"
                                className="form-check-input custom-control-input"
                                id="formCheck-1"
                              />
                              <label
                                className="form-label form-label form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Show password
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* login button to submit form */}
                        <button
                          className="btn btn-primary d-block btn-user w-100"
                          type="submit"
                        >
                          Login
                        </button>

                        <hr />
                      </form>

                      <div className="text-center" />
                      <div className="text-center">
                        <a
                          className="small"
                          onClick={() => {
                            handleShow2();
                            handleClose();
                            handleShowModal2();
                          }}
                        >
                          Create an account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* sighnup model */}
      <Modal
        show={show2}
        onHide={() => {
          handleClose2();
          handleCloseModal();
          
        }}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="card border-0 shadow-lg o-hidden my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-flex">
                <div
                  className="flex-grow-1 bg-register-image"
                  style={{
                    background:
                      'url("assets/index/img/dogs/pexels-azra-tuba-demir-11390728.jpg") bottom / cover no-repeat',
                    height: "400px",
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Create an Account!</h4>
                  </div>

                  {/* sign up modal */}
                  <form
                    action="/"
                    method="post"
                    className="user"
                    onSubmit={handleSubmit}
                  >
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        {/* first name sing up */}
                        <label
                          htmlFor="FirstName"
                          style={{ display: "none" }}
                        />
                        <input
                          name="FirstName"
                          value={FirstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control form-control form-control form-control-user"
                          type="text"
                          id="FirstName"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        {/* last name sing up*/}
                        <label htmlFor="LastName" style={{ display: "none" }} />
                        <input
                          name="LastName"
                          value={LastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control form-control form-control form-control-user"
                          type="text"
                          id="LastName"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      {/* email sing up*/}
                      <label htmlFor="InputEmail" style={{ display: "none" }} />
                      <input
                        name="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control form-control form-control-user"
                        type="email"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        required
                        
                      />
                       {emailError && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {emailError} 
          </div>
           )}
                    </div>
                    <div className="mb-3">
                      {/* password sing up */}
                      <label
                        htmlFor="PasswordInput"
                        style={{ display: "none" }}
                      />
                      <input
                       type={showPassword? "text" : "password"}
                       name="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control form-control form-control-user"
                        id="PasswordInput"
                        placeholder="Password"
                        required
                        style={{ marginTop: "15px" }}
                      />
                                        {passwordError && (
    <div className="text-danger" style={{ fontSize: "12px" }}>
      {passwordError}
    </div>
     )}
                    </div>
                    <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              {/* input for checkbox  */}
                              {/* don't add name attribute due not submitting to data base   */}
                              <input
                                type="checkbox"
                                className="form-check-input custom-control-input"
                                onChange={() => setShowPassword(!showPassword)} // Toggle showPassword state on checkbox change

                                id="formCheck-1"
                              />
                              <label
                                className="form-label form-label form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Show password
                              </label>
                            </div>
                          </div>
                        </div>

                    <button
                      className="btn btn-primary d-block btn-user w-100"
                      type="submit"
                    >
                      Register Account
                    </button>
                    <hr />
                  </form>
                  <div className="text-center" />
                  <div className="text-center">
                    <a
                      className="small"
                      onClick={() => {
                        handleShow();
                        handleClose2();
                        handleShowModal();
                      }}
                    >
                      Already have account? Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
     
      <Modal show={showModal} onHide={() => { handleCloseAllOtherModals(); setShowModal(false); handleShow(); }} centered size="sm">
  <Modal.Header closeButton style={{ borderBottom: 'none' }}/>
  <div style={{ display: 'flex', justifyContent:"center"}}>
    <Modal.Title style={{ height: '100px'}}>
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00a976' ,height: '112px' ,width:'115px'}}/>
    </Modal.Title>
  </div>
  <Modal.Body className="text-center" style={{ height: '142px' }}>
    <p style={{ fontSize: '32px',fontWeight:"bold" }}>{modalMessage}</p>
  </Modal.Body>
</Modal>
    
    
    </>
  );
}

export default Modal1;
