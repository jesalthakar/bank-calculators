import React, { useContext, useState } from "react";
import "../CustomForm/CustomForm.scss";
import callApi from "../../services/api.js";
import { ApiContext } from "../../../Context/ApiContext";
const baseurl = process.env.REACT_APP_API_BASE_URL;
console.log(baseurl);

const CustomForm = ({ popupData, isSignupPopup, setIsSignupPopup, isLoginPopup, setIsLoginPopup }) => {
  const { apiData, setApiData, setUserLoggedIn } = useContext(ApiContext);
  console.log(isSignupPopup);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState(isSignupPopup ?
    { username: "", password: "", confirmpassword: "" } :
    { username: "", password: "", }
  );
  const errors = { ...error };

  const inputHandler = (e) => {
    console.log(e.target.name, { [e.target.name]: e.target.value });
    console.log(inputValue);
    console.log(error);

    const field = popupData.input.find((data) => data.name === e.target.name);
    console.log(errors[e.target.name]);
    const patterns = {
      alphanumeric: /^[a-zA-Z0-9]+$/,
      password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/,
    };

    const inputValidator = (name, value) => {
      switch (name) {
        case "username":
          if (!value) {
            errors[name] = field.validate.required;
          } else if (isSignupPopup && value.length < 3) {
            errors[name] = field.validate.minlength;
          } else if (isSignupPopup && !patterns.alphanumeric.test(value)) {
            errors[name] = field.validate.pattern;
          } else {
            delete errors[name];
          }
          break;
        case "password":
          if (!value) {
            errors[name] = field.validate.required;
          } else if (isSignupPopup && value.length < 6) {
            errors[name] = field.validate.minlength;
          } else if (isSignupPopup && !patterns.password.test(value)) {
            errors[name] = field.validate.pattern;
          } else {
            delete errors[name];
          }
          break;

        case "confirmpassword":
          if (inputValue.password !== e.target.value) {
            errors[name] = "password does not match";
          } else {
            delete errors[name];
          }
          break;
      }
      setError(errors);
    };
    inputValidator(field.name, e.target.value);

    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = inputValue;
    if (!isSignupPopup) {
      const response = await callApi({
        method: "POST",
        url: `${baseurl}/login`,
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        withCredentials: "true",
      })
      if (response?.success) {
        setIsLoginPopup(false);
        setUserLoggedIn(true);

      } else {
        setError({ ...error, password: response?.message })


      }
    } else {
      const response = await callApi({
        method: "POST",
        url: `${baseurl}/signup`,
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        withCredentials: "true",
      });
      if (response?.success) {
        setIsSignupPopup(false);
        setUserLoggedIn(true);
      } else {
        setError({ ...error, username: response?.message?.username });
      }
    }

  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        {popupData.input.map((eachInput) => {
          return (
            <>
              <div className="input-box">
                <input
                  className=""
                  type={`${eachInput.type}`}
                  name={`${eachInput.name}`}
                  value={inputValue[`${eachInput.name}`]}
                  onChange={inputHandler}
                ></input>
                <label
                  htmlFor={`${eachInput.label}`}
                  className={`${inputValue[`${eachInput.name}`] ? "animate" : ""
                    }`}
                >
                  {eachInput.label}
                </label>
                {
                  <div className="error-message">
                    {error[`${eachInput.name}`]}
                  </div>
                }
              </div>
            </>
          );
        })}
        <div className="btn-wrapper">
          <button
            disabled={Object.keys(errors).length ? "disabled" : ""}
            type="submit"
            className={`register-btn ${Object.keys(errors).length ? "disabled" : ""
              }`}
          >
            {popupData.buttontext}
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomForm;
