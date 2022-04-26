import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap'

const EditActivities = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    return () => {
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Activities</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* pull data from database */}
                    {/* <form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    }
}
export default EditActivities;