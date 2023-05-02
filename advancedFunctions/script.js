export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function getMyTaxes(salary) {
//    console.log((this.tax * salary).toFixed(2));
// }
// getMyTaxes.call(ukraine, 3000);

export function getMiddleTaxes() {
return (this.tax * this.middleSalary).toFixed(2);
}
// getMiddleTaxes.call(ukraine);



// function getTotalTaxes() {
// console.log((this.tax * this.middleSalary * this.vacancies).toFixed(2));
// }
// getTotalTaxes.call(ukraine);

// function getMySalary() {
//    const salary = Math.round(Math.random() * (2000 - 1500) + 1500);
//    const taxes = +(this.tax * salary).toFixed(2);
//    const profit = salary - taxes
//    console.log({salary, taxes, profit });
// }
// getMySalary.call(ukraine);
// setInterval(() => {getMySalary.call(ukraine)}, 10000);