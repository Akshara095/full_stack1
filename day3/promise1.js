function isTimeConsumption(t){
    time = 999
    return time <= t;
}

function  isValidLocation(){
    location = "Ooty"
    return loc == location
}

function locationfinder(){
    loc = "Ooty"
    time = 1000
    return new Promise((locfound,locnotfound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc) && isTimeConsumption(time)){
                locfound("Location found");
            }
            else{
                locnotfound("Location not found")
            }
        },time)
    })
}

locationfinder().then((resolvedmsg)=>{
    console.log(resolvedmsg);
}).catch((rejectedmsg)=>{
    console.log(rejectedmsg);
})