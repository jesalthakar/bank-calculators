import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useSlider from "../../Hooks/useSlider";
import Calculator from "../../Commons/Components/Calculator/Calculator";
//import { HomeLoanData } from "./constants";
//import { PersonalLoanData } from "../PersonalLoanCalculator/constants";
import { getHomeLoanCalculation } from "./services/homeloanservice";
import { fetchCalculatorData } from "../../Commons/services/fetchCalculatorData";

const HomeLoanCalc = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [calculatorData, setCalculatorData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const { calculatorType } = useParams<{ calculatorType: string }>();
  // const isHomeLoan = location.pathname === "/homeloan-calculator";
  const calculatorType = location.pathname.split("/")[1];
  console.log(calculatorType, "jesal")

  //const loanData = isHomeLoan ? HomeLoanData : PersonalLoanData;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCalculatorData(calculatorType);
      try {
        if (data) {
          setCalculatorData(data)
          setIsLoading(true);
        }

      } catch (error) {
        console.error(error)

      }

    }
    getData();
  }, [calculatorType])




  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(calculatorData ?? {}, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getHomeLoanCalculation(sliderValue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(result);
  return (
    <>
      <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={calculatorData?.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
        isLoading={isLoading}
      />
    </>
  );
};

export default HomeLoanCalc;
