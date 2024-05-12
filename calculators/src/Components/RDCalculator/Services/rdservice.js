export const getRDCalculation = (sliderValues) => {

    let { amt, roi, period } = sliderValues;
    roi = roi / 12 / 100
    const result = amt * Math.pow(1 + roi / 12, 12 * period);
    console.log(result);
    const interest = result - amt
    return [result, interest, amt];





}