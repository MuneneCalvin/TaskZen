import { useState } from 'react';
import logo from '../../assets/logo.png';
import person from '../../assets/person.png';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import './landing.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`big-wrapper ${darkMode ? 'dark' : 'light'}`}>
        <img src = {logo} alt="" className="shape" />

        <header>
            <div className="container">
            <div className="logo">
                <img src = {logo} alt="Logo" />
                <h3>TaskZen</h3>
            </div>

            <div className="links">
                <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#" className="btn">Sign up</a></li>
                </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu">
                <div className="bar"></div>
            </div>
            </div>
        </header>

        <div className="showcase-area">
            <div className="container">
            <div className="left">
                <div className="big-title">
                <h2>Future is here,</h2>
                <h2>Start Exploring now.</h2>
                </div>
                <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
                </p>
                <div className="cta">
                <a href="#" className="btn">Get started</a>
                </div>
            </div>

            <div className="right">
                <img src = {person} alt="Person Image" className="person" />
            </div>
            </div>
        </div>

        <div className="bottom-area">
            <div className="container">
            <button className="toggle-btn" onClick={toggleDarkMode}>
                <i className="far fa-moon"><BsMoonStarsFill /></i>
                <i className="far fa-sun"><BsSunFill /></i>
            </button>
            </div>
        </div>
        </div>
    );
}

export default App;
