function giveDiscount(price, percentage){
    return price - (price * percentage/100);
}

const result = giveDiscount(1000,2);
console.log("Discount result "+ result);