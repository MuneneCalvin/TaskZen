import { useState, useContext} from "react";
// import Single from "../../components/single/Single";
import Add from "../../components/add/updateProfile";
import { Context } from "../../../src/context/userContext/Context"
import { GridColDef } from "@mui/x-data-grid";
import "./profile.scss";


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
    field: "Name",
    type: "string",
    headerName: "Full Name",
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

const Profile = () => {
    const { user } = useContext(Context);
    const [open, setOpen] = useState(false);

    return (
    <div className="user">
            <h4>{user?.username}</h4> <br />
            <br />
            <span>{user?.email}</span>
            <br />
            <br />
        <button onClick={() => setOpen(true)}>Update</button>
        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
    );
};

export default Profile;
