import { loginUser, registerUser, getUser, getUsers, updateUser } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeamMember, updateTeamMember, deleteTeamMember, getProjectTeamMembers, getProjectComments, getProjectTasks } from "../Controllers/teamController.js";
import { getProjects, getProject, addProject, updateProject, deleteProject, getProjectTasks, getProjectComments, getProjectUsers, getProjectTeams, getUserTasks } from "../Controllers/projectController.js";
import { getTasks, getTask, addTask, updateTask, deleteTask, updateTaskStatus, getTasksByProjectId, getTasksByTeamId, getTasksByUserId } from "../Controllers/taskController.js";
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

    app.route('/task/:id/status')
        .put(updateTaskStatus);

    app.route('/task/project/:projectId')
        .get(getTasksByProjectId);

    app.route('/task/team/:teamId')
        .get(getTasksByTeamId);

    app.route('/task/user/:userId')
        .get(getTasksByUserId);


    // Projects
    app.route('/project')
        .get(getProjects)
        .post(addProject);

    app.route('/project/:id')
        .get(getProject)
        .put(updateProject)
        .delete(deleteProject);

    app.route('/project/:projectId/tasks')
        .get(getProjectTasks);

    app.route('/project/:projectId/comments')
        .get(getProjectComments);

    app.route('/project/:projectId/users')
        .get(getProjectUsers);

    app.route('/project/:projectId/teams')
        .get(getProjectTeams);

    app.route('/project/:projectId/users/:userId/tasks')
        .get(getUserTasks);


    // Teams Members
    app.route('/team')
        .get(getTeams)
        .post(createTeamMember);

    app.route('/team/:id')
        .get(getTeam)
        .post(createTeamMember)
        .put(updateTeamMember)
        .delete(deleteTeamMember);

    app.route('/team/:projectId')
        .get(getProjectTeamMembers);

    app.route('/team/:projectId/comments')
        .get(getProjectComments);

    app.route('/team/:projectId/tasks')
        .get(getProjectTasks);


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