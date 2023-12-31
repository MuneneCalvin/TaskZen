import { useState, useContext } from "react";
import { Context } from "../../context/userContext/Context";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const username = user?.username ?? "Guest";
  const [showDropdown, setShowDropdown] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setShowDropdown(false);
    navigate("/");
  };

  const handleEditProfile = () => {
    navigate("/profile");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleNotifications = () => {
    setNotificationCount(0);
    navigate(`notification/${user?.id}`);
  };

  return (
    <div className="navbar">
      
      <div className="logo">
        <img src="/ki85EbAbT.jpg" alt="" />
        <span>TaskZen</span>
      </div>

      <div className="icons">
        <img
          src="/expand.svg"
          alt=""
          className="icon-nav"
          onClick={handleImageClick}
        />
        <div className="notification" onClick={handleNotifications}>
          <img src="/notifications.svg" alt="" />
          <span>{notificationCount}</span>
        </div>

        <div className="user" onClick={handleImageClick}>
          <span>{username}</span>
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown">
          <button onClick={handleSettings}>Settings</button>
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
