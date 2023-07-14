import { useState } from "react";
import "./tasks.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

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
        field: "title",
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
        type: "string",
        headerName: "Deadline",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "status",
        headerName: "Assigned",
        width: 150,
        type: "boolean",
    },
];

function tasks() {
    const [open, setOpen] = useState(false);

    return (
        <div className="tasks">
        <div className="info">
        <h1>My tasks</h1>
        <button onClick={() => setOpen(true)}>Add New Task</button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

        {/* {isLoading ? (
        "Loading..."
        ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
        {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
    )
}

export default tasks