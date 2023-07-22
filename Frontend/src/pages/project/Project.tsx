import { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateProject';
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import "./project.scss";

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

const Project = () => {
  const { id } = useParams();
  const  [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8083/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="product">
        {projects.map((project) => (
          <Single key={project} id={project} user={project} />
        ))}

        <button className="update-Btn" onClick={() => setOpen(true)}>Update</button>
        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Project;
