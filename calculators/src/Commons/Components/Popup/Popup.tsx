import React, { ReactElement, ReactEventHandler, ReactHTML } from "react";
import { useState } from "react";
import CustomForm from "../CustomForm/CustomForm";
import { popupPropType } from "./types";




const Popup: React.FC<popupPropType> = (
  { popupData, onClose, isSignupPopup, setIsSignupPopup, isLoginPopup, setIsLoginPopup, isManager, setIsManager, isCreatingAdmin, setIsCreatingAdmin },
  popupState
) => {
  console.log(popupData, isSignupPopup);

  return (
    <>
      <div className={`popup-container ${popupState ? "" : "dsp-none"}`}>
        <div className="cross-icon" onClick={onClose}>
          X
        </div>
        <div className="popup-content">
          <div className="popup-title">{popupData.title}</div>
          <CustomForm
            popupData={popupData}
            isSignupPopup={isSignupPopup}
            popupState={popupState}
            onClose={onClose}
            setIsSignupPopup={setIsSignupPopup}
            isLoginPopup={isLoginPopup}
            setIsLoginPopup={setIsLoginPopup}
            isManager={isManager}
            setIsManager={setIsManager}
            isCreatingAdmin={isCreatingAdmin}
            setIsCreatingAdmin={setIsCreatingAdmin}
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
