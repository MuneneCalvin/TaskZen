import sql from 'mssql';
import config from '../Db/config.js';


// Getting all tasks
export const getTasks = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .query("select * from Tasks");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message : `Failed to get tasks..!!! ${error.message}`});
    } finally {
        sql.close()
    }
}

// Getting a task
export const getTask = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("select * from Tasks where id = @id");
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the task. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Adding a task
export const addTask = async (req, res) => {
    const { name, priority, deadline, createdAt, status } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.VarChar, deadline)
            .input('createdAt', sql.VarChar, createdAt)
            .input('status', sql.VarChar, status)
            .query("insert into Tasks (name, priority, deadline, createdAt, status) values (@name, @priority, @deadline, @createdAt, @status)");
        res.status(200).json({ Message: "Task created successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the task. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Updating a task
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, priority, deadline, status } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.NVarChar, name)
            .input('priority', sql.NVarChar, priority)
            .input('deadline', sql.NVarChar, deadline)
            .input('status', sql.NVarChar, status)
            .query("update Tasks set name = @name, priority = @priority, deadline = @deadline, status = @status where id = @id");
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the task. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Deleting a task
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Tasks where id = @id");
        res.status(200).json({ Message: "Task deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the task. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Updating a task status
export const updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .input('status', sql.NVarChar, status)
            .query("update Tasks set status = @status where id = @id");
        res.status(200).json({ Message: "Task status updated successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the task status. ${error.message}` });
    } finally {
        sql.close();
    }
}
