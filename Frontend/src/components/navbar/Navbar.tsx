import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>TaskZen</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon-nav" />
        <img src="/app.svg" alt="" className="icon-nav" />
        <img src="/expand.svg" alt="" className="icon-nav" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <img src="/settings.svg" alt="" className="icon-nav" />
        <div className="user">
          <span>Shawn</span>
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
