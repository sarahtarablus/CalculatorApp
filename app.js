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
    previous = '';


function displayNum(num){
  if(numbers.length < 15 || numbers.charAt('.') ){
    numbers += num
    let newNumber = Number(numbers).toLocaleString('en');
    display.innerHTML = newNumber;
  }
}



function addPoint(point){
  if(numbers.indexOf(point) === -1){
    if(numbers.length === 0){
      numbers += 0 + point;
    }else{
      numbers += point;
    }
    console.log(numbers);
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
 
}



function addition(e){
 e.preventDefault();
  addClickCount++;
  if(memoryNumbers.length === 0 && numbers.length !== 0 &&  addClickCount == 1){
    memoryNumbers.push(parseInt(numbers, 10));
    console.log(memoryNumbers);
    numbers = [];
  }else{
    memoryNumbers.push(parseInt(numbers, 10));
    console.log(memoryNumbers);
    numbers = [];
    x = memoryNumbers[memoryNumbers.length-2];
    y = memoryNumbers[memoryNumbers.length-1];
     let x1 = Number(x),
         y1 = Number(y);
    result = x1 + y1;
    memoryNumbers.push(result);
    display.innerHTML = result.toLocaleString('en');
    console.log(result);
   }
}
 
function substractNumbers(e){
 e.preventDefault();
 minClickCount++;
 if(memoryNumbers.length === 0 && numbers.length !== 0 &&  minClickCount == 1){
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
}else{
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
  x = memoryNumbers[memoryNumbers.length-2];
  y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
  result = x1 - y1;
  memoryNumbers.push(result);
  display.innerHTML = result.toLocaleString('en');
  console.log(result);
 }
}



function divideNum(e){
 e.preventDefault();
 divClickCount++;
 if(memoryNumbers.length === 0 && numbers.length !== 0 &&  divClickCount == 1){
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
}else{
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
  x = memoryNumbers[memoryNumbers.length-2];
  y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
  result = x1 / y1;
  display.innerHTML = result.toLocaleString('en');
  console.log(result);
 }
}



function multiplyNum(e){
 e.preventDefault();
 mulClickCount++;
 if(memoryNumbers.length === 0 && numbers.length !== 0 &&  mulClickCount == 1){
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
}else{
  memoryNumbers.push(parseInt(numbers, 10));
  console.log(memoryNumbers);
  numbers = [];
  x = memoryNumbers[memoryNumbers.length-2];
  y = memoryNumbers[memoryNumbers.length-1];
   let x1 = Number(x),
       y1 = Number(y);
  result = x1 * y1;
  memoryNumbers.push(result);
  display.innerHTML = result.toLocaleString('en');
  console.log(result);
 }
}

 


