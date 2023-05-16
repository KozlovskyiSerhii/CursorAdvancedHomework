let element_1 = document.getElementById('take_my_text')
let element_2 = document.getElementsByClassName('take_my_text')
let element_3 = document.getElementsByName('animal')
let element_4 = document.getElementsByTagName('p')

console.log(element_1.innerText);
for (i of element_2) {
   i.innerText = 'Hello!' 
}
console.log(element_2);

for (i of element_3) {
   console.log(i.checked, i.value);
}
console.log(element_4);