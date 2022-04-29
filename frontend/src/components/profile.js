import Offcanvas from 'react-bootstrap/Offcanvas';
import  { useState } from 'react';
import Avatar from './user/img_avatar.png'; 
import './style/profile.css'
import Button from 'react-bootstrap/esm/Button';

export default function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>Profile
    </Button>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <img  src={Avatar} alt="Avatar" style={{width: '50%'}}/>

            <h1>John Doe</h1>
            <h4>Email</h4> 
            <p>example@email.com</p>
            <h4>Age</h4>
            <p>35</p>
         
            <h4>Height</h4>
            <p>175 cm</p>
            <h4>Weight</h4>
            <p>150 kg</p>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}
