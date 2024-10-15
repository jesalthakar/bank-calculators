export const getPPFCalculation = (sliderValue:{[key:string]:number}):number[] => {

    let { amt, roi, period } = sliderValue;
    roi = roi / 100;
    console.log(amt, roi, period);
    console.log(roi);
    let futureValueFactor = Math.pow(1 + roi, period);
    console.log(futureValueFactor);
    let presentValueFactor = (futureValueFactor - 1) / roi;
    console.log(presentValueFactor);
    let result = Math.round(amt * presentValueFactor);
    console.log(result);

    let totalInterest = result - (amt * period)

    console.log(amt * period, result, totalInterest);

    return [amt * period, result - (amt * period), result]

}