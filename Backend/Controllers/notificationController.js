import sql from 'mssql';
import config from '../Db/config.js';

// Get all notifications
export const getNotifications = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .query("select * from Notifications");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the notifications. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get notification by id
export const getNotificationById = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("select * from Notifications where id = @id");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the notification. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get all notifications by user id
export const getNotificationsByUserId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('userId', sql.Int, req.params.userId)
            .query("select * from Notifications where userId = @userId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the notifications. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Create a notification
export const addNotification = async (req, res) => {
    const { userId, message } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('userId', sql.Int, userId)
            .input('message', sql.VarChar, message)
            .query("insert into Notifications (userId, message) values (@userId, @message)");
        res.status(200).json({ Message: "Notification created successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the Notification. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Delete a notification
export const deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Notifications where id = @id");
        res.status(200).json({ Message: "Notification deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the notification. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Delete all notifications by user id
export const deleteNotificationsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('userId', sql.Int, userId)
            .query("delete from Notifications where userId = @userId");
        res.status(200).json({ Message: "Notifications deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the notifications. ${error.message}` });
    } finally {
        sql.close();
    }
}