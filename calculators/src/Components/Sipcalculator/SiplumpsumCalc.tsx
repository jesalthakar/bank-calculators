import React, { useState } from "react";
import Calculator from "../../Commons/Components/Calculator/Calculator";
import useSlider from "../../Hooks/useSlider";
import { SipData } from "./constants";
import { getLumpsumCalculation } from "./lumpsumservice";
import { getSipCalculation } from "./sipservice";

const SiplumpsumCalc = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(SipData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const sipResult = activeTab
    ? getLumpsumCalculation(sliderValue)
    : getSipCalculation(sliderValue);
  console.log(sipResult);
  return (
    <>
      <Calculator
        sliderValue={sliderValue}
        sliderWidth={sliderWidth}
        handleInput={handleInput}
        error={error}
        handleSlider={handleSlider}
        data={SipData.calType}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        result={sipResult}
      />
    </>
  );
};

export default SiplumpsumCalc;
