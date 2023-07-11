// this is the signup page
import './signup.css';

function signup() {
    return (
        <main>
        <div className="login-box">
            <div className="login-header">
                <header>Sign Up</header>
            </div>

            <div className="input-box">
                <input type="text" className="input-field" placeholder="First Name" required/>
            </div>

            <div className="input-box">
                <input type="text" className="input-field" placeholder="Last Name" required/>
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
                <label htmlFor="submit">Sign Up</label>
            </div>

            <div className="sign-up-link">
                <p>Have an account? <a href="/login">Log In</a></p>
            </div>
        </div>
        </main>
    )
}

export default signup