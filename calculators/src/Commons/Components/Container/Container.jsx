import React from "react";
import "./Container.scss";

import Sipcalcroute from "../../../Components/Sipcalculator/Routes/Sipcalcroute";
import HomeLoancalcroute from "../../../Components/HomeLoanCalculator/Routes/HomeLoancalcroute";
import PersonalLoancalcroute from "../../../Components/PersonalLoanCalculator/Routes/PersonalLoancalcroute";
import PPFCalculatorRoute from "../../../Components/PPFCalculator/Routes/PPFCalculatorRoute";
import EpfoCalculatorRoute from "../../../Components/EPFCalculator/Routes/epfoCalculatorRoute";
import FDcalcroute from "../../../Components/FDCalculator/Routes/fdCalculatorRoutes";
import RDcalcroute from "../../../Components/RDCalculator/Routes/rdCalculatorRoutes";

const Container = () => {
  return (
    <>
      <div className="calculator-container">
        <Sipcalcroute />
        <HomeLoancalcroute />
        <PersonalLoancalcroute />
        <PPFCalculatorRoute />
        <EpfoCalculatorRoute />
        <FDcalcroute />
        <RDcalcroute />
      </div>
    </>
  );
};

export default Container;
