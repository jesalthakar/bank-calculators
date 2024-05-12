export const PersonalLoanData = {
    "calType": [{
        "calText": "Personal Loan",
        "rangeinfo": [{
            "sliderType": "amt",
            "rangetitle": "Loan Amount",
            "rangedesc": "Minimum 10,000",
            "min": 10000,
            "max": 1000000,
            "step": 10000,
            "defaultvalue": 1000000,
            "isDisabled": false

        },
        {
            "sliderType": "roi",
            "rangedesc": "Minimum 8.7%",
            "rangetitle": "Interest Rate",
            "min": 1,
            "max": 100,
            "step": 0.1,
            "defaultvalue": 8.7,
            "isDisabled": false


        },
        {
            "sliderType": "period",
            "rangetitle": "Tenure",
            "rangedesc": "Till ",
            "min": 1,
            "max": 250,
            "step": 1,
            "defaultvalue": 25,
            "isDisabled": false


        }]

    }
    ],

}


