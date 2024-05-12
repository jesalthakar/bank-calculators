import React, { useState } from "react";

const AuthInput = ({ inputData }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="input-box">
        <input
          className=""
          type={`${inputData.type}`}
          name={`${inputData.name}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <label htmlFor="username" className={`${inputValue ? "animate" : ""}`}>
          {inputData.label}
        </label>
      </div>
    </>
  );
};

export default AuthInput;
