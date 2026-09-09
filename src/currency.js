```js
export const rates = {
  EGP: 1,
  USD: 0.02,
  EUR: 0.018,
  GBP: 0.015,
};

export const symbols = {
  EGP: "ج.م",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export function formatPrice(price, currency) {
  const converted = price * rates[currency];

  return (
    symbols[currency] +
    Math.round(converted).toLocaleString()
  );
}
```
