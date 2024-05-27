import React, { useEffect, useState } from "react";
import "../../../public/assets/Bookreservation/bootstrap/css/bootstrap.min.css";
import Link from "next/link";

import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useAppContext } from '@/contextApi';
import Row from 'react-bootstrap/Row';
import exp from "constants";
import { BADHINTS } from "dns";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

function ProfileModal(props: any) {
    const { darkMode, setDarkMode } = useAppContext();
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    const toggleTheme = () => {
      setDarkMode(!darkMode);
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        htmlElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
      }
    };

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

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Account settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                          <img src={selectedImage?.toString() || "https://www.w3schools.com/w3images/avatar2.png"} alt="Avatar" className="avatar rounded" width={150} height={150} />
                        </Col>
                        <Col xs={6} md={6}>
                            <b>Profile Photo</b>
                            <p>Accepted file type .png. Less than 1MB</p>
                            <input
                                type="file"
                                accept="image/png"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                                id="imageUpload"
                            />
                            <label htmlFor="imageUpload" className="btn btn-primary" style={{
                                width: "75.8906px",
                                borderRadius: "7px",
                                fontFamily: '"Abhaya Libre", serif',
                            }}>
                                <b>Upload</b>
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={6} md={6}>
                            <label htmlFor="firstname">First Name</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                className="bg-light form-control"
                                placeholder=""
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                            <label htmlFor="language" className=" mt-3 ">Language</label>
                            <div className="arrow">
                                <select name="language" id="language" className="rounded">
                                    <option value="english" selected>English</option>
                                    <option value="arab">Arabic</option>
                                </select>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="form-check form-switch mt-4">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    onClick={toggleTheme}
                                />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    switch to dark mode
                                </label>
                            </div>
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
                    }} onClick={props.onHide}>
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
