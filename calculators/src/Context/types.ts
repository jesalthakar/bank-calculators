
export interface ApiProviderPropsTypes {
    apiData: any;
    setApiData: React.Dispatch<React.SetStateAction<any>>
    userLoggedIn: boolean
    setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    isManager: boolean
    setIsManager: React.Dispatch<React.SetStateAction<boolean>>
}