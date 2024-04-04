export const localizedCurrency = (number) => {
    return parseInt(number).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    });
}

