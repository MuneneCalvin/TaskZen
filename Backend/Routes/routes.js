import { loginUser, registerUser, getUsers, getUser, updateUser } from "../Controllers/userController.js";

const taskRoutes = (app) => {

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