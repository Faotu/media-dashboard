import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Faotuadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/C4D03AQGu6pX_-t6uiA/profile-displayphoto-shrink_200_200/0/1662543085930?e=1700092800&v=beta&t=-FNheLEy2B3QCEHLfxQjSNoLQ8VFmgoD6_oariuzsWc" alt="" />
          <span>Happy</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
