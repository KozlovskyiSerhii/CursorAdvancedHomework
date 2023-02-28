let priceMeat = 15.678;
let priceMilk = 123.965;
let priceButter = 90.2345;
console.log(priceMeat);
console.log("максимальна вартість товару:" ,Math.max(priceMeat, priceMilk, priceButter));
console.log("мінімальна вартість товару:" ,Math.min(priceMeat, priceMilk, priceButter));

let sumPrice = priceMeat + priceMilk + priceButter;
const sumPriceSer = sumPrice; 

console.log("чек на 3 товари:", sumPrice);

let sumPriceFloor = Math.floor(priceMeat) + Math.floor(priceMilk) + Math.floor(priceButter);
console.log("сума без копійок:" ,sumPriceFloor);
sumPrice = Math.ceil(sumPrice / 100);
console.log("заокруглення сотень до більшого:", sumPrice * 100);

let clientMoney = 500;
console.log("решта без заокруглень:", clientMoney - priceButter - priceMeat - priceMilk);
// парне чи непарне булеан
function pairOrNot(sumPriceFloor) {
   if(sumPriceFloor % 2 === 0){
   return true
   } else
   {
   return false;
   }
};
console.log("парне:", pairOrNot(sumPriceFloor));
// заокруглена середня ціна 3х товарів
console.log("середня ціна заокруглена до 2 знаку:", (sumPriceSer / 3).toFixed(2)); 
// рандомна знижка для клієнта
let salePercent = Math.random();
console.log(salePercent);

// сума до сплати зі знижкою
console.log("сума до сплати зі знижкою:", ((1 - salePercent)* sumPriceSer ).toFixed(2));
// чистий прибуток
console.log("чистий прибуток:", sumPriceFloor/2 - ((1 - salePercent)* sumPriceSer ).toFixed(0));