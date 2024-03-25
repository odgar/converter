// Name: Oscar Euceda
// Date: 3/19/24
// Period: 1

//variables
const in_amount = document.getElementById("amount");
const dd_from = document.getElementById("from");
const dd_to = document.getElementById("to");
const div_result = document.getElementById("result");

//exchange rates for each currency, look at id's in index
const exchangeRates ={
usd:{
    usd: 1,
    vb: 125,
    ye : 151.33,
    uk: .79,
    cd: 1.36,
},

vb:{
    vb: 1,
    usd: 0.008,
    ye: 0.00000019,
    uk: 0.000024,
    cd: 0.00012389,
},

ye:{
    ye: 1,
    usd: 0.0066,
    vb: 72.33665479,
    uk: 0.0052,
    cd: 0.0090,
},

uk:{
    uk: 1,
    vb: 158.22,
    usd: 1.26,
    ye: 191.10,
    cd: 1.72,
},

cd:{
    cd: 1,
    vb: 91.91,
    uk: 0.58,
    usd: 0.74,
    ye: 111.24,
},
}

// this function creates the conversion, look at each id and how it connects with the index
function convertCurrency() {
    let in_amount_value = document.getElementById("textbox1").value;
    let dd_from_value = document.getElementById("cs2").value;
    let dd_to_value = document.getElementById("cs3").value;
//concatenation, look at math and connections between strings / values
    let ConC = in_amount_value*exchangeRates[dd_from_value][dd_to_value];
//textbox2 is the output on UI, it now equals the result of concat above
    document.getElementById('textbox2').value = ConC;
}