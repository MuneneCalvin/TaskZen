import { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateTask';
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import "./task.scss";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "status",
        headerName: "Status",
        width: 250,
        type: "string",
    },
];

const Task = () => {
    const { id } = useParams();
    const  [open, setOpen] = useState(false);
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8088/task/${id}`)
        .then((res) => res.json())
        .then((data) => setTask(data));
    }, []);

    return (
        <div className="product">
        {tasks.map((task) => (
            <Single key={task} id={task} user={task} />
        ))}

        <button className="update-Btn" onClick={() => setOpen(true)}>Update</button>
        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
    )
}

export default Task;