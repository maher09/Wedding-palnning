import React, { useState, useEffect } from "react";
import "../../../public/assets/Bookreservation/bootstrap/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useAppContext } from '@/contextApi';
import Row from 'react-bootstrap/Row';

function ProfileModal(props: any) {
    const { darkMode, setDarkMode } = useAppContext();
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(localStorage.getItem('selectedImage') || null);
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
    const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
    const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        localStorage.setItem('selectedImage', selectedImage as string);
    }, [selectedImage]);

    useEffect(() => {
        localStorage.setItem('firstName', firstName);
    }, [firstName]);

    useEffect(() => {
        localStorage.setItem('lastName', lastName);
    }, [lastName]);

    useEffect(() => {
        localStorage.setItem('phone', phone);
    }, [phone]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

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

    const validateInputs = () => {
        const newErrors = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: ''
        };

        const nameRegex = /^[A-Za-z]+$/;
        const phoneRegex = /^\d+$/;
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!firstName.trim() || !nameRegex.test(firstName)) newErrors.firstName = 'First Name must contain only alphabetic characters';
        if (!lastName.trim() || !nameRegex.test(lastName)) newErrors.lastName = 'Last Name must contain only alphabetic characters';
        if (!phone.trim() || !phoneRegex.test(phone)) newErrors.phone = 'Phone Number must contain only numeric characters';
        if (!email.trim() || !emailRegex.test(email)) newErrors.email = 'Email Address is invalid';
        if (!password.trim() || !passwordRegex.test(password)) newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';

        setErrors(newErrors);

        return Object.values(newErrors).every(error => error === '');
    };

    const handleSave = () => {
        if (validateInputs()) {
            props.onHide();
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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
                        </Col>
                        <Col xs={6} md={6}>
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                className="bg-light form-control"
                                placeholder=""
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                        </Col>
                        <Col xs={6} md={6}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="bg-light form-control"
                                placeholder=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="arrow">
                                <label htmlFor="password">Change Password</label>
                                <input
                                    type="password"
                                    className="bg-light form-control"
                                    placeholder=""
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
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
