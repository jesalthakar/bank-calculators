import React from "react";
import { useState } from "react";

import CustomForm from "../CustomForm/CustomForm.jsx";

const Popup = (
  { popupData, onClose, isSignupPopup, setIsSignupPopup, isLoginPopup, setIsLoginPopup },
  isClose
) => {
  console.log(popupData, isSignupPopup);

  return (
    <>
      <div className={`popup-container ${isClose ? "" : "dsp-none"}`}>
        <div className="cross-icon" onClick={onClose}>
          X
        </div>
        <div className="popup-content">
          <div className="popup-title">{popupData.title}</div>
          <CustomForm
            popupData={popupData}
            isSignupPopup={isSignupPopup}
            isClose={isClose}
            onClose={onClose}
            setIsSignupPopup={setIsSignupPopup}
            isLoginPopup={isLoginPopup}
            setIsLoginPopup={setIsLoginPopup}
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
