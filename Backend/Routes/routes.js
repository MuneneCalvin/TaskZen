import { loginUser, registerUser, getUser, getUsers, updateUser } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeamMember, updateTeamMember, deleteTeamMember, getProjectTeamMembers, getProjectComments, getProjectTasks } from "../Controllers/teamController.js";
import { getProjects, getProject, addProject, updateProject, deleteProject, getProjectUsers, getProjectTeams, getUserTasks } from "../Controllers/projectController.js";
import { getTasks, getTask, addTask, deleteTask, updateTaskStatus, getTasksByProjectId, getTasksByTeamId, getTasksByUserId } from "../Controllers/taskController.js";
import { getComments, getComment, addComment, updateComment, deleteComment, getCommentsByTaskId, getCommentsByUserId, getCommentsByProjectId, getCommentsByTeamId } from "../Controllers/commentController.js";
import { getNotifications, getNotificationById, getNotificationsByUserId, addNotification, deleteNotification, deleteNotificationsByUserId } from "../Controllers/notificationController.js";


const taskRoutes = (app) => {

    // Notifications
    app.route('/notification')
        .get(getNotifications)
        .post(addNotification);

    app.route('/notification/:id')
        .get(getNotificationById)
        .delete(deleteNotification);

    app.route('/notification/user/:userId')
        .get(getNotificationsByUserId)
        .delete(deleteNotificationsByUserId);

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
        .put(updateTaskStatus)
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

    app.route('/login')
        .post(loginUser)
        .get(getUser)


    app.route('/user')
        .get(getUsers)
        .put(updateUser)
        .delete(deleteTeamMember);

    app.route('/user/:id')
        .get(getUser)
        .put(updateUser)
        .delete(deleteTeamMember);

}

export default taskRoutes;