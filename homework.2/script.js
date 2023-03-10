let numberN= +prompt('Введіть перше ціле число');
let numberM = +prompt('Введіть друге ціле число');
let sumNM = 0;

while ( !Number.isInteger(numberN) || numberN <= 0) {
   numberN = parseInt(prompt('enter first number'));
};
while (!Number.isInteger(numberM) || numberM <= 0) {
   numberM = parseInt(prompt('enter  second number'))
};

if (numberN > numberM) {
   let x = numberN;
   numberN = numberM;
   numberM = x;
}
let trueOrFalse = confirm("пропускаємо парні чи ні?");
   
   for (let i = parseInt(numberN); i <= parseInt(numberM); i++) {
      if (!trueOrFalse) {   
            sumNM += i;     
      } else if (i % 2 !== 0) {
         sumNM += i;
      }
   }
   document.writeln(`<h2>${sumNM}</h2>`);



