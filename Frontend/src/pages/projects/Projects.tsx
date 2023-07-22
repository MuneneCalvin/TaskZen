import { useState, useEffect } from "react";
import "./projects.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/addProject";
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
    field: "assignedTo",
    headerName: "Assigned To",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "Date",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/project")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="products">
      <div className="info">
        <h1>Projects</h1>
        <button onClick={() => setOpen(true)}>Add New Project</button>
      </div>

      <DataTable slug="project" columns={columns} rows={data} />
      {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
