let prices = [100, 200, 300, 400, 500];

let increase = parseFloat(prompt("Enter the amount to increase the prices by:"));

for (let i = 0; i < prices.length; i++) {
  prices[i] += increase;
}

console.log("Updated prices:", prices);