import React, { useEffect, useRef, useState } from "react";
import { SipData } from "../Sipcalculator/constants";
import useSlider from "../../Hooks/useSlider";
import { localizedCurrency } from "../../Commons/services/helper";
import { calculateFutureYears } from "../../Commons/services/helper";

const Slider = ({
  sliderInfo,
  sliderValue,
  sliderWidth,
  handleInput,
  handleSlider,
  error,
}) => {
  return (
    <>
      <div className="range-slider-container">
        <div className="range-info-div">
          <div className="left-info-div">
            <div className="range-title">{sliderInfo.rangetitle}</div>
            <div className="range-desc">
              {sliderInfo.sliderType === "period"
                ? sliderInfo.rangedesc +
                  calculateFutureYears(sliderValue[sliderInfo.sliderType])
                : sliderInfo.rangedesc}
            </div>
          </div>
          <div className="right-info-div">
            <div
              className={`range-input-div ${
                error[sliderInfo.sliderType] ? "error" : ""
              }`}
            >
              <input
                type="text"
                value={
                  sliderInfo.sliderType === "amt"
                    ? localizedCurrency(
                        isNaN(sliderValue[sliderInfo.sliderType])
                          ? 0
                          : sliderValue[sliderInfo.sliderType]
                      )
                    : sliderValue[sliderInfo.sliderType]
                }
                min={sliderInfo.min}
                max={sliderInfo.max}
                step={sliderInfo.step}
                onChange={(e) => handleInput(e, sliderInfo.sliderType)}
              ></input>
            </div>
          </div>
        </div>
        <div className="filler-container">
          <div className="filler-div"></div>
          <span
            className="filler"
            style={{ width: sliderWidth[sliderInfo.sliderType] + "%" }}
          ></span>
          <input
            type="range"
            className="range-slider-input"
            min={sliderInfo.min}
            max={sliderInfo.max}
            step={sliderInfo.step}
            value={sliderValue[sliderInfo.sliderType]}
            onChange={(e) => handleSlider(e, sliderInfo.sliderType)}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Slider;
