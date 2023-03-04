let numberN = parseInt(prompt('введіть число N'));
let numberM = parseInt(prompt('введіть число M'));
let trueOrFalse = confirm("true or false");
console.log(numberN);
console.log(numberM);
console.log(trueOrFalse);


//якщо ввести не цифри, а інші
if ((isNaN(numberN) || isNaN(numberM)) === false) {
   if ((numberN % 1 === 0 && numberM % 1 === 0)) {
   console.log('ціле число ');
} else {
   console.log('неціле число');
}
} else {
   alert('Памятайте, ЧИСЛО, не РЯДОК!');
}

let sumNM = 0;

for (let i = numberN; i <= numberM; i++){
   if (trueOrFalse) {
      if (i % 2 === 0) {
      continue;
   }
sumNM += i;
   } else {
      sumNM += i;
}
   }
console.log(sumNM);
document.writeln(`<h2>${sumNM}</h2>`);
// те саме тільки потрібно ввести тру або фолс
/*let numberN = parseInt(prompt('введіть число N'));
let numberM = parseInt(prompt('введіть число M'));
let sayTrue = prompt('true or false');
console.log(numberN);
console.log(numberM);
console.log(sayTrue);


//якщо ввести не цифри, а інші
if ((isNaN(numberN) || isNaN(numberM)) === false) {
   if ((numberN % 1 === 0 && numberM % 1 === 0)) {
   console.log('ціле число ');
} else {
   console.log('неціле число');
}
} else {
   alert('Памятайте, ЧИСЛО, не РЯДОК!');
}

let sumNM = 0;
for (let i = numberN; i <= numberM; i++){
   if (sayTrue === 'true') {
      if (i % 2 === 0) {
      continue;
   }
sumNM += i;
   } else if (sayTrue === 'false') {
      sumNM += i;
}
   }
console.log(sumNM);*/