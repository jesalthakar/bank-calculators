export const getHomeLoanCalculation = (sliderValues) => {

    let { amt, roi, period } = sliderValues;
    roi = roi / (12 * 100);
    let numerator = (amt * roi) * (Math.pow((1 + roi), period * 12));
    let denominator = (Math.pow((1 + roi), period * 12)) - 1;
    let emi = numerator / denominator;
    let totalInterest = Math.round(emi * period * 12) - amt;
    console.log(amt, totalInterest, emi);
    return [amt, totalInterest, emi]

}