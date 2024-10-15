

export const getLumpsumCalculation = (sliderValues:{[key:string]:number}):number[] => {

    let { amt, roi, period } = sliderValues;
    roi = parseFloat((roi / 100).toFixed(3));
    console.log(roi);
    const futureValue = Math.round(amt * (Math.pow(1 + roi, period)));
    console.log(futureValue);
    return [amt, futureValue - amt, futureValue];
}