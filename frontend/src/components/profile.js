import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import Avatar from './user/img_avatar.png'; 
import './style/profile.css'

export default function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="light" onClick={handleShow}>
      Profile
    </Button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <img  src={Avatar} alt="Avatar" style={{width: '50%'}}/>
            <p>Username</p>
            <Button variant="danger">Sign Out</Button>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}
