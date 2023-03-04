let numberN = prompt('введіть число N');
let numberM = prompt('введіть число M');
let trueOrFalse = confirm("true or false");
console.log(numberN);
console.log(numberM);


//якщо ввести не цифри, а інші
if ((isNaN(numberN) || isNaN(numberM)) === false) {
   if ((numberN % 1 === 0 && numberM % 1 === 0)) {
      console.log('Введено ціле число');
    let sumNM = 0;

    for (let i = +numberN; i <= +numberM; i++) {
      if (trueOrFalse) {
        if (i % 2 === 0) {
          continue;
        }
      } 
      sumNM += i;
   }
   console.log(sumNM);
   document.writeln(`<h2>${sumNM}</h2>`);
   } else {
   console.log('неціле число');
   document.writeln(`<h2>Введіть ціле число</h2>`);
   }
} else {
   alert('Памятай, ЧИСЛО, не РЯДОК!');
}

