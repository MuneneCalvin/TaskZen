import { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateProject';
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import "./project.scss";

interface Comment {
  id: number;
  comment: string;
}

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

const Project = () => {
  const { id } = useParams();
  // const { id } = useParams();
  const  [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8085/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(`http://localhost:8085/project/${id}/comments`);
    const data = await res.json();
    setComments(data);
  }

  return (
    <div className="product">
        {projects.map((project) => (
          <Single key={project} id={project} user={project} />
        ))}

      <div className="comments-container">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

        <button className="update-Btn" onClick={() => setOpen(true)}>Update</button>
        <button className="update-Btn" onClick={() => setOpen(true)}>Add Comment</button>
        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Project;
