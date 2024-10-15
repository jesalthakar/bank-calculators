export interface sipdataType {
    calType: calculatorType[]
}

export interface calculatorType {
    calText: string;
    rangeinfo: rangeInfoType[];
}

export interface rangeInfoType {
    sliderType: SliderType ;
    rangetitle: string;
    rangedesc: string;
    min: number;
    max: number;
    step: number;
    defaultvalue: number;
    prefix?: string;
    suffix?: string;
    isDisabled?:boolean
}

type SliderType = "amt" | "roi" | "period" | "age" | "eepfr" | "salaryincr";

