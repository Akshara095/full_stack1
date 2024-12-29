//callback(hoisting function)
function databaseSharing(){
    console.log("Data Stored Successfully");
}
function submitForm(formMsg,dbs){
    setTimeout(()=>{
        dbs()
        console.log(formMsg)
    },2000)
}
function hello(){
    console.log("Kindly fill the form!");
}
function form(msg){
    console.log(msg);
    hello()
}
submitForm("Form Submitted Successfully",databaseSharing)
form("Welcome",submitForm)