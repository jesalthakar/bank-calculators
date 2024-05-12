export const getFDCalculation = (sliderValues) => {

    let { amt, roi, period } = sliderValues;
    //roi = roi / (12 * 100);
    const maturityAmt = amt + (amt * (Math.pow(1 + roi / 100, period) - 1));
    console.log(maturityAmt);
    const interest = maturityAmt - amt

    return [maturityAmt, interest, amt];


}