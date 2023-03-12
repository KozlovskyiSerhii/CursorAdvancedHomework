let numberN= +prompt('Введіть перше ціле число');
let numberM = +prompt('Введіть друге ціле число');
let sumNM = 0;

while ( !Number.isInteger(+numberN) || +numberN <= 0) {
   numberN = Math.floor(+prompt('enter  first number'))
};
while (!Number.isInteger(numberM) || +numberM <= 0) {
   numberM = Math.floor(+prompt('enter  second number'))
};

if (numberN > numberM) {
   let x = numberN;
   numberN = numberM;
   numberM = x;
}
let trueOrFalse = confirm("пропускаємо парні чи ні?");
   
   for (let i = parseInt(numberN); i <= parseInt(numberM); i++) {
      if (!trueOrFalse) { 
         //  console.log(sumNM)
            sumNM += i;     
      } else if (i % 2 !== 0) {
         // console.log(sumNM)
         sumNM += i;
      }
   }
   document.writeln(`<h2>${sumNM}</h2>`);



