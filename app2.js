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
//btnPoint.addEventListener('click', function(){addPoint('.')});
btnCE.addEventListener('click', clearDisplay);
//btnMin.addEventListener('click', SubstractNumbers);
btnPlus.addEventListener('click', addition);
//btnMul.addEventListener('click', multiplyNum);
//btnDiv.addEventListener('click', divideNum);

let numbers = [];
let memoryNumbers = [];


function displayNum(num){
  if(numbers.length < 15){
    numbers += num;
    //saveToSessionStorage(displayNumber);
    display.innerHTML = numbers;
    //console.log(numbers);
  }
}

function addition(e){
 e.preventDefault();
 btnPlus.onclick = () => {
   if(numbers !== ''){
    memoryNumbers = numbers;
    memoryDisplay.innerHTML = memoryNumbers;
    let x = memoryNumbers;
    console.log(x);
    numbers = [];
    console.log(numbers);
    display.innerHTML = '';
   }
  }
  
  
 
 }
 
  


function clearDisplay(e){
 e.preventDefault();
 numbers = [];
 display.innerHTML = '';
 memoryDisplay.innerHTML = '';
}


