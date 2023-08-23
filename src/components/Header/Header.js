import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";
import { BrowserRouter, Link, Router, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/upload");
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo-container">
            <img src={logo} className="header__logo" onClick={handleClick} />
          </div>
          <div className="header__right-side">
            <div className="header__search-profile-container">
              <div className="header__input-container">
                <input
                  type="text"
                  placeholder="Search"
                  className="header__search"
                ></input>
                <img className="header__search-icon" src={searchIcon} />
              </div>
              <div className="header__avatar-container">
                <Avatar src={profilePic} className="avatar avatar--mobile" />
              </div>
            </div>
            <div className="header__button-container">
              <Button text="UPLOAD" img={uploadIcon} onClick={handleClick} />
            </div>
            <div className="header__avatar-container">
              <Avatar
                src={profilePic}
                className="avatar avatar--tablet-desktop"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
