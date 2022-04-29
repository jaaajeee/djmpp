
import axios from "axios";
import { useState, useEffect,useCallback } from "react";
import Swal from 'sweetalert2'
const RecordActivities = () => {

    const [record, setRecord] = useState([useCallback(() => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            });
            const res = await client.get(`me/record`);
            setRecord(res.data);
        }
        )();
    }, [])]);

    const [update, setUpdate] = useState([]);
    const [isUpdating,setIsUpdating] = useState(false);
    
    
    const [data, setData] = useState({
        activityName: "",
        description: "",
        calories: "",
        date: "",
        duration: "",
    });

    const GetRecords = () => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            });
            const res = await client.get(`me/record`);
            setRecord(res.data);
        }
        )();
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        GetRecords();
    }
    , []);



    // sweet alert modal for edit record and pull data from database

    const onEdit = (id) => { 
        record.map(record => {
            if (record._id === id) {
                setUpdate({
                    activityName: record.activityName,
                    description: record.description,
                    calories: record.calories,
                    date: record.date,
                    duration: record.duration,
                })
                setIsUpdating(true);
            }else if (record._id !== id) {
                setIsUpdating(false);
            }
        })

        Swal.fire({
            title: 'Edit Record',
            html:`
            <form>
            <div class="form-group">
            <label for="activityName">Activity Name</label>
            <input type="text" class="form-control" id="activityName" placeholder="Activity Name" value="${update.activityName}">
            </div>
            
            <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Description" value="${update.description}">
            </div>
            
            <div class="form-group">
            <label for="calories">Calories</label>
            <input type="number" class="form-control" id="calories" placeholder="Calories" value="${update.calories}">
            </div>
            
            <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="Date" value="${update.date}">
            </div>
            
            <div class="form-group">
            <label for="duration">Duration</label>
            <input type="number" class="form-control" id="duration" placeholder="Duration" value="${update.duration}">
            </div>
            </form>
            `,
            
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Save'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Record Updated!',
                    'Your record has been updated.',
                    'success'
                ) 
                && (async () => {
                    const client = axios.create({
                        baseURL: "http://localhost:8000",
                    });
                    const res = await client.put(`me/record/${id}`, {
                        activityName: document.getElementById('activityName').setUpdate,
                        description: document.getElementById('description').setUpdate,
                        calories: document.getElementById('calories').setUpdate,
                        date: document.getElementById('date').setUpdate,
                        duration: document.getElementById('duration').setUpdate,
                    });
                    setRecord(res.data);
                }
                )();
            }
        })
    }
            //sweet alert confirmation for delete button 
            const onDelete = (id) => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to delete this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed){
                      Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )&& (async () => {
                        const client = axios.create({
                            baseURL: "http://localhost:8000",
                        })
                        await client.delete(`me/record/${id}`);
                        const newRecord = record.filter(record => record._id !== id);
                        setRecord(newRecord);
                        console.log(newRecord);
                    })();
                    }
                    if (result.isCancelled) {
                        Swal.fire(
                            'Cancelled',
                            'Your item is safe :)',
                            'error'
                        )
                        console.log("cancelled");
                    }
                  }) //end of sweet alert
            }
            return (
                <>
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
                                        <button className="btn btn-warning" onClick={() => {onEdit(items._id)}}>Edit</button> 
                                        <button className="btn btn-danger  m-1"  onClick={() => {onDelete(items._id)}} >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div> 
    </>
    )
}

export default RecordActivities;