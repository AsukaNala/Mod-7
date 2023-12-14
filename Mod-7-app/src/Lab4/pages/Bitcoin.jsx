import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function Bitcoin() {
  const [currency, setCurrency] = useState("");
  const [rates, setRates] = useState("");

  useEffect(() => {
    let ignore = false;
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
        `${currency}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) setRates(data.bitcoin[currency.toLowerCase()]);
      });

    return () => (ignore = true);
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="componentBox">
      <h3>Lab4 Bitcoin Exchange rate</h3>
      <label>
        Choose currency:
        <select
          name="currency"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {options}
        </select>
        <p>
          {" "}
          Bitcoin rates of {currency} : {rates}
        </p>
      </label>
    </div>
  );
}
