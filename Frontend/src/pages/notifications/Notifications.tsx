import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apidomain } from '../../Utils/domain';
import './notifications.scss';

interface Notification {
  id: number;
  message: string;
}

function Notifications() {
  const { id } = useParams();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`${apidomain}/notification/user/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleDelete = async (notificationId: number) => {
    try {
      await fetch(`${apidomain}/notification/${notificationId}`, {
        method: "DELETE",
      });
      fetchNotifications();
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <div className="notificationsContainer">
        <div className="notificationsList">
          {Array.isArray(notifications) && notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="notification-list" key={notification.id}>
                <img className="user-img" src={"/noavatar.png"} alt="" />
                <p>{notification.message}</p>
                <div className="delete">
                  <img
                    className="delete-icon"
                    src="/delete.svg"
                    alt=""
                    onClick={() => handleDelete(notification.id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No notifications to display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
