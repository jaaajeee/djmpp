
import axios from "axios";
import { useState, useEffect } from "react";
import "./edit-exercise";
import EditActivities from "./edit-exercise";

const RecordActivities = () => {

    const [record, setRecord] = useState([]);
    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            const res = await client.get(`me/record`);
            setRecord(res.data);
        })();
    }, []);


    //sweet alert confirmation for delete button 

    const onDelete = (id) => {
        window.confirm("Are you sure to delete?") && (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            await client.delete(`me/record/${id}`);
            const newRecord = record.filter(record => record._id !== id);
            setRecord(newRecord);
            console.log(newRecord);
        })();
    }

    // sweet alert modal for edit record and pull data from database

    // const onEdit = (id) => {
    //     window.confirm("Are you sure to edit?") && (async () => {
    //         const client = axios.create({
    //             baseURL: "http://localhost:8000",
    //         })
    //         await client.put(`user/me/record/${id}`);
    //         const newRecord = record.filter(record => record._id !== id);
    //         setRecord(newRecord);
    //         console.log(newRecord);
    //     })();
    // }

    return (
        <div className="container d-justify-content-center">
            <div className="row">
                <div className="mt-5 col-md-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Activity</th>
                                <th scope="col">Description</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((items, index) => (
                                <tr key={index}>
                                    <td>{items.activityName}</td>
                                    <td>{items.description}</td>
                                    <td>{items.calories}</td>
                                    <td>{items.date && items.date.slice(0, 10)}</td>
                                    <td>{items.duration}</td>
                                    <td>
                                        <button id={index} className="btn btn-warning" >Edit</button>
                                        <button className="btn btn-danger"  onClick={() => {onDelete(items._id)}} >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
    )
}

export default RecordActivities;