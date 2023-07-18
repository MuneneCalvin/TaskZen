import sql from 'mssql';
import config from '../Db/config.js';

// Get all projects
export const getProjects = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .query("select * from Projects");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the projects. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get a project
export const getProject = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("select * from Projects where id = @id");
        res.status(200).json(result.recordset[0]);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the project. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Add a project
export const addProject = async (req, res) => {
    const { title, priority, deadline, members, createdAt, verified } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('title', sql.VarChar, title)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.DateTime, deadline)
            .input('members', sql.VarChar, members)
            .input('createdAt', sql.DateTime, createdAt)
            .input('verified', sql.VarChar, verified)
            .query("insert into Projects (title, priority, deadline, members, createdAt, verified) values (@title, @priority, @deadline, @members, @createdAt, @verified)");
        res.status(200).json({ Message: "Project created successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the project. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Update a project
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, priority, deadline, members, verified } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .input('title', sql.VarChar, title)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.DateTime, deadline)
            .input('members', sql.VarChar, members)
            .input('verified', sql.VarChar, verified)
        res.status(200).json({ Message: "Project updated successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the project. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Delete a project
export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Projects where id = @id");
        res.status(200).json({ Message: "Project deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the project. ${error.message}` });
    } finally {
        sql.close();
    }
}

