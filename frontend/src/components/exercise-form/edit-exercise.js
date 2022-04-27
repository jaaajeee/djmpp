import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap'

const EditActivities = () => {
    const initialUpdate = {
        activityName: "",
        description: "",
        calories: "",
        date: "",
        duration: "",
    };

    const [records, setRecords] = useState([]);
    const [update, setUpdate] = useState(initialUpdate);
    const [errors, setErrors] = useState({});
    const [isUpdating, setIsUpdating] = useState(false);

    // const recordsList = records.map((record) => {
    //     return (
    //         <tr key={record.id}>
    //             <td>{record.activityName}</td>
    //             <td>{record.description}</td>
    //             <td>{record.calories}</td>
    //             <td>{record.date}</td>
    //             <td>{record.duration}</td>
    //             <td>
    //                 <Button
    //                     variant="primary"
    //                     onClick={() => {
    //                         setUpdate({
    //                             activityName: record.activityName,
    //                             description: record.description,
    //                             calories: record.calories,
    //                             date: record.date,
    //                             duration: record.duration,
    //                         });
    //                         setIsUpdating(true);
    //                     }
    //                     }
    //                 >
    //                     Edit
    //                 </Button>
    //             </td>
    //         </tr>
    //     );
    // }
    // );
    

    const handleChange = (event) => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value,
        });
    }
    const handleClick = (event) => {
        const isNull = Object.values(update).some((item) => item === "");
        if (isNull) {
            setErrors({
                activityName: "Activity name is required",
                description: "Description is required",
                calories: "Calories is required",
                date: "Date is required",
                duration: "Duration is required",
            });
        } else {
            setErrors({});
            setIsUpdating(true);
        }
    }

    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            if (isUpdating) {
                await client.put("me/record", update)
                    .then(res => {
                        if (res.status === 200) {
                            alert("All Records updated");
                            setIsUpdating(false);
                        }
                    }
                    )
                    .catch((err) => {
                        alert("Please insert correct data");
                        console.log(err);
                    }
                    )
            }
        })()
    }, [isUpdating]);

    return () => {
        <div>
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="activityName">Activity Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="activityName"
                                name="activityName"
                                onChange={handleChange}
                                value={update.activityName}
                            />
                            {errors.activityName && (
                                <div className="alert alert-danger">
                                    {errors.activityName}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input

                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                onChange={handleChange}
                                value={update.description}
                            />
                            {errors.description && (
                                <div className="alert alert-danger">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="calories">Calories</label>
                            <input

                                type="number"
                                className="form-control"
                                id="calories"
                                name="calories"
                                onChange={handleChange}
                                value={update.calories}
                            />  
                            {errors.calories && (
                                <div className="alert alert-danger">
                                    {errors.calories}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                onChange={handleChange}
                                value={update.date}
                            />
                            {errors.date && (
                                <div className="alert alert-danger">
                                    {errors.date}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="number"
                                className="form-control"
                                id="duration"
                                name="duration"
                                onChange={handleChange}
                                value={update.duration}
                            />
                            {errors.duration && (
                                <div className="alert alert-danger">
                                    {errors.duration}
                                </div>
                            )}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    }
}   
export default EditActivities;