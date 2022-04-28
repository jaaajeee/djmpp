
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const RecordActivities = () => {

    const [record, setRecord] = useState([]);

    const [isUpdating, setIsUpdating] = useState(false);

    const [update, setUpdate] = useState({
        activityName: "",
        description: "",
        calories: "",
        date: "",
        duration: "",
    });

    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            const res = await client.get(`me/record`);
            setRecord(res.data);
        })();
    }, []);

    const handleChange = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value,
        });
    };


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

    // sweet alert modal for edit record and pull data from database

    const onEdit = (id) => {
        const updateActivity = async (e) => {
            e.preventDefault();

            const client = axios.create({
                baseURL: "http://localhost:8000",
            })
            const res = await client.get(`me/record/${id}`);
            if(res.data.status === 200)
            {
                setRecord({
                    activityName: res.data.activityName,
                    description: res.data.description,
                    calories: res.data.calories,
                    date: res.data.date,
                    duration: res.data.duration,
                });
            }
        }
        Swal.fire({
            title: 'Edit Record',
            html:`
            <form>
            <div class="form-group">
            <label for="activityName">Activity Name</label>
            <input type="text" class="form-control" id="activityName" placeholder="Activity Name" value="${setRecord.activityName}">
            </div>

            <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Description" value="${setRecord.description}">
            </div>

            <div class="form-group">
            <label for="calories">Calories</label>
            <input type="number" class="form-control" id="calories" placeholder="Calories" value="${setRecord.calories}">
            </div>

            <div class="form-group">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" placeholder="Date" value="${setRecord.date}">
            </div>

            <div class="form-group">
            <label for="duration">Duration</label>
            <input type="number" class="form-control" id="duration" placeholder="Duration" value="${setRecord.duration}">
            </div>
            </form>
            `,

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Save'
            }).then((update) => {
                if (setUpdate.isConfirmed){
                    Swal.fire(
                        'Saved!',
                        'Your item has been saved.',
                        'success'
                    )(async () => {
                        const client = axios.create({
                            baseURL: "http://localhost:8000",
                        })
                        await client.put(`me/record/${id}`, {   
                            //put request to update record  in database
                            activityName: setUpdate.activityName,
                            description: setUpdate.description,
                            calories: setUpdate.calories,
                            date: setUpdate.date,
                            duration: setUpdate.duration,
                        });

                        const newRecord = record.map(record => {
                            if(record._id === id)
                            {
                                return setUpdate;
                            }
                            return record;
                        });
                        setRecord(newRecord);
                        setUpdate({
                            activityName: "",
                            description: "",
                            calories: "",
                            date: "",
                            duration: "",
                        });
                        setIsUpdating(false);
                    })();
                }
                if (update.isCancelled) {
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
        {/* <EditModal /> */}
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
                                        <button className="btn btn-warning" onClick={() => {onEdit()}} >Edit</button>
                                        <button className="btn btn-warning m-1"> 

                                        <a href="/edit">Edit</a>
                                        
                                        </button> 
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