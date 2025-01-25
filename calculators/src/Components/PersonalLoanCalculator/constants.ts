import { sipdataType } from "../Sipcalculator/types"

export const PersonalLoanData: sipdataType = {
    "calType": [{
        "calText": "Personal Loan",
        "rangeinfo": [{
            "sliderType": "amt",
            "title": "Loan Amount",
            "desc": "Minimum 10,000",
            "minimum": 10000,
            "maximum": 1000000,
            "step": 10000,
            "defaultvalue": 1000000,
            "isDisabled": false

        },
        {
            "sliderType": "roi",
            "desc": "Minimum 8.7%",
            "title": "Interest Rate",
            "minimum": 1,
            "maximum": 100,
            "step": 0.1,
            "defaultvalue": 8.7,
            "isDisabled": false


        },
        {
            "sliderType": "period",
            "title": "Tenure",
            "desc": "Till ",
            "minimum": 1,
            "maximum": 250,
            "step": 1,
            "defaultvalue": 25,
            "isDisabled": false


        }]

    }
    ],

}


