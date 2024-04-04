

export const getSipCalculation = (sliderValues) => {
    //fv = p*((((1+r)^n)-1)/r)
    console.log(sliderValues);
    console.log("Hello world");


    let { amt, roi, period } = sliderValues;
    roi = parseFloat((roi / 100 / 12).toFixed(3));
    console.log(roi);
    const futureValue = parseInt(amt * ((Math.pow(1 + roi, period) - 1) / roi) * (1 + roi));
    console.log(futureValue);
    return [amt * period, futureValue - (amt * period), futureValue]

}
