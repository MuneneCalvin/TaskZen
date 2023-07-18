import { loginUser, registerUser, getUsers, updateUser } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeam, updateTeam, deleteTeam } from "../Controllers/teamController.js";
import { getProjects, getProject, addProject, updateProject, deleteProject } from "../Controllers/projectController.js";

const taskRoutes = (app) => {

    // Projects
    app.route('/project')
        .get(getProjects)
        .post(addProject);

    app.route('/project/:id')
        .get(getProject)
        .put(updateProject)
        .delete(deleteProject);

    // Teams Members
    app.route('/team')
        .get(getTeams)
        .post(getTeam);

    app.route('/team/:id')
        .get(getTeam)
        .post(createTeam)
        .put(updateTeam)
        .delete(deleteTeam);

    // Authentication
    app.route('/register')
        .post(registerUser)
        .get(getUsers);

    app.route('/login')
        .post(loginUser)
        .get(getUsers)
        .put(updateUser);

}

export default taskRoutes;