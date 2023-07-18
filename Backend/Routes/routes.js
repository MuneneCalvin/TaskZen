import { loginUser, registerUser, getUsers, updateUser, loginRequired } from "../Controllers/userController.js";
import { getTeams, getTeam, createTeam, updateTeam, deleteTeam } from "../Controllers/teamController.js";

const taskRoutes = (app) => {

    // Teams Members
    app.route('/team')
        .get(loginRequired, getTeams)
        .post(loginRequired, getTeam);

    app.route('/team/:id')
        .get(loginRequired, getTeam)
        .post(loginRequired, createTeam)
        .put(loginRequired, updateTeam)
        .delete(loginRequired, deleteTeam);

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