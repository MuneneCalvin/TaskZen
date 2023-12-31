import { useEffect, useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateProject';
import Add2 from '../../components/add/addComment';
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import { apidomain } from '../../Utils/domain';
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

const columns2: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "comment",
    type: "string",
    headerName: "Comment",
    width: 250,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "Date",
  },
  {
    field: "projectId",
    headerName: "Project ID",
    width: 200,
  }
]

const Project = () => {
  const { id } = useParams();
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`${apidomain}/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch(`${apidomain}/project/${id}/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`${apidomain}/comment/${id}`, {
        method: 'DELETE',
      });

      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="product">
      {projects.map((project) => (
        <Single key={project} id={project} user={project} />
      ))}

      <div className="comments-container">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={"/noavatar.png"} alt="" />
            <p>{comment.comment}</p>
            <div className="delete" onClick={() => handleDelete(comment.id)}>
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="below">
      <button className="update-Btn" onClick={() => setOpenUpdate(true)}> Update</button>
      {openUpdate && <Add columns={columns} setOpen={setOpenUpdate} />}

      <button className="update-Btn" onClick={() => setOpenComment(true)}> Add Comment</button>
      {openComment && <Add2 columns2={columns2} setOpen={setOpenComment} />}
      </div>
    </div>
  );
};

export default Project;

