import { useState, useContext} from "react";
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
    <div className="user-profile">

        {/* Profile Picture */}
        <div className="profile-pic">
            <img src={user?.img || "/noavatar.png"} alt="" />
        </div>

        {/* User details */}
        <div className="user-details">
            <div className="user-details-item">
                <span className="user-details-key">Full Name: </span>
                <span className="user-details-value">{user?.username}</span>
            </div>
            <div className="user-details-item">
                <span className="user-details-key">Email: </span>
                <span className="user-details-value">{user?.email}</span>
            </div>
            <div className="user-details-item">
                <span className="user-details-key">Phone:</span>
                <span className="user-details-value">{user?.phone}</span>
            </div>
        </div>

        <div className="button-profile">
            {/* Update Button */}
            <button onClick={() => setOpen(true)}>Update</button>

            {/* Log Out button */}
            <button className="logout">Log Out</button>
        </div>

        {open && <Add columns={columns} setOpen={setOpen} />}
    </div>
    );
};

export default Profile;
