export const localizedCurrency = (number) => {
    return parseInt(number).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    });
}


export const calculateFutureYears = (period) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date();
    const currentMonthNumber = currentDate.getMonth();
    const currentYearNumber = parseInt(currentDate.getUTCFullYear());
    const currentMonthName = monthNames[currentMonthNumber];
    const futureYear = currentYearNumber + parseInt(period);

    return " " + currentMonthName + " " + futureYear
}


export const readCookie = (key) => {
    const cookie = document.cookie;
    const cookies = cookie.split(";");
    let result = null;
    cookies.forEach((eachcookie) => {
        const [cookieKey, cookieValue] = eachcookie.split("=");
        if (cookieKey.trim() === key) {
            result = cookieValue;
        }
    })
    return result;
}

export const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`


}
