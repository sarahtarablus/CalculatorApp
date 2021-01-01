const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnPoint = document.getElementById('btn-point');
const btnEqual = document.getElementById('btn-equal');
const btnMul = document.getElementById('btn-mul');
const btnDiv = document.getElementById('btn-div');
const btnPlus = document.getElementById('btn-plus');
const btnMin = document.getElementById('btn-min');
const btnCE = document.getElementById('btn-ce');
const display = document.getElementById('display');




let firstNumber = null;
let operator = null;
let secondNumber = null;
let result = null;
let numbers = [];



const getFirstNumber = (number) => {
  firstNumber === null ? (firstNumber = number) : (firstNumber += number)
  console.log(firstNumber);
}


const getSecondNumber = (number) => {
  secondNumber === null ? (secondNumber = number) : (secondNumber += number);
  console.log(secondNumber);
}

const displayNumber = (number) => {
  if(numbers.length < 12){
    numbers.push(number);
    display.textContent = numbers.join('');
 }
}

btn1.addEventListener('click', () => {storeValues("" + 1)});
btn2.addEventListener('click', () => {storeValues("" + 2)});
btn3.addEventListener('click', () => {storeValues("" + 3)});
btn4.addEventListener('click', () => {storeValues("" + 4)});
btn5.addEventListener('click', () => {storeValues("" + 5)});
btn6.addEventListener('click', () => {storeValues("" + 6)});
btn7.addEventListener('click', () => {storeValues("" + 7)});
btn8.addEventListener('click', () => {storeValues("" + 8)});
btn9.addEventListener('click', () => {storeValues("" + 9)});
btn0.addEventListener('click', () => {storeValues("" + 0)});
btnPoint.addEventListener('click',() => {storeValues("" + '.')});

//tranform the result of the getFirst and getSecond into arrays.
//JavaScript doesn't return multiple elements from a function.¡

const storeValues = (number) => {
  if(operator === null){
    getFirstNumber(number);
    displayNumber(number); 
    console.log(number);
  }else {
    getSecondNumber(number);
    displayNumber(number);
    console.log(number);
  }
}


const calculate = (firstNumber, secondNumber) => {
  switch(operator){
   case operator = '+':
    display.textContent = Number(firstNumber) + Number(secondNumber)
    break;
   case operator = '-':
    display.textContent = Number(firstNumber) - Number(secondNumber)
    break;
   case operator = 'x':
    display.textContent = Number(firstNumber) * Number(secondNumber)
    break;
   case operator  = '÷':
    display.textContent = Number(firstNumber) / Number(secondNumber)
    break;
   default: alert('this is not a number');
  }
}

btnMin.addEventListener('click', (e) => {operator = e.target.textContent; //console.log('target: ', operator)
});
btnPlus.addEventListener('click', (e) => {operator = e.target.textContent; //console.log('target: ', operator)
});
btnMul.addEventListener('click', (e) => {operator = e.target.textContent; //console.log('target: ', operator)
});
btnDiv.addEventListener('click', (e) => {operator = e.target.textContent; //console.log('target: ', operator)
});
btnEqual.addEventListener('click', (e) => {calculate(firstNumber, secondNumber)});


const clearDisplay = () => {
  display.textContent = '';
  numbers = [];
  firstNumber = null;
  secondNumber = null;
  operator = null;
}

btnCE.addEventListener('click', clearDisplay);