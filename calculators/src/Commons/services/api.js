import axios from 'axios';

const callApi = async ({ method, url, data, headers, withCredentials }) => {
    console.log(data);
    try {
        const response = await axios({ method, url, data, headers, withCredentials });
        return response?.data

    } catch (error) {
        return error?.response?.data;

    }
}

export default callApi;