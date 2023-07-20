import { loginUser, registerUser, getUser, getUsers, updateUser } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeamMember, updateTeamMember, deleteTeamMember } from "../Controllers/teamController.js";
import { getProjects, getProject, addProject, updateProject, deleteProject } from "../Controllers/projectController.js";
import { getTasks, getTask, addTask, updateTask, deleteTask } from "../Controllers/taskController.js";


const taskRoutes = (app) => {

    // Tasks
    app.route('/task')
        .get(getTasks)
        .post(addTask);

    app.route('/task/:id')
        .get(getTask)
        .put(updateTask)
        .delete(deleteTask);


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
        .post(createTeamMember);

    app.route('/team/:id')
        .get(getTeam)
        .post(createTeamMember)
        .put(updateTeamMember)
        .delete(deleteTeamMember);


    // Authentication
    app.route('/register')
        .post(registerUser)
        .get(getUsers);

    app.route('/login')
        .post(loginUser)
        .get(getUser)
        .put(updateUser);

}

export default taskRoutes;