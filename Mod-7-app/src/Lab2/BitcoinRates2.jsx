import { useState } from "react";
import { useData } from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates2() {
  const [currency, setCurrency] = useState(currencies[0]);

  const data = useData(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
      `${currency}`
  );

  const rates = data ? data.bitcoin[currency.toLowerCase()] : "not found";

  const options = currencies.map((curr) => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates2 componentBox">
      <h3>Bitcoin Exchange Rate with useData</h3>
      <label>
        Choose currecy: {"  "}
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

export default BitcoinRates2;

// ● Extension: Implement useReducer to handle the internal
// state management of your custom hook
