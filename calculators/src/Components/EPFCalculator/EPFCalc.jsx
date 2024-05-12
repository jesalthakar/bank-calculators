import React, { useState } from "react";
import useSlider from "../../Hooks/useSlider";
import { getEPFCalculation } from "./services/epfservice";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import { EPFData } from "./constants/epfoconstant";

const EPFCalc = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(EPFData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const result = getEPFCalculation(sliderValue);

  return (
    <>
      <div>HI</div>
      {/* <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={EPFData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={result}
      /> */}
    </>
  );
};

export default EPFCalc;
