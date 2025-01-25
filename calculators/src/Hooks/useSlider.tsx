import React, { useEffect, useState } from "react";
import { initialValuesTypes } from "./types";
import { sipdataType } from "../Components/Sipcalculator/types";

const useSlider = (SipData: sipdataType, activeTab: number) => {
  const [sliderValue, setSliderValue] = useState<{ [key: string]: number }>({});
  const [sliderWidth, setSliderWidth] = useState<{ [key: string]: number }>({});

  const [error, setError] = useState<{ [key: string]: boolean }>({});



  useEffect(() => {
    if (!SipData || !SipData.calType || !SipData.calType[activeTab]) {
      return;
    }
    console.log("Inside effect");
    const initialValues: initialValuesTypes = {};
    const initialWidths: initialValuesTypes = {};


    SipData.calType[activeTab].rangeinfo.forEach((eachSliderInfo) => {
      console.log(eachSliderInfo);
      console.log("max" + eachSliderInfo.maximum, "min" + eachSliderInfo.minimum);
      initialValues[eachSliderInfo.sliderType] = eachSliderInfo.defaultvalue;
      initialWidths[eachSliderInfo.sliderType] =
        ((Number(eachSliderInfo.defaultvalue) - Number(eachSliderInfo.minimum)) *
          100) /
        (Number(eachSliderInfo.maximum) - Number(eachSliderInfo.minimum));
    });

    setSliderValue(initialValues);
    setSliderWidth(initialWidths);
  }, [SipData, activeTab]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>, sliderType: string): void => {
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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, sliderType: string): void => {
    console.log(e.target);
    const { value, max, min, step } = e.target;
    const zero = 0;
    let inputValue = value.trim().replace(/^0+/, zero.toString());

    let parsedValue = inputValue ? parseFloat(inputValue) : 0;
    console.log(parsedValue);

    const clampedValue = Math.min(parsedValue, parseFloat(max));
    console.log(clampedValue);

    let adjustedRelativePosition =
      ((clampedValue - Number(min)) / (Number(max) - Number(min))) * 100;
    console.log(adjustedRelativePosition);

    let stepnos = (Number(max) - Number(min)) / Number(step);
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
      [sliderType]: clampedValue < Number(min),
    }));
  };

  return { sliderValue, sliderWidth, handleSlider, handleInput, error };
};

export default useSlider;
