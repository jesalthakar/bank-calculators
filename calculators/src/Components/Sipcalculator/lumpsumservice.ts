

export const getLumpsumCalculation = (sliderValues: { [key: string]: number }): number[] => {

    let { Amount, roi, period } = sliderValues;
    roi = parseFloat((roi / 100).toFixed(3));
    console.log(roi);
    const futureValue = Math.round(Amount * (Math.pow(1 + roi, period)));
    console.log(futureValue);
    return [Amount, futureValue - Amount, futureValue];
}