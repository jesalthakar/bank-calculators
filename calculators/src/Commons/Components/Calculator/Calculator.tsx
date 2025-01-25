import React from "react";
import "./Calculator.scss";
import "../../Components/Chart/Chart.scss";
import "../../../Commons/Components/Slider/Slider.scss";

import Slider from "../Slider/Slider";
import Chart from "../Chart/Chart";
import { localizedCurrency } from "../../services/helper";
import { CalculatorComponentTypes } from "./types";




const Calculator: React.FC<CalculatorComponentTypes> = ({
  sliderValue,
  sliderWidth,
  handleInput,
  error,
  handleSlider,
  data,
  activeTab,
  setActiveTab,
  result,
  isLoading
}) => {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="left-section">
        <div className="tabs-container">
          {data.map((tabText, index) => (
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
          {data[activeTab].rangeinfo.map((sliderInfo, index) => (
            <Slider
              key={index}
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

      {<div className="right-section">
        <div className="sticky-section-mob">
          <div className="primary-container">
            <div className="primary-info-container">
              <div className="primary-info-title">
                Equated Monthly Instalments (EMI)
              </div>
              <div className="primary-amount">
                {localizedCurrency(isNaN(result[2]) ? 0 : result[2])}
              </div>
            </div>
            <button className="btn primary-btn">Apply Now</button>
          </div>
        </div>

        <div className="chart-container">
          <Chart amount={result[0]} growth={result[1]} />
          <div className="chart-data-container">
            <div className="chart-data-div">
              <div className="chart-color chart-color-1"></div>
              <div className="chart-detail invested">
                <h5>Invested Amount</h5>
                <div className="invest-value-wrapper">
                  <p>{localizedCurrency(isNaN(result[0]) ? 0 : result[0])}</p>
                </div>
              </div>
            </div>
            <div className="chart-data-div">
              <div className="chart-color chart-color-2"></div>
              <div className="chart-detail invested">
                <h5>Estimated Returns</h5>
                <div className="invest-value-wrapper">
                  <p>{localizedCurrency(isNaN(result[1]) ? 0 : result[1])}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Calculator;
