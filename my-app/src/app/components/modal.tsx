import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modal1() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
      <Modal show={show} onHide={handleClose}  size="lg" centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton >
         
        </Modal.Header>
   
        <div className="row justify-content-center"  >
            
                  <div className="col-md-9 col-lg-12 col-xl-10" >
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
                              
                              
                              
                              <form className="user">
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
                                    className="form-control form-control form-control form-control-user"
                                    type="email"
                                    id="exampleInputEmail"
                                    aria-describedby="emailHelp"
                                    name="email"
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
                                    className="form-control form-control form-control form-control-user"
                                    type="password"
                                    id="exampleInputPassword"
                                    name="password"
                                    placeholder="Password"
                                    required
                                  />





                                </div>
                                <div className="mb-3">
                                  <div className="custom-control custom-checkbox small">
                                    <div className="form-check">
                                      
                                      
                                  
                                  {/* input for checkbox  */}
                                  {/* don't add name attribute due not submitting to data base   */}
                                      <input
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
                                  }}
                                  

                                >
                                  Create an acount
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
              <Modal show={show2} onHide={handleClose2}  size="lg" centered aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton >
         
        </Modal.Header>
   
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
                            <h4 className="text-dark mb-4">
                              Create an Account!
                            </h4>
                          </div>
                          <form className="user">
                            <div className="row mb-3">
                              <div className="col-sm-6 mb-3 mb-sm-0">
                                
                                
                                {/* first name sing up */}
                                <label htmlFor="FirstName" style={{ display: 'none' }}/>
                                <input
                                  className="form-control form-control form-control form-control-user"
                                  type="text"
                                  id="FirstName"
                                  name="first_name"
                                  placeholder="First Name"
                                  required
                                />



                              </div>
                              <div className="col-sm-6">

                            {/* last name sing up*/}
                            <label htmlFor="LastName" style={{ display: 'none' }}/>
                                <input
                                  className="form-control form-control form-control form-control-user"
                                  type="text"
                                  id="LastName"
                                  name="last_name"
                                  placeholder="Last Name"
                                  required
                                />



                              </div>
                            </div>
                            <div className="mb-3">
                             
                             
                              
                              
                               {/* email sing up*/}
                               <label htmlFor="InputEmail" style={{ display: 'none' }}/>
                              <input
                                className="form-control form-control form-control form-control-user"
                                type="email"
                                id="InputEmail"
                                aria-describedby="emailHelp"
                                name="email"
                                placeholder="Email Address"
                                required
                              />



                            </div>
                            <div className="mb-3">
                              
                              {/* password sing up */}
                              <label htmlFor="PasswordInput" style={{ display: 'none' }}/>
                              <input
                                className="form-control form-control form-control form-control-user"
                                type="password"
                                id="PasswordInput"
                                name="password"
                                placeholder="Password"
                                required
                                style={{ marginTop: "15px" }}
                              />

                              
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




    </>
  );
}

export default Modal1;