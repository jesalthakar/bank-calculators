import { sipdataType} from "../../../Components/Sipcalculator/types";

export interface CalculatorComponentTypes{
    sliderValue:{[key:string]:number};
    sliderWidth:{[key:string]:number};
    handleInput: (e: React.ChangeEvent<HTMLInputElement>, sliderType: string) => void;
    error:{[key:string]:boolean}
    handleSlider:(e:React.ChangeEvent<HTMLInputElement>,sliderType:string) =>void;
    data:sipdataType["calType"]
    activeTab:number;
    setActiveTab:React.Dispatch<React.SetStateAction<number>>;
    result:number[]
  }