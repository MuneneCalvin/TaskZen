import { apidomain } from "../Utils/domain";

export type Notification = {
    userId: number;
    message: string;
};

// Create a notification
export const createNotification = async (notification: any) => {
    try {
        const response = await fetch(`${apidomain}/notification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(notification)
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};


