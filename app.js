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

btn1.addEventListener('click', function(){displayNum(1)});
btn2.addEventListener('click', function(){displayNum(2)});
btn3.addEventListener('click', function(){displayNum(3)});
btn4.addEventListener('click', function(){displayNum(4)});
btn5.addEventListener('click', function(){displayNum(5)});
btn6.addEventListener('click', function(){displayNum(6)});
btn7.addEventListener('click', function(){displayNum(7)});
btn8.addEventListener('click', function(){displayNum(8)});
btn9.addEventListener('click', function(){displayNum(9)});
btn0.addEventListener('click', function(){displayNum(0)});
btnPoint.addEventListener('click', function(){addPoint('.')});
btnCE.addEventListener('click', clearDisplay);
//btnMin.addEventListener('click', SubstractNumbers);
btnPlus.addEventListener('click', addNumbers);
btnMul.addEventListener('click', multiplyNum);

let displayNumber = '';
let firstNumber = '';
let secondNumber = '';
let resultNumber = '';

function displayNum(num){
  if(displayNumber.length < 15){
    displayNumber += num
    saveToSessionStorage(displayNumber);
    display.innerHTML = displayNumber;
    //console.log(displayNumber);
  }
}

function addPoint(point){
  let lastNum = displayNumber.charAt(displayNumber.length - 1);
  if(!isNaN(lastNum) && displayNumber.indexOf(point) === -1){
    displayNumber += point;
    saveToSessionStorage(displayNumber);
    display.innerHTML = displayNumber;
  }
}

function clearDisplay(){
  if( display.innerHTML !== ''){
    display.innerHTML = '';
    displayNumber = '';
    display.innerHTML = '0';
    sessionStorage.clear();
  }
}

function saveToSessionStorage(num){
  if(sessionStorage.getItem('numbers') === null){
    let numbers = [];
    numbers.push(displayNumber);
    sessionStorage.setItem('numbers', JSON.stringify(numbers));
  }else{
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    parsedNumbers.push(num);
    sessionStorage.setItem('numbers', JSON.stringify(parsedNumbers));
  }
}


function addNumbers(){
  if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    firstNumber = parsedNumbers[parsedNumbers.length - 1];
    displayNumber = '';
    secondNumber = parsedNumbers[parsedNumbers.length - 2];
    let x = firstNumber;
    let y = secondNumber;
    let k = Number(x) + Number(y);
    resultNumber = k;
    console.log(resultNumber);
  }
  if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    parsedNumbers.push(resultNumber);
    sessionStorage.setItem('numbers', JSON.stringify(parsedNumbers));
  }
    display.innerHTML = resultNumber;     
}

/*function SubstractNumbers(){
  if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    secondNumber = parsedNumbers[parsedNumbers.length - 1];
    displayNumber = '';
    firstNumber = parsedNumbers[parsedNumbers.length - 2];
    let x = firstNumber;
    let y = secondNumber;
    let k = + [Number(y) - Number(x)];
    resultNumber = k;
    console.log(resultNumber);
  }

  if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    parsedNumbers.push(resultNumber);
    sessionStorage.setItem('numbers', JSON.stringify(parsedNumbers));
  }
    display.innerHTML = resultNumber; 
}*/

/*function resultOperation(){
  display.innerHTML = resultNumber; 
}*/

function multiplyNum(){
  if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    firstNumber = parsedNumbers[parsedNumbers.length - 1];
    displayNumber = '';
    secondNumber = parsedNumbers[parsedNumbers.length - 2];
    let x = firstNumber;
    let x1 = Number(x);
    let y = secondNumber;
    let y1 = Number(y);
    let k = parsedNumbers.reduce((x1, y1) => 
      x1 * y1, 1);
    resultNumber = k;
    console.log(resultNumber);
  }

  /*if(sessionStorage.getItem('numbers') !== null){
    let numbers = sessionStorage.getItem('numbers');
    let parsedNumbers = JSON.parse(numbers);
    parsedNumbers.push(resultNumber);
    sessionStorage.setItem('numbers', JSON.stringify(parsedNumbers));
  }
    display.innerHTML = resultNumber;   */  
}


