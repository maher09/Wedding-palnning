import React, { useState, useEffect } from "react";
import "../../../public/assets/Bookreservation/bootstrap/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useAppContext } from '@/contextApi';
import Row from 'react-bootstrap/Row';
import Cookies from 'js-cookie';




    
function ProfileModal(props: any) {
    const { darkMode, setDarkMode } = useAppContext();
    const token = Cookies.get('token'); 
    const { TheGroom = '', TheBride = '' , Email=''} = token? JSON.parse(atob(token.split('.')[1])) : {};
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(localStorage.getItem('selectedImage') || null);
 

    const [errors, setErrors] = useState({
        TheGroom: '',
        TheBride: '',
        phone: '',
        Email: '',
        password: ''
    });
    const imgs="https://www.w3schools.com/w3images/avatar2.png"

    useEffect(() => {
        localStorage.setItem('selectedImage', selectedImage as string);
    }, [selectedImage]);

    useEffect(() => {
        localStorage.setItem('TheGroom', TheGroom);
    }, [TheGroom]);

    useEffect(() => {
        localStorage.setItem('TheBride', TheBride);
    }, [TheBride]);

    useEffect(() => {
        localStorage.setItem('Email', Email);
    }, [Email]);

    // const toggleTheme = () => {
    //     setDarkMode(!darkMode);
    //     const htmlElement = document.querySelector('html');
    //     if (htmlElement) {
    //         htmlElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    //     }
    // };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSave = (image: string | ArrayBuffer | null) => {
        // Add your logic here
    };

    const handleImageRemove = () => {
        setSelectedImage(imgs);
    };

    const handleSave = () => {
        if(imgs==selectedImage){
        alert("Please upload a profile photo")
    }
    else{
        onSave(selectedImage);
        props.onHide();
    }
}

   
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Account settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    
                         <Row className="avatar rounded-circle  d-flex justify-content-center">
                            <div className="avatar rounded-circle" style={{ width: "250px", height: "250px", borderRadius: "50%",padding:"0px",marginRight:"5px"}}>
                            <img 
                                src={selectedImage?.toString() || "https://www.w3schools.com/w3images/avatar2.png"} 
                                alt="Avatar" 
                                className="avatar rounded-circle" 
                                width={250} 
                                height={250} 
                                style={{padding:"0px", marginTop: "10px"}} 
                            />
                                </div>
                        </Row>
                        <Row  className="d-flex justify-content-center">
                            <b style={{fontSize:"30px" ,textAlign:"center" ,fontFamily:'"Abhaya Libre", serif',marginTop:"5px"}}>Profile Photo</b>
                            <input
                                type="file"
                                accept="image/png"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                                id="imageUpload"
                            />
                            <label htmlFor="imageUpload" className="btn btn-primary"
                                id="logout-btn"
                            
                                style={{
                                    width: "75.8906px",
                                    borderRadius: "7px",
                                    fontFamily: '"Abhaya Libre", serif',
                                    marginLeft: "10px"
                    }}>
                                Upload
                            </label>

                            <button className="btn btn-primary"
                                onClick={handleImageRemove}
                                style={{
                                width: "75.8906px",
                                borderRadius: "7px",
                                fontFamily: '"Abhaya Libre", serif',
                                marginLeft: "10px"
                                }}>
                                Remove
                            </button>
                     
                    </Row>
                    <br />


                    <Row>
                        <Col xs={6} md={6}>
                            <label htmlFor="TheGroom">TheGroom Name</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                                value={TheGroom}
                                readOnly
                              
                            />
                            {errors.TheGroom && <span className="text-danger">{errors.TheGroom}</span>}
                        </Col>
                        <Col xs={6} md={6}>
                            <label htmlFor="TheBride">TheBride Name</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                                value={TheBride}
                               readOnly
                            />
                            {errors.TheBride && <span className="text-danger">{errors.TheBride}</span>}
                        </Col>
                    </Row>
                    <Row>
                
                        <Col xs={6} md={6}>
                            <label htmlFor="Email">Email Address</label>
                            <input
                                type="Email"
                                className="bg-light form-control"
                                placeholder=""
                                value={Email}
                                readOnly
                            />
                            {errors.Email && <span className="text-danger">{errors.Email}</span>}
                        </Col>
                    </Row>
                   
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary"
                    id="logout-btn"
                    type="button"
                    style={{
                        width: "150px",
                        borderRadius: "7px",
                        fontFamily: '"Abhaya Libre", serif',
                    }} onClick={handleSave}>
                    Save Change
                </Button>
                <Button className="btn btn-primary"
                    id="logout-btn"
                    type="button"
                    style={{
                        width: "75.8906px",
                        borderRadius: "7px",
                        fontFamily: '"Abhaya Libre", serif',
                    }} onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProfileModal;
