import React, { useState } from "react";
import Popup from "../Popup/Popup";
import "../Overlay/Overlay.scss";
import Overlay from "../Overlay/Overlay";
import {
  signUpPopupData,
  loginPopupData,
} from "../../../Commons/Components/Popup/constants/constant";

const Header = () => {
  const [isSignupPopup, setIsSignupPopup] = useState(false);
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const handleSignUp = () => {
    setIsSignupPopup(true);
  };

  const handleLogIn = () => {
    setIsLoginPopup(true);
  };

  const handleClosePopup = () => {
    setIsSignupPopup(false);
    setIsLoginPopup(false);
  };

  return (
    <>
      <div className="header-container">
        <div className="img-container">
          <img src="a.jpg" />
        </div>
        <div className="auth-container">
          <span className="signin" onClick={handleSignUp}>
            SignUp
          </span>
          <span className="login" onClick={handleLogIn}>
            Login
          </span>
        </div>
      </div>
      {(isSignupPopup || isLoginPopup) && <Overlay />}
      {isSignupPopup && (
        <Popup
          popupData={signUpPopupData}
          popupState={isClose}
          onClose={handleClosePopup}
        />
      )}
      {isLoginPopup && (
        <Popup
          popupData={loginPopupData}
          popupState={isClose}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default Header;
