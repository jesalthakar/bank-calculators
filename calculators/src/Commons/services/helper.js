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
