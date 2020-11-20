const counterBox = document.getElementById('counter-box');

const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnIncrement2 = document.getElementById('btn-increment-2');
const btnDecrement5 = document.getElementById('btn-decrement-5');
const btnRandom = document.getElementById('btn-random');

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
btnIncrement2.addEventListener('click', incrementOnTwo);
btnDecrement5.addEventListener('click', decrementOnFive);
btnRandom.addEventListener('click', random);

let counter = 0;

function printCounter(number) {
  counterBox.innerText = number;
}

printCounter(counter);

function increment() {
  counter = counter + 1;
  printCounter(counter);
}

function decrement() {
  counter = counter - 1; 
  printCounter(counter)
}

function incrementOnTwo() {
  counter = counter + 2; 
  printCounter(counter)
}

function decrementOnFive() {
  counter = counter - 5; 
  printCounter(counter)
}

function random() {
  counter = Math.floor(Math.random() * 1000);  
  printCounter(counter)
}
