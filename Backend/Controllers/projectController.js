import sql from 'mssql';
import nodemailer from 'nodemailer';
import config from '../Db/config.js';

// Create a shared connection pool
const pool = new sql.ConnectionPool(config.sql);
pool.connect();

// Get all projects
export const getProjects = async (req, res) => {
    try {
        const result = await pool.request()
            .query("select * from Projects");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the projects. ${error.message}` });
    }
}

// Get a project
export const getProject = async (req, res) => {
    try {
        const result = await pool.request()
            .input('id', sql.Int, req.params.id)
            .query("select * from Projects where id = @id");
        res.status(200).json(result.recordsets[0]);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the project. ${error.message}` });
    }
}

// Add a project
export const addProject = async (req, res) => {
    const { name, priority, deadline, assignedTo, createdAt } = req.body;
    try {
        const result = await pool.request()
            .input('name', sql.VarChar, name)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.DateTime, deadline)
            .input('assignedTo', sql.VarChar, assignedTo)
            .input('createdAt', sql.DateTime, createdAt)
            .query("insert into Projects (name, priority, deadline, assignedTo, createdAt) values (@name, @priority, @deadline, @assignedTo, @createdAt)");

        // Getting email of assignedTo user
        const assignedUser = await pool.request()
            .input('assignedTo', sql.VarChar, assignedTo)
            .query("select email from Team where firstName  = @assignedTo;");

        const assignedEmail = assignedUser.recordset[0].email;
        console.log(assignedEmail);

        // Sending email to assignedTo user
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'calvinshawn001@gmail.com',
                pass: config.mail_password
            },
        });

        let mailOptions = {
            from: 'calvinshawn001@gmail.com',
            to: assignedEmail,
            subject: 'New Project Assigned',
            text: `Hi ${assignedEmail},\n\nA new project has been assigned to you.\n\nProject Name: ${name}\nPriority: ${priority}\nDeadline: ${deadline}\n\nRegards,\nCalvin Shawn`
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.error('Error occurs', err);
                res.status(500).json({ Message: `Failed to send the email. ${err.message}` });
            } else {
                console.log(`Email sent!!! ${data.response}`);
                res.status(200).json({ Message: "Project created successfully..!!!" });
            }
        });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the project. ${error.message}` });
    }
}

// Update a project
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, deadline, assignedTo, createdAt } = req.body;
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .input('name', sql.VarChar, name)
            .input('priority', sql.VarChar, priority)
            .input('deadline', sql.DateTime, deadline)
            .input('assignedTo', sql.VarChar, assignedTo)
            .input('createdAt', sql.DateTime, createdAt)
            .query("update Projects set name = @name, priority = @priority, deadline = @deadline, assignedTo = @assignedTo, createdAt = @createdAt where id = @id");

        // Getting email of assignedTo user
        const assignedUser = await pool.request()
            .input('assignedTo', sql.VarChar, assignedTo)
            .query("select email from Team where firstName = @assignedTo");

        const assignedEmail = assignedUser.recordset[0].email;
        console.log(assignedEmail);

        // Sending email to assignedTo user
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'calvinshawn001@gmail.com',
                pass: config.mail_password
            },
        });

        let mailOptions = {
            from: 'calvinshawn001@gmail.com',
            to: assignedEmail,
            subject: 'Project Updated',
            text: `Hi ${assignedEmail},\n\nA project assigned to you has been updated.\n\nProject Name: ${name}\nPriority: ${priority}\nDeadline: ${deadline}\n\nRegards,\nCalvin Shawn`
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.error('Error occurs', err);
                res.status(500).json({ Message: `Failed to send the email. ${err.message}` });
            } else {
                console.log(`Email sent!!! ${data.response}`);
                res.status(200).json({ Message: "Project updated successfully..!!!" });
            }
        });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the project. ${error.message}` });
    }
}

// Delete a project
export const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Projects where id = @id");
        res.status(200).json({ Message: "Project deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the project. ${error.message}` });
    }
}

// Get all tasks of a project
export const getProjectTasks = async (req, res) => {
    try {
        const result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Tasks where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the tasks. ${error.message}` });
    }
}

// Get all comments of a project
export const getProjectComments = async (req, res) => {
    try {
        const result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Comments where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the comments. ${error.message}` });
    }
}

// Get all users of a project
export const getProjectUsers = async (req, res) => {
    try {
        const result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Users where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the users. ${error.message}` });
    }
}

// Get all teams of a project
export const getProjectTeams = async (req, res) => {
    try {
        const result = await pool.request()
            .input('projectId', sql.Int, req.params.projectId)
            .query("select * from Teams where projectId = @projectId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the teams. ${error.message}` });
    }
}

// Get all tasks of a user
export const getUserTasks = async (req, res) => {
    try {
        const result = await pool.request()
            .input('userId', sql.Int, req.params.userId)
            .query("select * from Tasks where userId = @userId");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the tasks. ${error.message}` });
    }
}
