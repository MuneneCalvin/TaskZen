import { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateProject';
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import "./task.scss";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "name",
        type: "string",
        headerName: "Name",
        width: 250,
    },
    {
        field: "priority",
        type: "string",
        headerName: "Priority",
        width: 150,
    },
    {
        field: "deadline",
        type: "Date",
        headerName: "Deadline",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "Date",
    },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        type: "string",
    },
];

const Task = () => {
    const { id } = useParams();
    const  [open, setOpen] = useState(false);
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8085/task/${id}`)
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