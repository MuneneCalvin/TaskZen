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
        res.status(200).json(result.recordsets[0]);
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
    const { name, priority, deadline, createdAt, status } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.VarChar, deadline)
            .input('createdAt', sql.VarChar, createdAt)
            .input('status', sql.VarChar, status)
            .query("update Tasks set name = @name, priority = @priority, deadline = @deadline, createdAt = @createdAt, status = @status where id = @id");
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
            .input('status', sql.VarChar, status)
            .query("update Tasks set status = @status where id = @id");
        res.status(200).json({ Message: "Task status updated successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the task status. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Getting all tasks by project id
export const getTasksByProjectId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Tasks where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the tasks. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Getting all tasks by team id
export const getTasksByTeamId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('teamId', sql.Int, req.params.teamId)
            .query("select * from Tasks where teamId = @teamId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the tasks. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Getting all tasks by user id
export const getTasksByUserId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('userId', sql.Int, req.params.userId)
            .query("select * from Tasks where userId = @userId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the tasks. ${error.message}` });
    } finally {
        sql.close();
    }
}