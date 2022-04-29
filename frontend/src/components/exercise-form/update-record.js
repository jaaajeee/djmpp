// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function UpdateRecords() {

//     const [record, setRecord] = useState([]);
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [update, setUpdate] = useState({
//         activityName: "",
//         description: "",
//         calories: "",
//         date: "",
//         duration: "",
//     });

//     const handleInputChange = (e) => {
//         setUpdate({
//             ...update,
//             [e.target.name]: e.target.value,
//         });
//     };

//     useEffect((id) => {
//         (async () => {
//             const client = axios.create({
//                 baseURL: "http://localhost:8000",
//             });
//             const res = await client.get(`me/record/${id}`);
//             setRecord(res.data);
//         })();
//     }, []);

//     const handleClick = (e) => {
//         if (e.target.className === "btn btn-danger") {
//             onDelete(e.target.id);
//         }
//         if (e.target.className === "btn btn-warning") {
//             onEdit(e.target.id);
//         }
//     };

//     const onDelete = (id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to delete this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed){
//                 Swal.fire(
//                     'Deleted!',
//                     'Your item has been deleted.',
//                     'success'
//                 )&& (async () => {
//                     const client = axios.create({
//                         baseURL: "http://localhost:8000",
//                     });
//                     await client.delete(`me/record/${id}`);
//                     const newRecord = record.filter(record => record._id !== id);
//                     setRecord(newRecord);
//                     console.log(newRecord);
//                 })();
//             }
//             if (result.isCancelled) {
//                 Swal.fire(
//                     'Cancelled',
//                     'Your item is safe :)',
//                     'error'
//                 )
//                 console.log("cancelled");
//             }
//         }) //end of sweet alert
//     };

//     const onEdit = (id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to edit this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, edit it!'
//         }).then((result) => {
//             if (result.isConfirmed){
//                 Swal.fire(
//                     'Edited!',
//                     'Your item has been edited.',
//                     'success'
//                 )&& (async () => {
//                     const client = axios.create({
//                         baseURL: "http://localhost:8000",
//                     });
//                     await client.put(`me/record/${id}`, update);
//                     const newRecord = record.filter(record => record._id !== id);
//                     setRecord(newRecord);
//                     console.log(newRecord);
//                 })();
//             }
//             if (result.isCancelled) {
//                 Swal.fire(
//                     'Cancelled',
//                     'Your item is safe :)',
//                     'error'
//                 )
//                 console.log("cancelled");
//             }
//         }) //end of sweet alert
//     };
//   return (
//     <div className="container">

//         <div className="row">
//             <div className="col-md-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <h3>Update Record</h3>
//                     </div>
//                     <div className="card-body">
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="activityName">Activity Name</label>
//                                 <input

//                                     type="text"
//                                     className="form-control"
//                                     id="activityName"
//                                     name="activityName"
//                                     value={record.activityName}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="description">Description</label>
//                                 <input

//                                     type="text"
//                                     className="form-control"
//                                     id="description"
//                                     name="description"
//                                     value={record.description}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="calories">Calories</label>
//                                 <input

//                                     type="text"
//                                     className="form-control"
//                                     id="calories"
//                                     name="calories"
//                                     value={record.calories}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="date">Date</label>
//                                 <input

//                                     type="date"
//                                     className="form-control"
//                                     id="date"
//                                     name="date"
//                                     value={record.date}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="duration">Duration</label>
//                                 <input

//                                     type="text"
//                                     className="form-control"
//                                     id="duration"
//                                     name="duration"
//                                     value={record.duration}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <button

//                                 type="button"
//                                 className="btn btn-warning"
//                                 id={record._id}
//                                 onClick={handleClick}
//                             >
//                                 Update
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// };
