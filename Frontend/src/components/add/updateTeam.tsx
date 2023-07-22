import { useState } from "react";
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import "./add.scss";

type Props = {
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function addMember(props: Props) {
    const { id } = useParams();
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            fetch(`http://localhost:8085/team/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    data && toast.success("Team updated successfully.!!!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                });
        } catch (error) {
            toast.error("😢 An error occurred while updating Team.!!!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        props.setOpen(false)
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>
                    X
                </span>
                <h1>Update/Edit Team</h1>
                <form onSubmit={handleSubmit} >
                {props.columns
                    .filter((item) => item.field !== "id" && item.field !== "img")
                    .map((column) => (
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} value={formData[column.field]}
                            onChange={(e) => setFormData((prevFormData => ({
                                ...prevFormData, [column.field]: e.target.value
                            })))}/>
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default addMember