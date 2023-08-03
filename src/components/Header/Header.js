import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img src={logo} className="header__logo" />
          <div className="header__search-profile-container">
            <div className="header__input-container">
              <input
                type="text"
                placeholder="Search"
                className="header__search"
              ></input>
              <img className="header__search-icon" src={searchIcon} />
            </div>
            <Avatar src={profilePic} className="avatar avatar--mobile" />
          </div>
          <Button text="UPLOAD" img={uploadIcon} />
          <Avatar src={profilePic} className="avatar avatar--tablet-desktop" />
        </div>
      </header>
    </>
  );
}

export default Header;
