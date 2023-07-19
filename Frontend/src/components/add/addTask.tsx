import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
// import "./addMember.scss";

type Props = {
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function addMember(props: Props) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            fetch("http://localhost:8083/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        } catch (error) {
            console.log(error)
        }
        props.setOpen(false)
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>
                    X
                </span>
                <h1>Add new Task</h1>
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

