//location finder
function locationfinder(){
    train = 10
    return new Promise((resolve,reject)=>{
        if (train == 7){
            resolve("Train has arrived")
        }
        else{
            reject("Train hasn't arrived yet")
        }
    })
}
//console.log(locationfinder());
locationfinder().then((resolvedmsg)=>{
    console.log(resolvedmsg);
}).catch(function (rejectmsg){
    console.log(rejectmsg);
})

