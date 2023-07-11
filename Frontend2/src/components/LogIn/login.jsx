// this is the login page
import './login.css'

function login() {
    return (
        <main>
        <div className="login-box">
            <div className="login-header">
                <header>Login</header>
            </div>

            <div className="input-box">
                <input type="email" className="input-field" placeholder="Email" required/>
            </div>

            <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" required/>
            </div>

            <div className="forgot">
                <section>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember me</label>
                </section>
                <section>
                    <a href="#">Forgot password</a>
                </section>
            </div>

            <div className="input-submit">
                <button className="submit-btn" id="submit"></button>
                <label htmlFor="submit">Log In</label>
            </div>

            <div className="sign-up-link">
                <p>Don`t have an account? <a href="signup">Sign Up</a></p>
            </div>
        </div>
        </main>
    )
}

export default login