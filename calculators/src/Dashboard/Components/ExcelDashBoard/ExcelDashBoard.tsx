import React, { useState } from 'react';
import callApi from '../../../Commons/services/api';

const ExcelDashBoard = () => {
    const [file, setFile] = useState<File | null>(null);
    const [inputFileName, setInputFileName] = useState<string | null>(null);
    const baseurl = process.env.REACT_APP_API_BASE_URL;
    const formData = new FormData();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.[0] ?? null)
    }

    const handlefileUpload = async () => {
        if (!file) return;
        formData.append("file", file);

        const response = await callApi({
            method: "POST",
            url: `${baseurl}/uploadExcel`,
            data: formData,
            withCredentials: true,
        })
    }



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value + ".xlsx")
        setInputFileName(e.target.value + ".xlsx");


    }

    const handleFileDownload = async () => {
        if (!inputFileName) {
            return "file not found";
        }
        //formData.append("fileName", inputFileName);
        const response = await callApi({
            method: "POST",
            url: `${baseurl}/downloadexcel`,
            data: { inputFileName },
            withCredentials: true,
            responseType: "blob"
        })
        console.log(response);
        const filename = response.headers["content-disposition"].split(";")[1].split("=")[1].trim();
        const url = window.URL.createObjectURL(new Blob([response]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }

    return (
        <>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handlefileUpload}>Update Excel</button>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handlefileUpload}>Upload Excel</button>
            <button onClick={handleFileDownload}>Download Excel</button>
        </>
    )
}

export default ExcelDashBoard