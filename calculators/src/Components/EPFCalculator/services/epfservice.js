export const getEPFCalculation = (sliderValue) => {
    //EPF maturity amount = (12 % × amt) × (1 + roi / n)nt,
    console.log(sliderValue);
    const retireAge = 58;
    let { amt, age, eepfr, salaryincr, roi } = sliderValue
    let noOfyears = (retireAge - age);
    let months = parseInt(noOfyears * 12);
    let epsCutOff = 1250
    roi = roi / 12 / 100;
    eepfr = eepfr / 100;
    var monthlyInterest = 0
    //30000*0.12
    let yearCount = 0;
    let nextYearCount = 0
    for (let i = 1; i <= months; i++) {
        if (yearCount !== nextYearCount) {
            yearCount++;
            amt += amt * (salaryincr / 100);
        }
        let monthlyEpf = amt * eepfr;
        console.log(monthlyEpf);
        let monthlyEpf2 = amt * 0.0367;
        let eps = amt * 0.0833;
        console.log(eps);
        if (eps > 1250) {
            let abovelimiteps = eps - epsCutOff;
            monthlyEpf2 = monthlyEpf2 + abovelimiteps;
        }
        console.log(monthlyEpf2, epsCutOff);
        let totalEpfContri = (monthlyEpf) + monthlyEpf2;
        console.log(totalEpfContri);
        monthlyInterest = monthlyInterest + (totalEpfContri * roi) * (i - 1);
        let totolCorpusEOM = (totalEpfContri + epsCutOff) * i;
        if ((i % 12) === 0) {
            nextYearCount = yearCount + 1;
            console.log("inside if");
            totolCorpusEOM += monthlyInterest;
        }

        console.log(totolCorpusEOM, monthlyInterest);
    }










}