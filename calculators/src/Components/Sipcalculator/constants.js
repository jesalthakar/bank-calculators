export const SipData = {
    "calType": [{
        "calText": "SIP",
        "rangeinfo": [{
            "sliderType": "amt",
            "rangetitle": "Loan Amount",
            "rangedesc": "Minimum 10,000",
            "min": 1000,
            "max": 100000,
            "step": 10000,
            "defaultvalue": 10000
        },
        {
            "sliderType": "roi",
            "rangedesc": "Minimum 8.7%",
            "rangetitle": "Interest Rate",
            "min": 1,
            "max": 100,
            "step": 0.1,
            "defaultvalue": 10

        },
        {
            "sliderType": "period",
            "rangetitle": "Tenure",
            "rangedesc": "Till ",
            "min": 1,
            "max": 250,
            "step": 1,
            "defaultvalue": 1

        }]

    },
    {
        "calText": "LUMPSUM",
        "rangeinfo": [{
            "sliderType": "amt",
            "rangetitle": "Loan Amount",
            "rangedesc": "Minimum 10,000",
            "min": 100,
            "max": 100000,
            "step": 100,
            "defaultvalue": 1000
        },
        {
            "sliderType": "roi",
            "rangedesc": "Minimum 8.7%",
            "rangetitle": "Interest Rate",
            "min": 1,
            "max": 100,
            "step": 0.1,
            "defaultvalue": 100

        },
        {
            "sliderType": "period",
            "rangetitle": "Tenure",
            "rangedesc": "Till ",
            "min": 1,
            "max": 250,
            "step": 1,
            "defaultvalue": 1

        }]
    }
    ],

}


