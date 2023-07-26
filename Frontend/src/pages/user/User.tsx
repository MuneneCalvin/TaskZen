import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Single from "../../components/single/Single";
import Add from "../../components/add/updateTeam";
import { GridColDef } from "@mui/x-data-grid";
import { apidomain } from '../../Utils/domain';
import "./user.scss";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
];

const Team = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apidomain}/team/${id}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="user">
      {users.map((user) => (
        <Single key={user} id={user} user={user} />
      ))}
      <button className="update-Btn" onClick={() => setOpen(true)}>Update</button>
      {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Team;
