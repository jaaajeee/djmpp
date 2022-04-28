
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const EditModal = (props) => {

    const [record, setRecord] = useState([]);
    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: 'http://localhost:8000',
            });
            const res = await client.get(`me/record/${props.id}`);
            setRecord(res.data);
        }
        )();
    }, []);

    const onEdit = (id) => {
        window.confirm("Are you sure to edit?") && (async () => {
            const client = axios.create({
                baseURL: 'http://localhost:8000',
            });
            await client.put(`me/record/${id}`, {
                activity: record.activity,
                description: record.description,
                calories: record.calories,
                date: record.date,
                duration: record.duration,
            });
            props.onHide();
        }
        )();
    }

    const handleClick = (id) => {
        onEdit(id);
    }

  return (
    <div>
        <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Record</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={props.handleClick}>
                            <label htmlFor="activityName">Activity Name</label>
                            <input type="text" className="form-control" id="activityName" value={props.update.activityName} onChange={props.handleChange} />
                            {props.errors.activityName && <div className="alert alert-danger">{props.errors.activityName}</div>}

                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="description" value={props.update.description} onChange={props.handleChange} />
                            {props.errors.description && <div className="alert alert-danger">{props.errors.description}</div>}

                            <label htmlFor="calories">Calories</label>
                            <input type="text" className="form-control" id="calories" value={props.update.calories} onChange={props.handleChange} />
                            {props.errors.calories && <div className="alert alert-danger">{props.errors.calories}</div>}

                            <label htmlFor="date">Date</label>
                            <input type="text" className="form-control" id="date" value={props.update.date} onChange={props.handleChange} />
                            {props.errors.date && <div className="alert alert-danger">{props.errors.date}</div>}


                            <label htmlFor="duration">Duration</label>
                            <input type="text" className="form-control" id="duration" value={props.update.duration} onChange={props.handleChange} />
                            {props.errors.duration && <div className="alert alert-danger">{props.errors.duration}</div>}
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={props.handleClick}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default EditModal;