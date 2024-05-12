import React from "react";
import { useState } from "react";

import AuthInput from "../AuthInput/AuthInput";

const Popup = ({ popupData, onClose }, isClose) => {
  console.log(popupData);

  return (
    <>
      <div className={`popup-container ${isClose ? "" : "dsp-none"}`}>
        <div className="cross-icon" onClick={onClose}>
          X
        </div>
        <div className="popup-content">
          <form>
            <>
              <div className="popup-title">{popupData.title}</div>
              {popupData.input.map((eachInput) => {
                return (
                  <>
                    <AuthInput inputData={eachInput} />
                  </>
                );
              })}
            </>
            <div className="btn-wrapper">
              <button className="register-btn">{popupData.buttontext}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
