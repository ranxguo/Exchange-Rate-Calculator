const currencyElement_one = document.getElementById('currency-one');
const currencyElement_two = document.getElementById('currency-two');
const amountElement_one = document.getElementById('amount-one');
const amountElement_two = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchangerate abd update the DOM
function Calculator() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/927f6fb0e0e9a96be9d4b3b4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const rate = data.conversion_rates[currency_two];
      //console.log(rate);

      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

      amountElement_two.value = (amountElement_one.value * rate).toFixed(2);

    });
}

//Event listener
currencyElement_one.addEventListener('change', Calculator);
amountElement_one.addEventListener('input', Calculator);
currencyElement_two.addEventListener('change', Calculator);
amountElement_two.addEventListener('input', Calculator);
swap.addEventListener('click', () => {
  const temp = currencyElement_one.value;
  currencyElement_one.value = currencyElement_two.value;
  currencyElement_two.value = temp;
  Calculator();
})




Calculator();
