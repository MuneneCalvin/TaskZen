import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { toast } from "react-toastify";

type TeamMember = {
    id: number;
    lastName: string;
    firstName: string;
};

type Props = {
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

async function fetchTeamMembers(): Promise<TeamMember[]> {
    try {
        const response = await fetch("http://localhost:8083/team");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

function addMember(props: Props) {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        fetchTeamMembers().then((data) => {
        setTeamMembers(data);
        });
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
        fetch("http://localhost:8083/project", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                data && toast.success("New project added successfully.!!!", {
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
            toast.error("😢 An error occurred while adding a new project.!!!", {
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
        props.setOpen(false);
    };

    return (
        <div className="add">
        <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>
            X
            </span>
            <h1>Add new Project</h1>
            <form onSubmit={handleSubmit}>
            {props.columns
                .filter((item) => item.field !== "id" && item.field !== "img")
                .map((column) => (
                <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                    {column.field === "members" ? (
                    <select
                        value={formData[column.field] || ""}
                        onChange={(e) =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            [column.field]: e.target.value,
                        }))
                        }
                    >
                        <option value="">Select a member</option>
                        {teamMembers.map((member) => (
                        <option key={member.id} value={String(member.firstName)}>
                            {member.firstName} {member.lastName}
                        </option>
                        ))}
                    </select>
                    ) : (
                    <input
                        type={column.type}
                        placeholder={column.field}
                        value={formData[column.field] || ""}
                        onChange={(e) =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            [column.field]: e.target.value,
                        }))
                        }
                    />
                    )}
                </div>
                ))}
            <button>Send</button>
            </form>
        </div>
        </div>
    );
}

export default addMember;
