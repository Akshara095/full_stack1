function isEven(n) 
{ 
    return ((n & 1)!=1); 
} 
     
var n = 501; 
console.log(isEven(n) == true ? "Even" : "Odd"); 

