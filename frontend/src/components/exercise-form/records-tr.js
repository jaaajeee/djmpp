const RecordDatas = ({ records, onEdit, onDelete }) => {

  const handleClick = (e) => {
    if (e.target.className === "btn btn-danger") {
      onDelete(e.target.id);
    }
    if (e.target.className === "btn btn-warning") {
      onEdit(e.target.id);
    }
  };
  return records.map((items, index) => {
    return (
         <tr key={index}>
                <td>{items.activityName}</td>
                <td>{items.description}</td>
                <td>{items.calories}</td>
                <td>{items.date}</td>
                <td>{items.duration}</td>
                <td>
                  <button id={index} className="btn btn-warning" onClick={handleClick}>edit</button>
                  <button id={index} className="btn btn-danger" onClick={handleClick}>delete</button>
                </td>
              
        </tr>
  )
  }
  )
}
  export default RecordDatas;
