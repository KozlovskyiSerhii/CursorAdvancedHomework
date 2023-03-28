class Client { // обєкт
   constructor(name, years_old, married_status, travelling_status) {
      this.count = 0;
      this.name = name;
      this.years = years_old;
      this.married = married_status;
      this.travelling = travelling_status;
   }
   show_info() {
      this.count++;
      console.log(`${this.name} who is ${this.years} old whose married status is ${this.married} who travelling status is ${this.travelling}`); // метод
   }
}
class Admin {
   change() {
      console.log('This person is amazing cooker');
   }
      delete() {

   }
}
class Dealer {
   add_product() {
      console.log('This person is amazing cooker');
   }
}
let client = new Client('Mark', 26, true, false);
// client.bye('condoms')
// client.bye('чай')
client.show_info()


// new Person1().teach_programming();

class Student { 
   #marks
   constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.#marks = [5, 4, 4, 5];
      this.dismiss = false;
       this.averageMark = 0
   }
   getInfo() {
      console.log(`Студент ${this.course}го курсу ${this.university} м.Одеса, ${this.fullName}`);
   }
}
let student = new Student("НУ ЛП", 1, "Kozlovskyi Serhii Oleksandrovysh");
student.getInfo()