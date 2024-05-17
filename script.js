document.getElementById("converter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    const apiKey = 'YOUR_API_KEY'; // Získaj svoj API kľúč z ExchangeRate-API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            document.getElementById("result").textContent = "Error fetching exchange rates.";
        });
});
