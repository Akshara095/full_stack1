array = [10,20,30,[40,50.6],"a", "KEC", true]
console.log(array);

for(var a in array){
    console.log(a);
}

for(var b of array){
    console.log(b);
}

for(b=1;b<10;b++){
    console.log(b);
}

c=2
while(c<=6){
    console.log(c);
    c++;
}

d=3
do{
    console.log(d);
    d++;
}while(d<4);

array.forEach((element,index)=>{
    console.log("Element is",element,"and its index is",index);
})

objType = {
    "name" : "Akshu",
    "age" : 19,
    "college" : "KEC"
}
objType.forEach(({key,value})=>{
    console.log(value);
})
//obj is not iteratable
//print using forof and foreach