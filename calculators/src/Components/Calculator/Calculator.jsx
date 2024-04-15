import React, { useState } from "react";
import "../Chart/Chart.scss";
import "../Slider/Slider.scss";

import { SipData } from "../Sipcalculator/constants";
import Slider from "../Slider/Slider";
import Chart from "../Chart/Chart";
import useSlider from "../../Hooks/useSlider";
import { getSipCalculation } from "../Sipcalculator/sipservice";
import { localizedCurrency } from "../../Commons/services/helper";

const Calculator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { sliderValue, sliderWidth, handleInput, handleSlider, error } =
    useSlider(SipData, activeTab);

  console.log(sliderValue, sliderWidth, handleInput);

  const sipResult = getSipCalculation(sliderValue);
  console.log(sipResult);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="left-section">
        <div className="tabs-container">
          {SipData.calType.map((tabText, index) => (
            <div
              key={index}
              className={`tabs ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tabText.calText}
            </div>
          ))}
        </div>
        <div className="calculator-inputs-container">
          {SipData.calType[activeTab].rangeinfo.map((sliderInfo) => (
            <Slider
              sliderInfo={sliderInfo}
              sliderValue={sliderValue}
              sliderWidth={sliderWidth}
              handleInput={handleInput}
              handleSlider={handleSlider}
              error={error}
            />
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="primary-container">
          <div className="primary-info-container">
            <div className="primary-info-title">
              Equated Monthly Instalments (EMI)
            </div>
            <div className="primary-amount">
              {localizedCurrency(isNaN(sipResult[2]) ? 0 : sipResult[2])}
            </div>
          </div>
          <button className="btn primary-btn">Apply Now</button>
        </div>
        <div className="chart-container">
          <Chart amount={sipResult[0]} growth={sipResult[1]} />
          <div className="chart-data-container">
            <div className="chart-data-div">
              <div className="chart-color chart-color-1"></div>
              <div className="chart-detail invested">
                <h5>Invested Amount</h5>
                <div className="invest-value-wrapper">
                  <p>
                    {localizedCurrency(isNaN(sipResult[0]) ? 0 : sipResult[0])}
                  </p>
                </div>
              </div>
            </div>
            <div className="chart-data-div">
              <div className="chart-color chart-color-2"></div>
              <div className="chart-detail invested">
                <h5>Estimated Returns</h5>
                <div className="invest-value-wrapper">
                  <p>
                    {localizedCurrency(isNaN(sipResult[1]) ? 0 : sipResult[1])}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
