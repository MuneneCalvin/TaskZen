import sql from 'mssql';
import config from '../Db/config.js';

// Get all comments
export const getComments = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .query("select * from Comments");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get a comment
export const getComment = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("select * from Comments where id = @id");
        res.status(200).json(result.recordsets[0]);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comment. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Add a comment
export const addComment = async (req, res) => {
    const { comment, createdAt } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('comment', sql.VarChar, comment)
            .input('createdAt', sql.DateTime, createdAt)
            .query("insert into Comments (comment, createdAt) values (@comment, @createdAt)");
        res.status(200).json({ Message: "Comment created successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the comment. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Update a comment
export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { comment, createdAt } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .input('comment', sql.VarChar, comment)
            .input('createdAt', sql.DateTime, createdAt)
            .query("update Comments set comment = @comment, createdAt = @createdAt where id = @id");
        res.status(200).json({ Message: "Comment updated successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the comment. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Delete a comment
export const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Comments where id = @id");
        res.status(200).json({ Message: "Comment deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the comment. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get all comments by task id
export const getCommentsByTaskId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('taskId', sql.Int, req.params.taskId)
            .query("select * from Comments where taskId = @taskId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get all comments by user id
export const getCommentsByUserId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('userId', sql.Int, req.params.userId)
            .query("select * from Comments where userId = @userId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get all comments by project id
export const getCommentsByProjectId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Comments where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get all comments by team id
export const getCommentsByTeamId = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('teamId', sql.Int, req.params.teamId)
            .query("select * from Comments where teamId = @teamId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    } finally {
        sql.close();
    }
}