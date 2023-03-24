const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
   return (this.tax * salary).toFixed(2);
}
console.log(getMyTaxes.call(ukraine, 3000));

function getMiddleTaxes() {
   return (this.tax * this.middleSalary).toFixed(2);
}
console.log(getMiddleTaxes.call(ukraine));



function getTotalTaxes() {
   return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(getTotalTaxes.call(ukraine));

function getMySalary() {
   const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
   const taxes = +(this.tax * salary).toFixed(2);
   const profit = salary - taxes
   return { salary, taxes, profit };
}
setInterval(() => {
   console.log(getMySalary.call(ukraine));
}, 10000);