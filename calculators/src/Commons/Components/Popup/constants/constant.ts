import { PopupDataPropType } from "../types"

export const signUpPopupData:PopupDataPropType = {
    "title": "Register",
    "input": [{
        "name": "username",
        "type": "text",
        "label": "username",
        "validate": {
            "required": "Username is required",
            "minlength": "Username must be greater than 3",
            "pattern": "USername should only contain alphanumeric"
        }
    },
    {
        "name": "password",
        "type": "password",
        "label": "password",
        "validate": {
            "required": "Paasword is required",
            "minlength": "Password must be greater than 6 characters",
            "pattern": "Password should contain alphabets and special characters"
        }

    }, {
        "name": "confirmpassword",
        "type": "password",
        "label": "Confirm Password",
        "validate": {
            "required": "",
            "minlength": "",
            "pattern": ""
        }

    }],
    "buttontext": "SignUp"
}


export const loginPopupData:PopupDataPropType = {
    "title": "Login",
    "input": [{
        "name": "username",
        "type": "text",
        "label": "username",
        "validate": {
            "required": "Username is required",
        }
    },
    {
        "name": "password",
        "type": "password",
        "label": "password",
        "validate": {
            "required": "Paasword is required",
        }
    }],
    "buttontext": "Login"
}