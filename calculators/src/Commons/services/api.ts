import axios from 'axios';

interface callApiPropsType{
    method:string;
    url:string;
    data?:any;
    headers?:Record<string, string>;
    withCredentials?:boolean;
}

const callApi:(params:callApiPropsType)=>Promise<any> = async ({ method, url, data, headers, withCredentials }) => {
    console.log(data);
    try {
        const response = await axios({ method, url, data, headers, withCredentials });
        return response?.data

    } catch (error:unknown) {
        if (error instanceof Error) {
            return error?.message;

        }

    }
}

export default callApi;