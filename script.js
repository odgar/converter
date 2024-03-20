// Name: Oscar Euceda
// Date: 3/19/24
// Period: 1

//mr c example
// const in_amount = document.getElementById("amount");
// const dd_from = document.getElementById("from");
// const dd_to = document.GetElementById("to");
// const div_result = document.GetElementById("result");
//
//const ExchangeRates =
    // USD: {
        // EUR: 0.91,
        // USD: 1,
    // },
    // EUR: {
        // USD: 1.08,
        // EUR: 1.00,
    //}
    // function convertCurrency(){}

//exchnage rates

const exchange_rates = {
    'vb to xxx': {
        'vb' : 1.00,
        'usd': 0.00009186,
        's': 5,
        'uk': 0.00007245,
        'cd': 0.0001239,
    },
    'xxx to vb': {
        'vb' : 1.00,
        'usd': 0.00009186,
        's': 5,
        'uk': 0.00007245,
        'cd': 0.0001239,
    }
}

//event listeners
input_value_top.addEventListener('input', convert_top);
input_value_bottom.addEventListener('input', convert_bottom);
selected_currency_top.addEventListener('input', convert_top);
selected_currency_bottom.addEventListener('input', convert_bottom);

// swaps positions of the two currencies selected by user
function swap() {
    let input_value_top = document.getElementById('input_value_top').value;
    let selected_currency_top = document.getElementById('selected_value_top').value;
    let selected_currency_bottom = document.getElementById('selected_value_bottom').value;
    let placeholder_value = input_value_bottom*exchange_rates['xxx to vb'][selected_currency_bottom];
    let placeholder_value2 = placeholder_value*exchange_rates['vb to xxx'][selected_currency_top];
    let new_bottom_value = Math.round
}