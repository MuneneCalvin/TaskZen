import { Link } from 'react-router-dom';
import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import userimg from '../../assets/images/user.png';
import dashboard from '../../assets/images/dashboard.png';
import reports from '../../assets/images/reports.png';
import messages from '../../assets/images/messages.png';
import projects from '../../assets/images/projects.png';
import members from '../../assets/images/members.png';
import setting from '../../assets/images/setting.png';
import logo from '../../assets/logo.png';
import logout from '../../assets/images/logout.png';
import './dashboard.css'

function dashboard2() {
  return (
    <>
      <div id='Header'>
        {/* Side Nav */}
            <div className="side-nav">
                <div className="user">
                    <img src={logo} className='user-img' />
                    <div className='user-details'>
                        <h2>user.username</h2>
                        <p>user.email</p>
                    </div>
                </div>
                <ul>
                    <li><img src={dashboard} /><Link  className='side-link'>Book Now</Link></li>
                    <li><img src={reports} /><Link  className='side-link'>My Bookings</Link></li>
                    <li><img src={messages} /><Link to="/Contact" className='side-link'>Contact Us</Link></li>
                    <li><img src={projects} /><Link to="/About" className='side-link'>About Us</Link></li>
                    <li><img src={members} /><Link  className='side-link'>My Profile</Link></li>
                    <li><img src={setting} /><Link to="/Setting" className='side-link'>Settings</Link></li>
                </ul>
                <ul>
                    <li><img src={logout} /><Link className='log-out'>Log Out</Link></li>
                </ul>
            </div>

            {/* Top Nav */}
            <div className="top-nav">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <i className="fa fa-search"><AiOutlineSearch /></i>
              </div>
              <div className="top-nav-right">
                <span className='notification'><BsBell /></span>
                <div className="profile">
                  <img src={userimg} className='profile-img' />
                </div>
            </div>
          </div>
      </div>

      {/* App Content */}
      <div className="app-content">
        
      </div>
    </>
  )
}

export default dashboard2