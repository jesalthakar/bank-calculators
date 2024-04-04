export const SipData = {
    "caltype": "sip",
    "rangeinfo": [{
        "sliderType": "amt",
        "rangetitle": "Loan Amount",
        "rangedesc": "Minimum 10,000",
        "min": 100,
        "max": 100000,
        "step": 100,
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

    }
    ]
}
