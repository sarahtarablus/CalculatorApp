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

let firstNumber = [];
let operator = null;
let secondNumber = [];
let result = null;




const getFirstNumber = (number) => {
  if(firstNumber.length < 10){
    firstNumber += number;
  }
}

const getSecondNumber = (number) => {
  if(secondNumber.length < 10){
     secondNumber += number;
  }
}

const addDecimals = (point) => {
  if(operator === null){
    if(firstNumber.indexOf('.') === -1){
     firstNumber += point
    }
  }else{
    if(secondNumber.indexOf('.') === -1){
      secondNumber += point
    } 
  }
}

const storeValues = (number) => {
  if(operator === null){
    getFirstNumber(number);
    display.textContent = firstNumber; 
  }else{
    getSecondNumber(number);
    display.textContent = secondNumber;  
  }
  console.log('firstNumber:' + firstNumber);
  console.log('operator:'+ operator)
  console.log('secondNumber:' + secondNumber); 
}

const substituteResultWithFirstNumberInAdditionAndSubstraction = () => {
  if(result !== null){
    firstNumber = result.toFixed(3);
    secondNumber = [];
  }
}

const substituteResultWithFirstNumberInMultiplication = () => {
  if(result > 0){
    firstNumber = result.toFixed(3);
    secondNumber = [];
  }
}

const substituteResultWithFirstNumberInDivision = () => {
  if(result !== Infinity){
    firstNumber = result.toFixed(3);
    secondNumber = [];
  }
}

const displayResult = () => {
  if(Number.isInteger(result)){
    display.textContent = result;
  }else{
    display.textContent = Number(result).toFixed(3);
  }   
}

const calculate = () => {
    if(operator === '+'){ 
      result = Number(firstNumber) + Number(secondNumber)
      displayResult();
      substituteResultWithFirstNumberInAdditionAndSubstraction();
      console.log(result)
    }else if(operator === '-'){
      result = Number(firstNumber) - Number(secondNumber)
      displayResult();
      substituteResultWithFirstNumberInAdditionAndSubstraction();  
    }else if(operator === 'x'){
      result = Number(firstNumber) * Number(secondNumber)
      displayResult();
      substituteResultWithFirstNumberInMultiplication();
    }else if(operator === '÷'){
      result = Number(firstNumber) / Number(secondNumber)
      displayResult();
      substituteResultWithFirstNumberInDivision (); 
    } 
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
btnPoint.addEventListener('click',() => {addDecimals('.')});
btnMin.addEventListener('click', (e) => {operator = e.target.textContent;
calculate()
});
btnPlus.addEventListener('click', (e) => {operator = e.target.textContent;
calculate()
});
btnMul.addEventListener('click', (e) => {operator = e.target.textContent; calculate()
});
btnDiv.addEventListener('click', (e) => {operator = e.target.textContent; 
calculate()
});
btnEqual.addEventListener('click', () => {calculate()});



const clearDisplay = () => {
  display.textContent = 0;
  firstNumber = [];
  secondNumber = [];
  operator = null;
  result = null; 
  
}

btnCE.addEventListener('click', clearDisplay);