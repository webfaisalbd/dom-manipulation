// finding html Elements
// some methods, example: 
// getElementById
// getElementsByTagName
// getElementsByClassName
const p=document.getElementById('demo');
p.innerHTML='Test 0';

console.log(document.getElementsByTagName('p'));

const classMethod=document.getElementsByClassName('anchor');
console.log(classMethod);



// changing html Elements
const anchorId=document.getElementById('anchor');
anchorId.innerHTML='Portfolio';

