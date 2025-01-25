import React, { useState } from "react";
import useSlider from "../../Hooks/useSlider";
import { getFDCalculation } from "./Services/fdservice";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import { FDData } from "./Constants/constants";

const FDCalc = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(FDData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getFDCalculation(sliderValue);

  console.log(result);
  return (
    <>
      {/* <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={FDData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
      /> */}
    </>
  );
};

export default FDCalc;
