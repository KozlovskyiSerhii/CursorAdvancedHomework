//найбільше число з будь якого введеного цілого числа (1)
export function getMaxDigit(number) {
  let maxNum = 0;
  while (number > 0) {
    const currentNum = number % 10;
    if (currentNum > maxNum) {
       maxNum = currentNum;
    }
    number = Math.floor(number / 10);
  }
  return maxNum;
}


// // function for change the first letter on the name (3)
// function changeName(name) {
//    let letter = name.toLowerCase();
//    let littleLetter = letter.slice(1);
//    let firstLetter = name[0];
//    let bigLetter = firstLetter.toUpperCase();
//    return (bigLetter + littleLetter)
// }
// //better then prev
// const goodName = (name) => name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase(); //perfect
// console.log(goodName('serHii'))

// //pure salary (4)

// function pureSalary(salary, taxes) {
//   let salaryWithoutTaxes = salary - salary * (taxes / 100);
//    return salaryWithoutTaxes;
// }

// //те саме ....стрілочна.
// const purSalary = (salary, taxes) => salary - salary * (taxes / 100)




// //random number (5)
// function numRandom(N, M) {
//    return (Math.round(Math.random()*(M-N))+N)
// }

// const intRandom = (N, M) => Math.round(Math.random() * (M - N)) + N;


// //count letters (6)
// function countLetter(word, letter) {
//    let countLet = 0;
//    let i = 0;
//    for (i; i <= word.length; i++) {
//       if (word.charAt(i) == letter) {
//          countLet += 1;
//       }
//    }
//    return countLet;
// }


// /*Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8 *///(9)
// /*function getRandomPassword(n = 8) {
//    return Math.floor(Math.random() * Math.pow(10, n));
// }
// console.log(getRandomPassword(7)) */

// const getRandomPassword = (n = 8) => Math.floor(Math.random() * Math.pow(10, n)); //стрілочна функція


// //Створіть функцію, яка конвертує долари в гривні та навпаки(7-8)
// function exchangeMoney(someMoney) {
//    const dollarExchangeRate = 40;
//    if (someMoney.includes("$")) {
//       const dollar = parseFloat(someMoney.replace(/someMoney/gi, "$")) //чи є символ долара
//       return dollar * dollarExchangeRate +'UAH'                         //якщо є повертаємо конвертовану валюту
//    } else if (someMoney.includes("UAH") || someMoney.includes("uah")) {
//       const dollar = parseFloat(someMoney.replace(/someMoney/gi, "UAH"))
//       return dollar / dollarExchangeRate +'$'
//    } 
//    else {
//       return alert('невідома валюта');
//    }
// }


// //видалення зазначених літер(10)
// function delLetter(letter, words) {
//    let a = "";
//    let i = 0;
//    for (i; i < words.length; i++) {
//       let trueLetter = words[i] //перебираємо букви
//       if (trueLetter !== letter) {  //якщо буква не наша, додаєм її до строки
//          a += trueLetter;
//       }
//    }
//    return a ;
// }

   

// //palindrom(11)
// function palindromOrNot(palindrom) {
//    let b = palindrom;
//    let a = ""; //записуємо розвернене словосполучення чи слово
//    for (let i = palindrom.length-1;  i >= 0 ; i--) {
//       let trueLetter = palindrom[i]
//          a += trueLetter; //розвертає слово
//    }
//    let x = a.replace(/\s+/g, "").toLowerCase(); //delete space
//    let y = b.replace(/\s+/g, "").toLowerCase(); //delete space
//    console.log(x)
//    console.log(y)
//    if (x === y) {  //порівнюємо стрінги
//       return true;
//    } else {
//       return false;
//    }
// }
   

// document.writeln(`<p title="найбільше число(1884214828412999)">Функція No1: ${getMaxDigit(1884214828412999)}</p>`
// + `<p title="піднесення числа X до степеня У(2 в 10 степ)"> Функція No2: ${number(2, 10)}</p>` 
// + `<p title="Зміна написання імені (sErHii)"> Функція No3: ${changeName("sErHii")}</p>` 
// + `<p title="вираховує зарплату після сплати податків (29555, 27.4)"> Функція No4: ${purSalary(29555, 27.4)}</p>`
// + `<p title="рандомне число в N до M (0, 600)"> Функція No5: ${intRandom(0, 600)}</p>` 
// + `<p title="рахує кількість заданих літер в словосполученні"> Функція No6: ${countLetter('i have a dream haahahaha', 'h')}</p>`
// + `<p title="випадковий числовий пароль на 8 символів, або на ту кількість яку задасть користувач"> Функція No7: ${getRandomPassword(7)}</p>`
// + `<p title="конвертація гривні в долар і навпаки, помилка при задаванні іншої валюти"> Функція No8-9: ${exchangeMoney("100uah")}</p>`
// + `<p title="видаляє задану букву із заданого словосполучення ("l", 'latex lettrel laret llluli')"> Функція No10: ${delLetter("l", 'latex lettrel laret llluli')}</p>` 
// + `<p title="перевіряє чи є рядок паліндромом ('Уже лисі ліси Лежу')"> Функція No11: ${palindromOrNot('Уже лисі ліси Лежу')} </p>`);

// //функція піднесення в степінь якогось числа
// function number(numeric, power) {
//    let exp = 1;
//    if (power > 0) {
//       for (let i = 0; i < power; i++) {
//          exp *= numeric;
//       }
//       return exp;
//    } else if (power < 0) {
//       for (let i = 0; i < Math.abs(power); i++) {
//       exp *= numeric;
//       }
//       return 1/exp;
//    } else if (power = 1) {
//       return exp;
//    }
// }