document.getElementById("btn").addEventListener("click", myFunction);
const currencies={
    "EUR":1.95583,
    "USD":1.80471,
    "GBP":2.21617,
    "JPY":0.0137952,
    "RUB":0.0261935
}
function myFunction() {
    const bgn = document.getElementById("bgn").value
    const select = document.getElementById('currencies');
    const value = select.options[select.selectedIndex].value;
    console.log(currencies[value])
    document.getElementById("result").innerHTML = (parseFloat(bgn) / currencies[value]).toFixed(2);
    document.getElementById("curr").innerHTML = value
}
