import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rates, setRates] = useState(0);

  useEffect(() => {
    let ignore = false;
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
        `${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if (!ignore) setRates(data.bitcoin[currency.toLowerCase()]); //to get access to the rate.[] lets access to properties dynamically(ie;when property is valiable)
      });
    return () => (ignore = true); // cleanup function
  }, [currency]);

  // get option(currency here) dynamically with map method
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {options}
        </select>
        <p>
          Bitcoin rates of {currency} : {rates}
        </p>
      </label>
    </div>
  );
}

export default BitcoinRates;
