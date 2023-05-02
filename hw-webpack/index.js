import { getMiddleTaxes, ukraine } from '../advancedFunctions/script.js';

import { students, pairGB } from '../homework.Array/script.js';

import { Student } from '../homework.8/script.js';

import { getDividedByFives, getDividedByFive } from '../homework.arrayFunction/script.js';

import {getMaxDigit} from '../homework.function/script.js';

import { person, getSubjects } from '../homework.objekt/script.js';

import {generateBlocksInterval} from '../DOM/script.js';




console.log(getMiddleTaxes.call(ukraine));

console.log(pairGB(students));   

let student = new Student("Національний Університет Львівська Політехніка", 3, "Козловський Сергій Олександрович");
console.log(student.getInfo());

console.log(getDividedByFive(getDividedByFives));

console.log(getMaxDigit(79737101301274981274021471987));

console.log('Повертає список предметів для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл:', getSubjects(person[1]).join(', '), '\n\n');
generateBlocksInterval();