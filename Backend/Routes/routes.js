import { loginUser, registerUser, getUser, getUsers, updateUser } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeamMember, updateTeamMember, deleteTeamMember } from "../Controllers/teamController.js";
import { getProjects, getProject, addProject, updateProject, deleteProject } from "../Controllers/projectController.js";
import { getTasks, getTask, addTask, updateTask, deleteTask } from "../Controllers/taskController.js";
import { getComments, getComment, addComment, updateComment, deleteComment, getCommentsByTaskId, getCommentsByUserId, getCommentsByProjectId, getCommentsByTeamId } from "../Controllers/commentController.js";


const taskRoutes = (app) => {

    // Comments
    app.route('/comment')
        .get(getComments)
        .post(addComment);

    app.route('/comment/:id')
        .get(getComment)
        .put(updateComment)
        .delete(deleteComment);

    app.route('/comment/task/:taskId')
        .get(getCommentsByTaskId);

    app.route('/comment/user/:userId')
        .get(getCommentsByUserId);

    app.route('/comment/project/:projectId')
        .get(getCommentsByProjectId);

    app.route('/comment/team/:teamId')
        .get(getCommentsByTeamId);


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
        .get(getUsers)
        .delete(deleteTeamMember);

    app.route('/login')
        .post(loginUser)
        .get(getUser)
        .put(updateUser)
        .delete(deleteTeamMember);

}

export default taskRoutes;