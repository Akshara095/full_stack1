//Hoisting
console.log(s);
var s = 50
console.log(s);

console.log(l);
let l = 30
console.log(l);
//output:ReferenceError: cannot access 'l' before initialization

console.log(c)
const c = 40
console.log(c);
//output:ReferenceError: cannot access 'c' before initialization

