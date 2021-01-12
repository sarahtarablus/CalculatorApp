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
const memorizeResultBtn = document.getElementById('btn-M+');
const removeSavedResultsBtn = document.getElementById('btn-M-');
const showLastMemorizedResultBtn = document.getElementById('btn-MR');

let firstNumber = [];
let operator = null;
let secondNumber = [];
let result = null;
let storedOperationResults = [];




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

const storeFirstNumberAndSecondNumber = (number) => {
  if(operator === null){
    getFirstNumber(number);
    display.textContent = firstNumber; 
  }else{
    getSecondNumber(number);
    display.textContent = secondNumber;  
  }
}

const substituteResultWithFirstNumber = () => {
  firstNumber = result.toFixed(3);
  secondNumber = [];
}

const substituteResultWithFirstNumberInAdditionAndSubstraction = () => {
  if(result !== null){
    substituteResultWithFirstNumber()
  }
}

const substituteResultWithFirstNumberInMultiplication = () => {
  if(result > 0){
    substituteResultWithFirstNumber()
  }
}

const substituteResultWithFirstNumberInDivision = () => {
  if(result !== Infinity){
    substituteResultWithFirstNumber()
  }
}

const displayResult = () => {
  Number.isInteger(result) ? display.textContent = result : display.textContent = Number(result).toFixed(3)
}

const calculate = () => {
  if(operator === '+'){ 
    result = Number(firstNumber) + Number(secondNumber);
    displayResult();
    substituteResultWithFirstNumberInAdditionAndSubstraction();
  }else if(operator === '-'){
    result = Number(firstNumber) - Number(secondNumber);
    displayResult();
    substituteResultWithFirstNumberInAdditionAndSubstraction();  
  }else if(operator === 'x'){
    result = Number(firstNumber) * Number(secondNumber);
    displayResult();
    substituteResultWithFirstNumberInMultiplication();
  }else if(operator === '÷'){
    result = Number(firstNumber) / Number(secondNumber);
    displayResult();
    substituteResultWithFirstNumberInDivision(); 
  } 
}

const clearDisplay = () => {
  display.textContent = 0;
  firstNumber = [];
  secondNumber = [];
  operator = null;
  result = null; 
}

const getLastStoredOperationResult = () => {  
  storedOperationResults = JSON.parse(localStorage.getItem('storedOperationResults')) || [];
  return storedOperationResults;
}   
 
const storeOperationResult = () => {
   if(result !== null){
   const storedOperationResults = getLastStoredOperationResult();
   storedOperationResults.push(result)
   localStorage.setItem('storedOperationResults', JSON.stringify(storedOperationResults));
 }
}

const showLastMemorizedResult = () => {
  const storedOperationResults = getLastStoredOperationResult();
  display.textContent = storedOperationResults[storedOperationResults.length -1];
}

const removeSavedResults = () => {
  localStorage.clear();
}


btn1.addEventListener('click', () => {storeFirstNumberAndSecondNumber(1)});
btn2.addEventListener('click', () => {storeFirstNumberAndSecondNumber(2)});
btn3.addEventListener('click', () => {storeFirstNumberAndSecondNumber(3)});
btn4.addEventListener('click', () => {storeFirstNumberAndSecondNumber(4)});
btn5.addEventListener('click', () => {storeFirstNumberAndSecondNumber(5)});
btn6.addEventListener('click', () => {storeFirstNumberAndSecondNumber(6)});
btn7.addEventListener('click', () => {storeFirstNumberAndSecondNumber(7)});
btn8.addEventListener('click', () => {storeFirstNumberAndSecondNumber(8)});
btn9.addEventListener('click', () => {storeFirstNumberAndSecondNumber(9)});
btn0.addEventListener('click', () => {storeFirstNumberAndSecondNumber(0)});
btnPoint.addEventListener('click',() => {addDecimals('.')});
btnMin.addEventListener('click',(e) => {calculate(), operator = e.target.textContent; 
});
btnPlus.addEventListener('click',(e) => {calculate(),operator = e.target.textContent; 
});
btnMul.addEventListener('click', (e) => {calculate(),operator = e.target.textContent; 
});
btnDiv.addEventListener('click', (e) => {calculate(), operator = e.target.textContent; 
});
btnEqual.addEventListener('click', () => {calculate()});
memorizeResultBtn.addEventListener('click', storeOperationResult);
showLastMemorizedResultBtn.addEventListener('click', showLastMemorizedResult);
removeSavedResultsBtn.addEventListener('click',removeSavedResults);
btnCE.addEventListener('click', clearDisplay);