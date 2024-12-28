//ternary
a=10;
op = (a%2==0)?"Even":"Odd"
console.log(op);

//destructuring operator
var marks = [85,98,90]
var [m1,m2] = marks
console.log(m1)

//spread operator
studentsList = ["Tom","Cruise","Holand","Tony","Stark","Robert","Downey","Jr"]
newStudents = ["Kayalu","Neelu","Priyu","Thangu","Sandy"]
combinedStudents = [...studentsList,...newStudents]
console.log(combinedStudents)

arr1 = [10,20,30]
arr2 = [40,50,60]
arr3 = [...arr1,...arr2]
console.log(arr3);

//rest operator
function restoperator(...c){
    console.log(c)
}
restoperator(1,2,3)

//scope
const pi = 3.14;
var a = 5;
console.log(pi);
console.log(a)
 function scope() {
      var a = 10
      console.log(a);
  }
scope()
console.log(a);