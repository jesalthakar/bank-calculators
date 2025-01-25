import { sipdataType } from "../../Sipcalculator/types"

export const RDData: sipdataType = {
    "calType": [{
        "calText": "Recurring Deposit",
        "rangeinfo": [{
            "sliderType": "amt",
            "title": "Loan Amount",
            "desc": "Minimum 10,000",
            "minimum": 1000,
            "maximum": 1000000,
            "step": 10000,
            "defaultvalue": 50000,
            "isDisabled": false

        },
        {
            "sliderType": "roi",
            "desc": "Minimum 8.7%",
            "title": "Interest Rate",
            "minimum": 1,
            "maximum": 100,
            "step": 0.1,
            "defaultvalue": 6.5,
            "isDisabled": false


        },
        {
            "sliderType": "period",
            "title": "Tenure",
            "desc": "Till ",
            "minimum": 1,
            "maximum": 250,
            "step": 1,
            "defaultvalue": 3,
            "isDisabled": false


        }]

    }
    ],

}


