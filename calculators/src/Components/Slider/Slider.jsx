import React, { useEffect, useRef, useState } from "react";
import { SipData } from "../Sipcalculator/constants";
import useSlider from "../../Hooks/useSlider";
import { localizedCurrency } from "../../Commons/services/helper";

const Slider = ({
  sliderInfo,
  sliderValue,
  sliderWidth,
  handleInput,
  handleSlider,
  error,
}) => {
  //console.log(sliderInfo);
  /*  const { sliderValue, sliderWidth, handleSlider, handleInput, error } =
    useSlider(SipData); */
  console.log(sliderValue);
  /* error[sliderinfo.sliderType] ? "error" : "" */
  const { rangetitle, rangedesc, sliderType, min, max, step } = sliderInfo;
  return (
    <div className="range-slider-container">
      <>
        <div className="range-info-div">
          <div className="left-info-div">
            <div className="range-title">{rangetitle}</div>
            <div className="range-desc">{rangedesc}</div>
          </div>
          <div className="right-info-div">
            <div
              className={`range-input-div ${error[sliderType] ? "error" : ""}`}
            >
              <input
                type="text"
                value={
                  sliderType === "amt"
                    ? localizedCurrency(
                        isNaN(sliderValue[sliderType])
                          ? 0
                          : sliderValue[sliderType]
                      )
                    : sliderValue[sliderType]
                }
                min={min}
                max={max}
                step={step}
                onChange={(e) => handleInput(e, sliderType)}
              ></input>
            </div>
          </div>
        </div>
        <div className="filler-container">
          <div className="filler-div"></div>
          <span
            className="filler"
            style={{ width: sliderWidth[sliderType] + "%" }}
          ></span>
          <input
            type="range"
            className="range-slider-input"
            min={min}
            max={max}
            step={step}
            value={sliderValue[sliderType]}
            onChange={(e) => handleSlider(e, sliderType)}
          ></input>
        </div>
      </>
    </div>
  );
};

export default Slider;
