const fs=require ('fs');

fs.readFile('./rafay.txt', 'utf8', function (err,fileDataStr) { 
 if (err) { throw err };
 const lines = fileDataStr.toString().split('\r\n'); 
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
});
console.log(123)
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

