import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../../assets/Icons/search.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img src={logo} className="header__logo" />
          <div>
            <input
              type="text"
              placeholder="Search"
              className="header__search"
            ></input>
            <img src={profilePic} className="header__profile-image" />
          </div>
          <button>UPLOAD</button>
        </div>
      </header>
    </>
  );
}

export default Header;
