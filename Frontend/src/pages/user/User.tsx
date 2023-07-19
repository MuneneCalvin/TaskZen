import { useState, useEffect } from "react";
import Single from "../../components/single/Single";
import Add from "../../components/add/updateTeam";
import { GridColDef } from "@mui/x-data-grid";
import "./user.scss";

interface User {
  id: number;
  img?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified: boolean;
}

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
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "Date",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Team = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8083/team");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="user">
      {users.map((user) => (
        <Single key={user.id} id={user.id} user={user} />
      ))}
      <button onClick={() => setOpen(true)}>Update Me</button>
      {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Team;
