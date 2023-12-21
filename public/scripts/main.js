
const button = document.querySelector('.generate');
const counter = document.querySelector('.counter')

const plus1 = document.querySelector('.plus1');
const plus2 = document.querySelector('.plus2');
const plus3 = document.querySelector('.plus3');

const val1 = document.querySelector('.rIntListValue1');
const val2 = document.querySelector('.rIntListValue2');
const val3 = document.querySelector('.rIntListValue3');



let count1 = val1.textContent;
let count2 = val2.textContent;
let count3 = val3.textContent;

let steps = counter.textContent;


plus1.addEventListener('click', () => {
    count1++;
    val1.innerHTML = count1;
    steps++;
    counter.innerHTML = 'Кроки: ' + steps;
})
plus2.addEventListener('click', () => { 
    count2++;  
    val2.innerHTML = count2;
    steps++;
    counter.innerHTML = 'Кроки: ' + steps;
})
plus3.addEventListener('click', () => {
    count3++;
    val3.innerHTML = count3;
    steps++;
    counter.innerHTML = 'Кроки: ' + steps;
})

button.addEventListener('click', (ev) => {
    randomIntList();
})

const randomIntList = () => {
    location.href = location.href;
}








