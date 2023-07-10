import { useNavigate } from 'react-router-dom';
import './Notfound.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleBotton = () => {
        navigate('/');
    };

    return (
    <div  id='notfound'>
        <div className="spider"><i className="fas fa-spider"></i></div>
            <div className="container">
                <h1>
                <span className="num">4 </span>
                <i className="fas fa-cog"></i>
                <span className="num"> 4</span>
                </h1>
                <p>Oops, Page not found.</p>
                <p>The page you are looking for does not exist. You may have mistyped the address or the page may have been moved.</p>

                <button className="learn-more" onClick={() => handleBotton()}>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Home</span>
                </button>
            </div>
    </div>
);
};

export default NotFoundPage;
