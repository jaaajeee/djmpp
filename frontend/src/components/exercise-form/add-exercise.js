import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";


const AddActivities = () => {
    const initialState = {
        activityName: "",
        description: "",
        calories: "",
        date: "",
        duration: "",
    };
    const [activity, setActivity] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setActivity({ ...activity, [id]: value });
    };

    const handleClick = (e) => {
        const isNull = Object.values(activity).some((item) => item === "");
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
            setIsSubmitting(true);
        }
        const isSubmitting = true;
        setIsSubmitting(isSubmitting);
    }

    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            if(isSubmitting){
                await client.post("me/record", activity)
                .then(res => {
                    if(res.status === 200){
                        alert("All Records added");
                        setIsSubmitting(false);
                    }
                })
                .catch((err) => {
                    alert("Please insert correct data");
                    console.log(err);
                })
            }
        })()
    }, [isSubmitting]);


    return (
      <Form className="mt-3 col-md-4  container-fluid">
        <Form.Group className="mb-3">
            <Form.Label>Activity Name</Form.Label>
              <Form.Select
                id="activityName"
                name="activityName"
                type="text"
                onChange={handleChange}
                value={activity.activityName}
                
                >
                <option >Select Activity</option>
                <option >Running</option>
                <option >Walking</option>
                <option >Swimming</option>
                <option >Cycling</option>
                <option >Hiking</option>
                </Form.Select>
                <p>{errors.activity}</p>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                value={activity.description}
                />
            <Form.Text className="text-muted" >
                {errors.description}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Calories</Form.Label>
            <Form.Control
                id="calories"
                name="calories"
                type="number"
                onChange={handleChange}
                value={activity.calories}
                />
            <Form.Text className="text-muted">
                {errors.calories}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
                id="date"
                name="date"
                type="date"
                onChange={handleChange}
                value={activity.date}
                />
            <Form.Text className="text-muted">
                {errors.date}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Duration (minute)</Form.Label>
            <Form.Control
                id="duration"
                name="duration"
                type="number"
                onChange={handleChange}
                value={activity.duration}
                />
            <Form.Text className="text-muted">
                {errors.duration}
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick} >SAVE</Button>

        

        </Form>

    );
};
export default AddActivities;