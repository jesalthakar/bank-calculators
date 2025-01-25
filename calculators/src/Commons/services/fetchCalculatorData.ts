import callApi from "./api";
const baseurl = process.env.REACT_APP_API_BASE_URL;


export const fetchCalculatorData = async (calculatorType: string | undefined) => {
    try {

        const response = await callApi({
            method: "GET",
            url: `${baseurl}/getcalculatordata?calculator=${calculatorType}`,
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        })
        return response?.data;

    } catch (error) {
        console.error(error)
    }
}