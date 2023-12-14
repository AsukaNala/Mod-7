import { useState, useContext } from "react";
import { useData } from "../hooks/useData";
import { EmojiContext } from "./EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates3() {
  const [currency, setCurrency] = useState(currencies[0]);
  const data = useData(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
      `${currency}`
  );
  const { emoji } = useContext(EmojiContext);

  const rates = data ? data.bitcoin[currency.toLowerCase()] : "not found";

  const options = currencies.map((curr) => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="componentBox">
      <h3>Lab 3 Bitcoin Rate</h3>
      <label>
        <select
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {options}
        </select>
        <p>
          Bitcoin rates of {currency}: {rates} {emoji}
        </p>
      </label>
    </div>
  );
}

export default BitcoinRates3;
