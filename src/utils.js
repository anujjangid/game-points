export const getBonus = data => {
  let totalBonus = 0;

  Object.keys(data).forEach(itemId => {
    // console.log(data[itemId].bonus);
    totalBonus += data[itemId].bonus;
  });
  return totalBonus;
};

export const getTotal = data => {
  let totalPrice = 0;

  Object.keys(data).forEach(itemId => {
    // console.log(data[itemId].price);
    totalPrice += data[itemId].price;
  });
  return totalPrice;
};
