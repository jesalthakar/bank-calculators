export const PPFData = {
    "calType": [{
        "calText": "PPF",
        "rangeinfo": [{
            "sliderType": "amt",
            "rangetitle": "Loan Amount",
            "rangedesc": "Minimum 10,000",
            "min": 1000,
            "max": 1000000,
            "step": 10000,
            "defaultvalue": 1000,
            "isDisabled": false
        },
        {
            "sliderType": "period",
            "rangetitle": "Tenure",
            "rangedesc": "Till ",
            "min": 1,
            "max": 250,
            "step": 1,
            "defaultvalue": 15,
            "isDisabled": false


        },
        {
            "sliderType": "roi",
            "rangedesc": "Minimum 8.7%",
            "rangetitle": "Interest Rate",
            "min": 1,
            "max": 100,
            "step": 0.1,
            "defaultvalue": 7.1,
            "isDisabled": true
        },]

    }
    ],

}


