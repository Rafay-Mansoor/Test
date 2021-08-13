const fs=require('fs')

const filePromise=fs.promises.readFile("./calculate.txt");
console.log(filePromise)
filePromise.then(function (fileDataBuffer) {
 console.log(fileDataBuffer.toString())
 const lines = fileDataBuffer.toString().split('\r\n');
 console.log(lines) 
 for(let  i = 0 ; i<lines.length; i++) {
    const components= lines[i].split(',');
    console.log(components)
    const operator=components[1];
    const lhs=parseFloat(components[0]);
    const rhs=parseFloat(components[2]);
    const result=0;
    if(operator =='+') {
     const result=add(lhs,rhs);
    }
    else if(operator=='-'){
     const result=subtract(lhs,rhs);
    }
    else if(operator=='*'){
     const result= multiply(lhs,rhs);
    }
    else {
      const result=divide(lhs,rhs);
    }
    console.log(result);
  } 
  const multiplyFile=fs.promises.readFile("./multiply.txt");
console.log(multiplyFile)
multiplyFile.then(function (fileDataBuffer) {
 console.log(fileDataBuffer.toString())
 const multiplylines = fileDataBuffer.toString().split('\r\n');
 console.log(multiplylines)
 for(let  i = 0 ; i<multiplylines.length; i++) {
 const multiplyComponents= multiplylines[i].split(',');
  console.log(multiplyComponents)
  console.log(filePromise)
  multiply(result,multiplyComponents)

}})
})
filePromise.catch(function (error) {
    console.log('error Reading file')
})
function add(a, b) {
    console.log(a+b) 
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
// const multiplyFile=fs.promises.readFile("./multiply.txt");
// console.log(multiplyFile)
// multiplyFile.then(function (fileDataBuffer) {
//  console.log(fileDataBuffer.toString())
//  const multiplylines = fileDataBuffer.toString().split('\r\n');
//  console.log(multiplylines)
//  for(let  i = 0 ; i<multiplylines.length; i++) {
//  const multiplyComponents= multiplylines[i].split(',');
//   console.log(multiplyComponents)
//   console.log(filePromise)
//   multiply(filePromise,multiplyComponents)

// }})



