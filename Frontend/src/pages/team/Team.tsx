import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Team.scss";
import { useState, useEffect } from "react";
import Add from "../../components/add/addMember";

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
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/team");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);


  return (
    <div className="users">
      <div className="info">
        <h1>Team</h1>
        <button className="add-Btn" onClick={() => setOpen(true)}>Add New Member</button>
      </div>
      <DataTable slug="team" columns={columns} rows={data} />
      
      {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
