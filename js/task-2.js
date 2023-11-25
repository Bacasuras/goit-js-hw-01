function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const result = `Shipping to ${country} will cost ${totalPrice} credits`
    console.log(result);
}
getShippingMessage("Australia", 120, 50);