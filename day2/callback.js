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
submitForm("Form Submitted Successfully",databaseSharing)