import axios, { ResponseType } from 'axios';

interface callApiPropsType {
    method: string;
    url: string;
    data?: any;
    headers?: Record<string, string>;
    withCredentials?: boolean;
    responseType?: ResponseType
}

const callApi: (params: callApiPropsType) => Promise<any> = async ({ method, url, data, headers, withCredentials, responseType = "json" }) => {
    console.log(data);
    try {
        const response = await axios({ method, url, data, headers, withCredentials, responseType });
        return response

    } catch (error: unknown) {
        if (error instanceof Error) {
            return error?.message;

        }

    }
}

export default callApi;