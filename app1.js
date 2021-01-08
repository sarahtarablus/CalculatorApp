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
let result = [];
let clickCount = null;



const getFirstNumber = (number) => {
  if(firstNumber === null){
    firstNumber = number
   }else {
    firstNumber += '' + number
   }
   //console.log(firstNumber);
}


const getSecondNumber = (number) => {
 if(secondNumber === null){
  secondNumber = number
 }else {
  secondNumber += '' + number
 }
  //console.log(secondNumber);
}

const displayNumber = (number) => {
  if(operator === null){
   numbers.push(number)
   display.textContent = numbers.join('');
  }else{
    numbers.length = 0;
    numbers.push(number);
    display.textContent = numbers.join('');
  }
  //console.log(numbers);
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
btnPoint.addEventListener('click',() => {addPoint('.')});

//tranform the result of the getFirst and getSecond into arrays.
//JavaScript doesn't return multiple elements from a function.¡

const storeValues = (number) => {
  if(operator === null){
    getFirstNumber(number)
    displayNumber(number);
  }else {
    getSecondNumber(number)
    displayNumber(number);
  }
  //console.log(operator)
}

const addPointToFirstNumber = (number) => {
  if(firstNumber === null){
    firstNumber += 0 + number
  }else if(firstNumber !== null && firstNumber.toString().charAt('.') !== -1){
    firstNumber != number
  }else{
    firstNumber += number;
  }
}



const addPointToSecondNumber = (number) => {
  if(secondNumber.toString().charAt('.') >= 0){
    secondNumber != number 
  }else if(secondNumber === null){
    secondNumber = 0 + number
  }else{t
    secondNumber += number
  }
}



const addPoint = (number) => {
  if(operator === null ){
    addPointToFirstNumber(number)
    displayNumber(number);
  }else {
    addPointToSecondNumber(number)
    displayNumber(number);
  }
}
//secondNumber is not equal to null therefore after result the secondNumber adds to the existing secondNumber

const calculate = (firstNumber, secondNumber) => {
  switch(operator){
   case operator = '+':
     //if(result.length === 0){
    display.textContent =  Number(firstNumber) + Number(secondNumber)
    numbers.length = [];
    console.log(secondNumber);
    
    
      //result.push(Number(firstNumber) + Number(secondNumber));
     //}else{
     
     // display.textContent =  Number(result[result.length-1]) + Number(secondNumber)
     // result.push(Number(result[result.length-1]) + Number(secondNumber))
     
    
    
    //getResult();
   
    break;
   case operator = '-':
    display.textContent = Number(firstNumber) -  Number(secondNumber);  
   
    break;
   case operator = 'x':
    display.textContent = Number(firstNumber) * Number(secondNumber);
    
    break;
   case operator  = '÷':  
   display.textContent = Number(firstNumber) / Number(secondNumber);
   
    break;
   default: alert('this is not a number');
  }
}

// const getResult = () => {
  // if(result.length !== 0){
    // firstNumber = result[result.length -1];
  // }
// }


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
  display.textContent = 0;
  firstNumber = null;
  secondNumber = null;
  operator = null;
  numbers = [];
  result = [];
  
}

btnCE.addEventListener('click', clearDisplay);