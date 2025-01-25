import React, { useEffect, useState } from "react";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import useSlider from "../../Hooks/useSlider";
import { getLumpsumCalculation } from "./lumpsumservice";
import { getSipCalculation } from "./sipservice";
import { useLocation, useParams } from "react-router-dom";
import { fetchCalculatorData } from "../../Commons/services/fetchCalculatorData";



const SiplumpsumCalc = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [calculatorData, setCalculatorData] = useState<any>(null);
  //const { calculatorType } = useParams<{ calculatorType: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const calculatorType = location.pathname.split("/")[1];
  console.log(calculatorType, "jesal")



  useEffect(() => {
    const getData = async () => {
      const data = await fetchCalculatorData(calculatorType);
      try {
        if (data) {
          setCalculatorData(data)
          setIsLoading(false);
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

  const sipResult = activeTab
    ? getLumpsumCalculation(sliderValue)
    : getSipCalculation(sliderValue);
  console.log(sipResult);

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
        result={sipResult}
        isLoading={isLoading}
      />
    </>
  );
};

export default SiplumpsumCalc;
