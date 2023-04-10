export const calculateTotaleValue = (players) => {
    let totalPrice = 0;
    for (let i = 0; i < players.length; i++) {
      totalPrice += players[i].price;
    }
    return totalPrice;
  };