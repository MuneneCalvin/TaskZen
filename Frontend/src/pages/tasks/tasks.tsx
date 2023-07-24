import { useState, useEffect } from "react";
import "./tasks.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/addTask";
import { GridColDef } from "@mui/x-data-grid";

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

function tasks() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8085/task")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="tasks">
        <div className="info">
        <h1>My tasks</h1>
        <button className="add-Btn" onClick={() => setOpen(true)}>Add New Task</button>
        </div>

        <DataTable slug="task" rows={data} columns={columns} />

        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
    )
}

export default tasks