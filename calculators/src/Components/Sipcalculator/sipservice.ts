

export const getSipCalculation = (sliderValues: { [key: string]: number }): number[] => {
    //fv = p*((((1+r)^n)-1)/r)
    console.log(sliderValues);


    let { Amount, roi, period } = sliderValues;
    roi = parseFloat((roi / 100 / 12).toFixed(3));
    console.log(roi);
    const futureValue = Amount * ((Math.pow(1 + roi, period) - 1) / roi) * (1 + roi);
    const integerValue = futureValue;
    console.log(integerValue);
    return [Amount * period, integerValue - (Amount * period), integerValue]

}
