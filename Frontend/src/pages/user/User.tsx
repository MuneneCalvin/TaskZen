import { useState } from "react";
import Single from "../../components/single/Single";
import Add from '../../components/add/updateTeam';
import { GridColDef } from "@mui/x-data-grid";
import { singleUser } from "../../data";
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
  const  [open, setOpen] = useState(false);

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleUser}/>
      <button onClick={() => setOpen(true)}>Update Me</button>
      {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Team