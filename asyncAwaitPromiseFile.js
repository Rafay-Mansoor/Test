const fsBase = require('fs');
const fs = fsBase.promises

const fn = async () => {
  const data = await fs.readFile('./rafay.txt', 'utf8');
  console.log(data);
  const lines = data.toString().split('\r\n'); 
  for(let  i = 0 ; i<lines.length; i++) {
   const components= lines[i].split(',');
   console.log(components)
   const operator=components[1];
   const lhs=parseFloat(components[0]);
   const rhs=parseFloat(components[2]);
   if(operator =='+') {
    add(lhs,rhs);
   }
   else if(operator=='-'){
    subtract(lhs,rhs);
   }
   else if(operator=='*'){
    multiply(lhs,rhs);
   }
   else {
    divide(lhs,rhs);
   }
  }
};
function add(a, b) {
  const data = fs.readFile('./rafay.txt', 'utf8');
  console.log(a+b);
  console.log(data)
} 
async function subtract(a, b) {
  const data = await fs.readFile('./rafay.txt', 'utf8');
  console.log(a-b);
}
function multiply(a, b) {
 console.log(a*b);
}
function divide(a, b) {
  console.log(a/b);
}

add(1,2);
subtract(5,3);
