//найбільше число з будь якого введеного цілого числа
function getMaxDigit(number) {
  let maxNum = 0;
  while (number > 0) {
    const currentNum = number % 10;
    if (currentNum > maxNum) {
       maxNum = currentNum;
       console.log(currentNum)
    }
    number = Math.floor(number / 10);
  }
  return maxNum;
}
// let y = +prompt()
// let x = getMaxDigit(y);
// console.log(x);


// function for change the first letter on the name 
function changeName(name) {
   let letter = name.toLowerCase();
   let littleLetter = letter.slice(1);
   let firstLetter = name[0];
   let bigLetter = firstLetter.toUpperCase();
   return (bigLetter + littleLetter)
}
changeName('sErhii');
console.log(changeName('sErHii'));

//pure salary

function pureSalary(salary, taxes) {
  let salaryWithoutTaxes = salary - salary * (taxes / 100);
   return salaryWithoutTaxes;
}
console.log(pureSalary(29555, 27.4));
//random number
function numRandom(N, M) {
   return (Math.round(Math.random()*(M-N))+N)
}
console.log(numRandom(0, 1000))

//count letters
function countLetter(word, letter) {
   let countLet = 0;
   let i = 0;
   for (i; i <= word.length; i++) {
      if (word.charAt(i) == letter) {
         countLet += 1;
      }
   }
   return countLet;
}
console.log(countLetter('i have a dream haahahaha', 'h'));

/*Створіть функцію генерації випадкового паролю (тільки числа),
довжина встановлюється користувачем або по замовчуванню = 8
символам.
Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
87240124*/
function getRandomPassword(n = 8) {
   return Math.floor(Math.random() * Math.pow(10, n));
}
console.log(getRandomPassword(7))

//Створіть функцію, яка конвертує долари в гривні та навпаки
function exchangeMoney(someMoney) {
   const dollarExchangeRate = 40;
   if (someMoney.includes("$")) {
      const dollar = parseFloat(someMoney.replace(/someMoney/gi, "$"))
      return dollar * dollarExchangeRate +'UAH'
   } else if (someMoney.includes("UAH") || someMoney.includes("uah")) {
      const dollar = parseFloat(someMoney.replace(/someMoney/gi, "UAH"))
      return dollar / dollarExchangeRate +'$'
   } 
   else {
      return alert('невідома валюта');
   }
}
console.log(exchangeMoney("800000sdasf"))


//видалення зазначених літер
function delLetter(letter, words) {
   let a = "";
   let i = 0;
   for (i; i < words.length; i++) {
      let trueLetter = words[i]
      if (trueLetter !== letter) {
         a += trueLetter;
      }
   }
   return a ;
}
let a = delLetter("l", 'latex lettrel laret llluli');
   console.log(a);