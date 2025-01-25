import React, { useEffect, useState } from "react";
import Popup from "../Popup/Popup";
import "../Overlay/Overlay.scss";
import Overlay from "../Overlay/Overlay";
import {
  signUpPopupData,
  loginPopupData,
} from "../Popup/constants/constant";
import { useContext } from "react";
import { ApiContext } from "../../../Context/ApiContext";
//import { ApiProviderPropsTypes } from "../../../Context/types";

import { deleteCookie, readCookie } from "../../services/helper";
import callApi from "../../services/api";
import { useLocation } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useDispatch } from "react-redux";
import { INITIALS } from "../../../ActionTypes";
const baseurl = process.env.REACT_APP_API_BASE_URL;

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const context = useContext(ApiContext);
  const [isSignupPopup, setIsSignupPopup] = useState<boolean>(false);
  const [isLoginPopup, setIsLoginPopup] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCreatingAdmin, setIsCreatingAdmin] = useState(false);

  if (!context) {
    throw new Error('ApiContext must be used within ApiProvider');
  }
  const { setUserLoggedIn, userLoggedIn, isManager, setIsManager } = context;

  const createUserElement = location.pathname === "/manager";

  useEffect(() => {
    const getCookie = readCookie("jwt");
    console.log(getCookie);

    authValidate(getCookie);
  }, []);

  const authValidate = async (token: string | null) => {
    const data = { token };
    const response = await callApi({
      method: "POST",
      url: `${baseurl}/validate`,
      data: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      withCredentials: true
    });
    if (response?.data?.message === "Valid Token") {
      setUserLoggedIn(true)
      setIsLoading(false)
      dispatch({ type: INITIALS, payload: { initialName: response?.data?.initials } })
    } else {
      setIsLoading(false)
      setUserLoggedIn(false); // Handle invalid token case
    }

  }

  const handleSignUp = () => {
    setIsSignupPopup(true);
  };

  const handleCreateAdmin = () => {
    setIsCreatingAdmin(true);
    setIsSignupPopup(true);
  }

  const handleLogIn = () => {
    setIsLoginPopup(true);
  };

  const handleClosePopup: () => void = () => {
    setIsSignupPopup(false);
    setIsLoginPopup(false);
  };

  const handleLogOut = async () => {

    const response = await callApi({
      method: "GET",
      url: `${baseurl}/logout`,
      headers: { "Content-Type": "application/json" },
      withCredentials: true
    })
    if (response?.data?.success) {
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
            (
              <>
                {createUserElement ? <span onClick={handleCreateAdmin}>Create admin</span> : ""}
                <Avatar />
              </>
            )}
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
          isManager={isManager}
          setIsManager={setIsManager}
          isCreatingAdmin={isCreatingAdmin}
          setIsCreatingAdmin={setIsCreatingAdmin}

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
