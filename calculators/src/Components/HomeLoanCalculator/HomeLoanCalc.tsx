import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useSlider from "../../Hooks/useSlider";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import { HomeLoanData } from "./constants";
import { PersonalLoanData } from "../PersonalLoanCalculator/constants";
import { getHomeLoanCalculation } from "./services/homeloanservice";

const HomeLoanCalc = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const isHomeLoan = location.pathname === "/homeLoan-calculator";

  const loanData = isHomeLoan ? HomeLoanData : PersonalLoanData;


  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(loanData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getHomeLoanCalculation(sliderValue);

  console.log(result);
  return (
    <>
      <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={loanData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
      />
    </>
  );
};

export default HomeLoanCalc;
