import './dashboard.css'

function dashboard() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="brand">
          <span className="ti-unlink"></span>
          <span>Dashboard</span>
        </h3>
        <span className="t-menu-alt"></span>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="#">
              <span className="ti-home"></span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="ti-face-smile"></span>
              <span>Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="ti-calendar"></span>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="ti-agenda"></span>
              <span>Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="ti-folder"></span>
              <span>Projects</span>
            </a>
          </li>
          <li>
            <li>
            <a href="#">
              <span className="ti-book"></span>
              <span>Contacts</span>
            </a>
          </li>
            <a href="#">
              <span className="ti-settings"></span>
              <span>Settings</span>
            </a>
          </li>
          </ul>
      </div>
    </div>

    <div className="main-content">
      <header>
        <div className='search-wrapper'>
          <span className="ti-search"></span>
          <input type="search" placeholder="Search" />
        </div>
        <div className="social-icons">
          <span className="ti-bell"></span>
          <span className="ti-comment"></span>
          <div></div>
        </div>
      </header>

      <main>
        <h2 className="dash-title">Overview</h2>
        <div className="dash-cards">
          <div className="card-single">
            <div className="card-body">
              <span className="ti-briefcase"></span>
              <div>
                <h5>Account Balance</h5>
                <h4>$30,659.45</h4>
              </div>
            </div>
            <div className="card-footer">
              <a href="#">View all</a>
              </div>
          </div>

          <div className="card-single">
            <div className="card-body">
              <span className="ti-reload"></span>
              <div>
                <h5>Pending</h5>
                <h4>$19,500.45</h4>
              </div>
            </div>
            <div className="card-footer">
              <a href="#">View all</a>
              </div>
          </div>

          <div className="card-single">
            <div className="card-body">
              <span className="ti-checkbox"></span>
              <div>
                <h5>Processed</h5>
                <h4>$20,659.45</h4>
              </div>
            </div>
            <div className="card-footer">
              <a href="#">View all</a>
              </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default dashboard