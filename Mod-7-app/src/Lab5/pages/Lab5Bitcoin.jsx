import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function Lab5Bitcoin() {
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
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ maxWidth: 350 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Currency:
          </InputLabel>

          <Select
            name="currency"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {options}
          </Select>
          <p>
            {" "}
            Bitcoin rates of {currency} : {rates}
          </p>
        </FormControl>
      </Box>
    </>
  );
}
