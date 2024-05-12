import React, { useState } from "react";
import { PPFData } from "./constants/ppfconstant";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import useSlider from "../../Hooks/useSlider";
import { getPPFCalculation } from "./services/ppfservice";

const PPFCalc = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(PPFData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getPPFCalculation(sliderValue);

  return (
    <>
      <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={PPFData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
      />
    </>
  );
};

export default PPFCalc;
