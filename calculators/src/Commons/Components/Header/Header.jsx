import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import "../Overlay/Overlay.scss";
import Overlay from "../Overlay/Overlay";
import {
  signUpPopupData,
  loginPopupData,
} from "../../../Commons/Components/Popup/constants/constant";
import { useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";
import { deleteCookie, readCookie } from "../../services/helper";
import axios from "axios";
import callApi from "../../services/api";

const Header = () => {
  const { setUserLoggedIn, userLoggedIn } = useContext(ApiContext);
  const [isSignupPopup, setIsSignupPopup] = useState(false);
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCookie = readCookie("jwt");
    console.log(getCookie);

    authValidate(getCookie);
  }, []);

  const authValidate = async (token) => {
    const data = { token };
    const response = await callApi({
      method: "POST",
      url: `${baseurl}/validate`,
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      withCredentials: "true"
    });
    if (response?.message === "Valid Token") {
      setUserLoggedIn(true)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      setUserLoggedIn(false); // Handle invalid token case
    }

  }


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

  const handleLogOut = async () => {

    const response = await callApi({
      method: "GET",
      url: `${baseurl}/logout`,
      headers: { "Content-Type": "application/json" },
      withCredentials: "true"
    })
    if (response?.success) {
      deleteCookie("jwt");
      setUserLoggedIn(false);
    }


  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="header-container">
        <div className="img-container">
          <img src="a.jpg" />
        </div>
        <div className="auth-container">
          {!userLoggedIn ? (
            <>
              <span className="signin" onClick={handleSignUp}>
                SignUp
              </span>
              <span className="login" onClick={handleLogIn}>
                Login
              </span>
            </>) :
            (<span className="login`" onClick={handleLogOut}>Logged In</span>)}
        </div>
      </div>
      {(isSignupPopup || isLoginPopup) && <Overlay />}
      {isSignupPopup && (
        <Popup
          isSignupPopup={isSignupPopup}
          setIsSignupPopup={setIsSignupPopup}
          popupData={signUpPopupData}
          popupState={isClose}
          onClose={handleClosePopup}
        />
      )}
      {isLoginPopup && (
        <Popup
          isLoginPopup={isLoginPopup}
          setIsLoginPopup={setIsLoginPopup}
          popupData={loginPopupData}
          popupState={isClose}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default Header;
