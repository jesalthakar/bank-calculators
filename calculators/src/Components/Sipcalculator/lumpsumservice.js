export const getLumpsumCalculation = (sliderValues) => {

    let { amt, roi, period } = sliderValues;
    roi = parseFloat((roi / 100).toFixed(3));
    console.log(roi);
    const futureValue = amt * (Math.pow(1 + roi, period));
    console.log(futureValue);
    return [amt, futureValue - amt, futureValue];
}