import { useState, useContext } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import { apidomain } from '../../Utils/domain';
import { Context } from "../../context/userContext/Context";
import { createNotification, Notification } from "../notification";
import "./add.scss";

type Props = {
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function addMember(props: Props) {
    const { user } = useContext(Context);
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            fetch(`${apidomain}/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    data && toast.success("New task added successfully.!!!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                    // Create notification
                    const notification: Notification = {
                        userId: user?.id,
                        message: `New task "${formData.name}" added. `,
                    };
                    createNotification(notification).then((response) => {
                        console.log(response);
                        toast.success("New notification.!!!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    })
                });
        } catch (error) {
            toast.error("😢 An error occurred while adding a new task.!!!", {
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
                    <button className="add-Btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default addMember

