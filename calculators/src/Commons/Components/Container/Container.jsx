import React from "react";
import "./Container.scss";

import Sipcalcroute from "../../../Components/Sipcalculator/Routes/Sipcalcroute";
import HomeLoancalcroute from "../../../Components/HomeLoanCalculator/Routes/HomeLoancalcroute";
import PersonalLoancalcroute from "../../../Components/PersonalLoanCalculator/Routes/PersonalLoancalcroute";

const Container = () => {
  return (
    <>
      <div className="calculator-container">
        <Sipcalcroute />
        <HomeLoancalcroute />
        <PersonalLoancalcroute />
      </div>
    </>
  );
};

export default Container;
