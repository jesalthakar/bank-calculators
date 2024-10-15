import { sipdataType } from "../../Sipcalculator/types";

export const FDData:sipdataType = {
    "calType": [{
        "calText": "Fixed Deposit",
        "rangeinfo": [{
            "sliderType": "amt",
            "rangetitle": "Loan Amount",
            "rangedesc": "Minimum 10,000",
            "min": 1000,
            "max": 1000000,
            "step": 10000,
            "defaultvalue": 100000,
            "isDisabled": false

        },
        {
            "sliderType": "roi",
            "rangedesc": "Minimum 8.7%",
            "rangetitle": "Interest Rate",
            "min": 1,
            "max": 100,
            "step": 0.1,
            "defaultvalue": 6.5,
            "isDisabled": false


        },
        {
            "sliderType": "period",
            "rangetitle": "Tenure",
            "rangedesc": "Till ",
            "min": 1,
            "max": 250,
            "step": 1,
            "defaultvalue": 5,
            "isDisabled": false


        }]

    }
    ],

}


