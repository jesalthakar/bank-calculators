import React, { useEffect, useRef, useState } from "react";

import { calculateFutureYears } from "../../services/helper";
import { sliderPropTypes } from "./types";

const Slider: React.FC<sliderPropTypes> = ({
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
            <div className="range-title">{sliderInfo.title}</div>
            <div className="range-desc">
              {sliderInfo.sliderType === "period"
                ? sliderInfo.desc +
                calculateFutureYears(sliderValue[sliderInfo.sliderType])
                : sliderInfo.desc}
            </div>
          </div>
          <div className="right-info-div">
            <div
              className={`range-input-div ${error[sliderInfo.sliderType] ? "error" : ""
                }`}
            >
              <div className="input-container">
                <span className="input-prefix">{sliderInfo.prefix}</span>
                <input
                  type="text"
                  value={sliderValue[sliderInfo.sliderType]}
                  min={sliderInfo.minimum}
                  max={sliderInfo.maximum}
                  step={sliderInfo.step}
                  disabled={sliderInfo.isDisabled}
                  pattern="^\+?\d*\.?\d+$"
                  onChange={(e) => handleInput(e, sliderInfo.sliderType)}
                ></input>

                <span className="input-suffix">{sliderInfo.suffix}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`filler-container ${sliderInfo.isDisabled ? "dsp-none" : ""
            }`}
        >
          <div className="filler-div"></div>
          <span
            className="filler"
            style={{ width: sliderWidth[sliderInfo.sliderType] + "%" }}
          ></span>
          <input
            type="range"
            className="range-slider-input"
            min={sliderInfo.minimum}
            max={sliderInfo.maximum}
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
