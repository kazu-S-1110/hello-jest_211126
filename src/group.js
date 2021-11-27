export const isSour = (beverage) => (beverage === 'lemonade' ? true : false);

export const getBeverage = (age) => {
  const beverages = [
    { name: 'cola', alcohol: false },
    { name: 'lemonade', alcohol: false },
    { name: 'beer', alcohol: true },
  ];
  const filteredBeverages =
    age >= 20 ? beverages : beverages.filter((b) => b.alcohol === false);

  const seed = Math.floor(Math.random() * Math.floor(filteredBeverages.length));
  return filteredBeverages[seed];
};

console.log(getBeverage(20));

export const fetchData = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, 'lemon'));
