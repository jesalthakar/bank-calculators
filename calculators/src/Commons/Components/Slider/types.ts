import { rangeInfoType } from "../../../Components/Sipcalculator/types";


export interface sliderPropTypes {
    sliderInfo: rangeInfoType;
    sliderValue: { [key: string]: number };
    sliderWidth: { [key: string]: number };
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, sliderType: string) => void
    handleSlider: (e: React.ChangeEvent<HTMLInputElement>, sliderType: string) => void
    error: { [key: string]: boolean }
}