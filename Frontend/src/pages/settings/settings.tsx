import { useState } from 'react';
import { toast } from 'react-toastify';
import { apidomain } from '../../Utils/domain';
import './settings.scss';

const SettingsPage = () => {
    const [profilePic, setProfilePic] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const photoFile = event.target.files?.[0];
        if (photoFile) {
        setProfilePic(URL.createObjectURL(photoFile));
        }
    };

    const handleUpdateClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

    try {
        const response = await fetch(`${apidomain}/user`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            profilePic,
            username,
            email,
            phone,
            password,
            }),
        });

        if (response.ok) {
            toast.success("Profile updated successfully!!!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } else {
            throw new Error('Update failed');
        }
        } catch (error) {
        toast.error("😢 An error occurred while updating profile.!!!", {
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
    };

    return (
        <>
        <h2 className='settings-heading'>Settings</h2>
        <div className='settings-container'>
            {/* Profile Photo */}
            <div className="profile-photo-container">
            <h3>Profile Photo</h3>
            <img className="profile-photo" src={profilePic || "/noavatar.png"} alt="Profile" />
            <input
                className="profile-photo-input"
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
            />
            </div>

            <form className="settings-form">
            <div className="settings-form-group">
                <label>Username</label>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
            </div>

            <div className="settings-form-group">
                <label>Email</label>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </div>

            <div className="settings-form-group">
                <label>Phone No.</label>
                <input
                type="phone"
                placeholder="Phone No."
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                />
            </div>

            <div className="settings-form-group">
                <label>New Password</label>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </div>

            <button className="settings-submit-btn" type="submit" onClick={handleUpdateClick}>
                Update
            </button>
            </form>
        </div>
        </>
    );
};

export default SettingsPage;
