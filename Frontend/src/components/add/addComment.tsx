import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { apidomain } from '../../Utils/domain';
import './add.scss';

type Props = {
    columns2: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function addComment(props: Props) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            fetch(`${apidomain}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    data && toast.success("New comment added successfully.!!!", {
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
            toast.error("😢 An error occurred while adding a new comment.!!!", {
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
                <h1>Add new Comment</h1>
                <form onSubmit={handleSubmit} >
                {props.columns2
                    .filter((column) => column.field !== "id")
                    .map((column) => (
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} value={formData[column.field]}
                            onChange={(e) => setFormData((prevFormData => ({
                                ...prevFormData, [column.field]: e.target.value
                            })))}/>
                        </div>
                    ))}
                <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}

export default addComment;