let numberN = parseInt(prompt('введіть число N'));
let numberM = parseInt(prompt('введіть число M'));
let sayTrue = prompt('true or false');
console.log(numberN);
console.log(numberM);
console.log(sayTrue);

let sumNM = 0;
for (let i = numberN; i <= numberM; i++){1
   if (sayTrue === 'true') {
      if (i % 2 === 0) {
      continue;
   }
sumNM += i;
   } else if (sayTrue === 'false') {
      sumNM += i;
}
   }
console.log(sumNM);


// if ((isNaN(numberN) || isNaN(numberM)) === false) {
//    if ((numberN % 1 === 0 && numberM % 1 === 0)) {
//    console.log('ціле число ');
// } else {
//    console.log('неціле число');
// }
// } else {
//    console.log('Памятайте, ЧИСЛО, не РЯДОК!');
// }
