import sql from 'mssql';
import config from '../Db/config.js';

// Get the whole teams
export const getTeams = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .query("select * from Team");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the teams. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Get a team member
export const getTeam = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("select * from Team where id = @id");
        res.status(200).json(result.recordsets[0]);
    } catch (error) {
        res.status(404).json({ Message: `Failed to get the team. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Create a team member
export const createTeamMember = async (req, res) => {
    const { lastName, firstName, email, phone, createdAt } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('lastName', sql.VarChar, lastName)
            .input('firstName', sql.VarChar, firstName)
            .input('email', sql.VarChar, email)
            .input('phone', sql.VarChar, phone)
            .input('createdAt', sql.DateTime, createdAt)
            .query("insert into Team (lastName, firstName, email, phone, createdAt ) values (@lastName, @firstName, @email, @phone, @createdAt )");
        res.status(200).json({ Message: "Team Member created successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to create the team member. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Update a team member
export const updateTeamMember = async (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, email, phone } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('id', sql.Int, id)
            .input('lastName', sql.VarChar, lastName)
            .input('firstName', sql.VarChar, firstName)
            .input('email', sql.VarChar, email)
            .input('phone', sql.VarChar, phone)
            .query("update Team set lastName = @lastName, firstName = @firstName, email = @email, phone = @phone where id = @id");
        res.status(200).json({ Message: "Team Member updated successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to update the team member. ${error.message}` });
    } finally {
        sql.close();
    }
}

// Delete a team member
export const deleteTeamMember = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('id', sql.Int, id)
            .query("delete from Team where id = @id");
        res.status(200).json({ Message: "Team Member deleted successfully..!!!" });
    } catch (error) {
        res.status(404).json({ Message: `Failed to delete the team member. ${error.message}` });
    } finally {
        sql.close();
    }
}