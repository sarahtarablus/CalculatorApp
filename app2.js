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
const memoryDisplay = document.getElementById('display-2');

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
btnMin.addEventListener('click', substractNumbers);
btnPlus.addEventListener('click', addition);
btnMul.addEventListener('click', multiplyNum);
btnDiv.addEventListener('click', divideNum);
//btnEqual.addEventListener('click', displayResult);

let numbers = [],
    memoryNumbers = [],
    x,
    y,
    result,
    addClickCount = '',
    minClickCount = '',
    mulClickCount = '',
    divClickCount = '';



function displayNum(num){
  if(numbers.length < 15){
    numbers += num;
    display.innerHTML = numbers;
  }
}



function addPoint(point){
  let lastNum = numbers.charAt(numbers.length - 1);
  if(!isNaN(lastNum) && numbers.indexOf(point) === -1){
    numbers += point;
    display.innerHTML = numbers;
  }
}
 


function clearDisplay(e){
  e.preventDefault();
  numbers = [];
  memoryNumbers = [];
  addClickCount = '';
  minClickCount = '';
  mulClickCount = '';
  divClickCount = '';
  display.innerHTML = '';
  memoryDisplay.innerHTML = '';
}



function addition(e){
 e.preventDefault();
  memoryNumbers.push(numbers);
  console.log(memoryNumbers);
  numbers = [];
  addClickCount++;
  if(addClickCount > 1){
   x = memoryNumbers[memoryNumbers.length-2];
   y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
   result = x1 + y1;
   memoryNumbers.push(result);
   display.innerHTML = result;
   console.log(result);
 }
}



function substractNumbers(e){
 e.preventDefault();
  memoryNumbers.push(numbers);
  console.log(memoryNumbers);
  numbers = [];
  minClickCount++;
  if(minClickCount > 1){
   x = memoryNumbers[memoryNumbers.length-2];
   y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
   result = x1 - y1;
   memoryNumbers.push(result);
   console.log(result);
 }
}



function divideNum(e){
 e.preventDefault();
  memoryNumbers.push(numbers);
  console.log(memoryNumbers);
  numbers = [];
  mulClickCount++;
  if(mulClickCount > 1){
   x = memoryNumbers[memoryNumbers.length-2];
   y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
   result = x1 / y1;
   memoryNumbers.push(result);
   console.log(result);
 }
}



function multiplyNum(e){
 e.preventDefault();
  memoryNumbers.push(numbers);
  console.log(memoryNumbers);
  numbers = [];
  divClickCount++;
  if(divClickCount > 1){
   x = memoryNumbers[memoryNumbers.length-2];
   y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
   result = x1 * y1;
   memoryNumbers.push(result);
   console.log(result);
  }
 }

 /*function displayResult(e){
   e.preventDefault();

 }*/


