import React, { useState } from "react";
import useSlider from "../../Hooks/useSlider";
import { getRDCalculation } from "./Services/rdservice";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import { RDData } from "./Constants/constants";

const RDCalc = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(RDData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getRDCalculation(sliderValue);

  console.log(result);
  return (
    <>
      <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={RDData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
      />
    </>
  );
};

export default RDCalc;
