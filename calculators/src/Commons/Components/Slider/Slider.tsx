import React, { useEffect, useRef, useState } from "react";

import "../../Components/Shimmers/Shimmertext/ShimmerText.scss";
import "./Slider.scss"

import { calculateFutureYears } from "../../services/helper";
import { sliderPropTypes } from "./types";
import { ShimmerText } from "../Shimmers/Shimmertext/ShimmerText";
import { ShimmerRectangle } from "../Shimmers/Shimmerrectangle/ShimmerRectangle";

const Slider: React.FC<sliderPropTypes> = ({
  sliderInfo,
  sliderValue,
  sliderWidth,
  handleInput,
  handleSlider,
  error,
  isLoading
}) => {
  return (
    <>
      <div className="range-slider-container">
        <div className="range-info-div">
          <div className="left-info-div">
            {!isLoading ? <div className="range-title">{sliderInfo.title}</div> : <ShimmerText size={"md"} />}
            {!isLoading ? <div className="range-desc">
              {sliderInfo.sliderType === "period"
                ? sliderInfo.desc +
                calculateFutureYears(sliderValue[sliderInfo.sliderType])
                : sliderInfo.desc}
            </div> : <ShimmerText size={"sm"} />}


          </div>
          {!isLoading ? <div className="right-info-div">
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
          </div> : <ShimmerRectangle shimmertype={"md"} count={1} />}
        </div>
        <div className={`filler-container ${sliderInfo.isDisabled ? "dsp-none" : ""}`}>

          {!isLoading ?
            <>
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
            </>
            : <ShimmerText size={"lg"} />}
        </div>

      </div >
    </>
  );
};

export default Slider;
