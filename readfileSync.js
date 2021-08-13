// const prompt = require('prompt-sync')();

// const num1 = parseFloat(prompt('Enter first number: '));
// const num2= parseFloat(prompt('Enter second number: '));
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// let result;

// if (operator == '+') {
//     result = num1 + num2;
// }
// else if (operator == '-') {
//     result = num1 - num2;
// }
// else if (operator == '*') {
//     result = num1 * num2;
// }
// else {
//     result = num1 / num2;
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);

// const prompt = require('prompt-sync')();

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2= parseFloat(prompt('Enter second number: '));
// const operator = prompt('Enter operator (  +, -, * or / ): ');
// switch(operator) {
//   case '+':
//        result = number1 + number2;
//       console.log(`${number1} + ${number2} = ${result}`);
//       break;

//   case '-':
//        result = number1 - number2;
//       console.log(`${number1} - ${number2} = ${result}`);
//       break;

//   case '*':
//        result = number1 * number2;
//       console.log(`${number1} * ${number2} = ${result}`);
//       break;

//   case '/':
//        result = number1 / number2;
//       console.log(`${number1} / ${number2} = ${result}`);
//       break;

//   default:
//       console.log('Invalid operator');
//       break;
// }   
// const prompt = require('prompt-sync')();
// const a = parseFloat(prompt('Enter first number: '));
// const b= parseFloat(prompt('Enter second number: '));
// const operator = prompt('Enter operator (  +, -, * or / ): ');

// function add(a, b) {
//  console.log(a+b);
// } 


// function subtract(a, b) {
//   console.log(a-b);
// }

// function multiply(a, b) {
//   console.log(a*b);
// }

// function divide(a, b) {
//   console.log(a/b);
// }


// if (operator == '+') {
//     add(a,b);
// }
// else if (operator == '-') {
//     subtract(a,b);
// }
// else if (operator == '*') {
//     multiply(a,b);
// }
// else {
//     divide(a,b);
// }
// const fs = require('fs');
// const data =fs.readFileSync('./rafay.txt','utf8')

// const prompt = require('prompt-sync')();
// const operator = prompt('Enter operator (  +, -, * or / ): ');
// function add(a, b) {
//  console.log(a+b);
 
// } 


// function subtract(a, b) {
//   console.log(a-b);
// }

// function multiply(a, b) {
//   console.log(a*b);
  
// }

// function divide(a, b) {
//   console.log(a/b);
  
// }

// switch(operator) {
// case '+':
//     add(a,b);
//     break;

// case '-':
//     subtract(a,b);
//     break;

// case '*':
//     multiply(a,b);
//     break;

// case '/':
//     divide(a,b);
//     break;
// }


const fs = require('fs');
const { stringify } = require('querystring');
const internal = require('stream');
const dataBuffer=fs.readFileSync("./rafay.txt");
const dataString=dataBuffer.toString()
const lines=dataString.split("\r\n");

function add(a, b) {
  console.log(a+b);
} 
  
function subtract(a, b) {
  console.log(a-b);
}
function multiply(a, b) {
 console.log(a*b);
}
function divide(a, b) {
  console.log(a/b);
}

for(let  i = 0 ; i<lines.length; i++) {
  // console.log(calc[i])
  const calcString=lines[i];
  console.log(lines[i].split(','))
  const calcComponent= lines[i].split(',');
  console.log(calcComponent)
  let c=calcComponent[1];
  let a=parseFloat(calcComponent[0]);
  let b=parseFloat(calcComponent[2]);
// if(c =='+') {
//   add(a,b);
// }
// else if(c=='-'){
//  subtract(a,b);
// }
// else if(c=='*'){
//   multiply(a,b);
// }
// else { divide(a,b);
// }
};
                  



  
// const fs = require('fs');
// const calc=fs.readFileSync("./rafay.txt").toString().split("\r\n");  
// function add(a, b) {
//   console.log(a+b);
// } 
// function subtract(a, b) {
//   console.log(a-b);
// }
// function multiply(a, b) {
//  console.log(a*b);
// }
// function divide(a, b) {
//   console.log(a/b);
// }
// let rafay=[];

// for(let  i = 0 ; i<calc.length; i++) {
//   // console.log(calc[i])
//   const calcString=calc[i]; 
//   console.log(calc[i].split(','))
//   const calcComponent= calc[i].split(',');
//   let c=calcComponent[1];
//   let a=parseFloat(calcComponent[0]);
//   let b=parseFloat(calcComponent[2]);

//   fs.readFile('./rafay1.txt', 'utf8', function (err,calc) {
//     if(c =='+') {
//       add(a,b);
//     }
//     else if(c=='-'){
//      subtract(a,b);
//     }
//     else if(c=='*'){
//       multiply(a,b);
//     }
//     else { divide(a,b);
//     }
//       console.log(calc);
//   } )
 