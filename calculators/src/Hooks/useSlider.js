import React, { useEffect, useState } from "react";

const useSlider = (SipData, activeTab) => {
  const [sliderValue, setSliderValue] = useState({});
  const [sliderWidth, setSliderWidth] = useState({});

  const [error, setError] = useState({});

  useEffect(() => {

    console.log("Inside effect");
    const initialValues = {};
    const initialWidths = {};

    SipData.calType[activeTab].rangeinfo.forEach((eachSliderInfo) => {
      console.log(eachSliderInfo);
      console.log("max" + eachSliderInfo.max, "min" + eachSliderInfo.min);
      initialValues[eachSliderInfo.sliderType] = eachSliderInfo.defaultvalue;
      initialWidths[eachSliderInfo.sliderType] =
        ((Number(eachSliderInfo.defaultvalue) - Number(eachSliderInfo.min)) *
          100) /
        (Number(eachSliderInfo.max) - Number(eachSliderInfo.min));
    });

    setSliderValue(initialValues);
    setSliderWidth(initialWidths);
  }, [activeTab]);

  const handleSlider = (e, sliderType) => {
    const { value, max, min } = e.target;
    console.log(sliderType);
    console.log(e.target.value);
    console.log(sliderType, { [sliderType]: value });

    setSliderValue((prevState) => ({
      ...prevState,
      [sliderType]: Number(value),
    }));

    setSliderWidth((prevState) => ({
      ...prevState,
      [sliderType]:
        ((Number(value) - Number(min)) * 100) / (Number(max) - Number(min)),
    }));

    setError((prevState) => ({
      ...prevState,
      [sliderType]: value < min,
    }));
  };

  const handleInput = (e, sliderType) => {
    console.log(e.target);
    const { value, max, min, step } = e.target;
    let inputValue = value.trim().replace(/^0+/, 0);

    let parsedValue = inputValue ? parseFloat(inputValue) : 0;
    console.log(parsedValue);

    const clampedValue = Math.min(parsedValue, parseFloat(max));
    console.log(clampedValue);

    let adjustedRelativePosition =
      ((clampedValue - Number(min)) / (Number(max) - Number(min))) * 100;
    console.log(adjustedRelativePosition);

    let stepnos = (max - min) / step;
    console.log(stepnos);
    let sliderWidth = 100 / stepnos;
    console.log(sliderWidth);
    let normalizePosition = adjustedRelativePosition / sliderWidth;
    console.log(normalizePosition);
    let roundOfValue = Math.round(normalizePosition);
    console.log(roundOfValue);
    let adjustedWidth = roundOfValue * sliderWidth;
    console.log(adjustedWidth);
    adjustedWidth = parsedValue <= Number(min) ? 0 : adjustedWidth;

    setSliderValue((prevState) => ({
      ...prevState,
      [sliderType]: clampedValue,
    }));

    setSliderWidth((prevState) => ({
      ...prevState,
      [sliderType]: adjustedWidth,
    }));

    setError((prevState) => ({
      ...prevState,
      [sliderType]: clampedValue < min,
    }));
  };

  return { sliderValue, sliderWidth, handleSlider, handleInput, error };
};

export default useSlider;
