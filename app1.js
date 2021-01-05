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
let numbers = [];
let resultCount = null;
let result = null;
//let secondNumbers = [];


const getFirstNumber = (number) => {
  firstNumber === null ? (firstNumber = number.toString()) : (firstNumber += number.toString());
  //console.log(firstNumber);
}


const getSecondNumber = (number) => {
  secondNumber === null ? (secondNumber = number.toString()) : (secondNumber += number.toString());
  //console.log(secondNumber);
}

const displayNumber = (number) => {
       //make the first number go away from the screen and set the result as first number 
       //numbers.push(number.toString());
      if(operator === '+' || operator === '-' || operator === 'x' || operator === '÷'){
        numbers.splice(-3);
      }
      numbers.push(number.toString());
    display.textContent = numbers.join('');
}


btn1.addEventListener('click', () => {storeValues(1)});
btn2.addEventListener('click', () => {storeValues(2)});
btn3.addEventListener('click', () => {storeValues(3)});
btn4.addEventListener('click', () => {storeValues(4)});
btn5.addEventListener('click', () => {storeValues(5)});
btn6.addEventListener('click', () => {storeValues(6)});
btn7.addEventListener('click', () => {storeValues(7)});
btn8.addEventListener('click', () => {storeValues(8)});
btn9.addEventListener('click', () => {storeValues(9)});
btn0.addEventListener('click', () => {storeValues(0)});
btnPoint.addEventListener('click',() => {storeValues('.')});

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


const assignResultToFirstNumber = () => {
  if(resultCount > 1){
    firstNumber = result;
  }
}


const calculate = (firstNumber, secondNumber) => {
  switch(operator){
   case operator = '+':
     result =  Number(firstNumber) + Number(secondNumber)
     display.textContent = result;
     resultCount ++
     assignResultToFirstNumber();
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
  firstNumber = null;
  secondNumber = null;
  operator = null;
  numbers = [];
  
}

btnCE.addEventListener('click', clearDisplay);