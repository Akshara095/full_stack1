async function funName(){
    return "Hello"
}

asyncfunName = async()=>{
    return "Kec"
}

console.log(funName());
console.log(asyncfunName());

async function funName1(){
    console.log("Welocome");
}
asyncfunName1 = async()=>{
    console.log("All");
}

funName1()
asyncfunName1()

//timeset
funcname1 = async()=>{
    setTimeout(()=>{
        //console.log("Hello");
    },5000)
    console.log(await "Hello");
}


funcname = async()=>{
    setTimeout(()=>{
        //console.log("Kec");
    },6000)
    console.log(await "Kec");

}
funcname1()
funcname()

//then
funcname1().then((a)=>{
    console.log(a);
})