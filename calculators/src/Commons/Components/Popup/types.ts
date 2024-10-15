export interface PopupDataPropType {
    title: string;
    input: inputType[];
    buttontext:string; 
}

export interface inputType {
    name: string;
    type: string;
    label: string;
    validate: validateType
}

export interface validateType {
    required?: string;
    minlength?: string;
    pattern?: string;

}

export interface popupPropType {
    popupData:PopupDataPropType;
    onClose: ()=>void
    isSignupPopup?:boolean;
    setIsSignupPopup?:React.Dispatch<React.SetStateAction<boolean>>;
    isLoginPopup?: boolean;
    setIsLoginPopup?:React.Dispatch<React.SetStateAction<boolean>>;
    popupState?:boolean
  }