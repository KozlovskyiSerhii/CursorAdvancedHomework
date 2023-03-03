let priceMeat = 15.678;
let priceMilk = 123.965;
let priceButter = 90.2345;
console.log(priceMeat);
let maxPrice = Math.max(priceMeat, priceMilk, priceButter);
let minPrice = Math.min(priceMeat, priceMilk, priceButter);
console.log("максимальна вартість товару:" , maxPrice);
console.log("мінімальна вартість товару:" , minPrice);

let sumPrice = priceMeat + priceMilk + priceButter;

console.log("чек на 3 товари:", sumPrice);

let sumPriceFloor = Math.floor(priceMeat) + Math.floor(priceMilk) + Math.floor(priceButter);
console.log("сума без копійок:", sumPriceFloor);

//заокруглення до 100
let sumPriceForHundr = Math.ceil(sumPrice / 100) * 100;
console.log("заокруглення сотень до більшого:", sumPriceForHundr);

let clientMoney = 500;
console.log("решта без заокруглень:", clientMoney - sumPrice); 

// парне чи непарне булеан
function pairOrNot(sumPriceFloor) {
   if(sumPriceFloor % 2 === 0){
   return true
   } else
   {
      return false;
   }
}
console.log("парне:", pairOrNot(sumPriceFloor));

// заокруглена середня ціна 3х товарів
let mediumPrice = (sumPrice / 3).toFixed(2);
console.log("середня ціна заокруглена до 2 знаку:", mediumPrice); 

// рандомна знижка для клієнта
let salePercent = Math.random().toFixed(2);
console.log(`${salePercent * 100}%`);

// сума до сплати зі знижкою
let discountPrice = ((1 - salePercent) * sumPrice).toFixed(2);
console.log("сума до сплати зі знижкою за 3 товари:", discountPrice);
// чистий прибуток
let netProfit = sumPriceFloor / 2 - (salePercent * sumPrice).toFixed(0);
console.log("чистий прибуток з продажу 3х товарів:", netProfit);

console.log(`максимальна вартість товару: ${maxPrice}  мінімальна вартість товару: ${minPrice}  чек на 3 товари: ${sumPrice}   сума без копійок: ${sumPriceForHundr} заокруглення сотень до більшого: ${sumPriceForHundr}  решта без заокруглень: ${clientMoney - sumPrice}   парне: ${pairOrNot(sumPriceFloor)}  середня ціна заокруглена до 2 знаку: ${mediumPrice} сума до сплати зі знижкою за 3 товари: ${discountPrice} чистий прибуток з продажу 3х товарів: ${netProfit}`);
