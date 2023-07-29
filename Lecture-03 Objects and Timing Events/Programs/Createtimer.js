function timer() {
    for(let i = 1; i<=5; i++){
        var ans = i*1000;
        setTimeout(function(timer){
            console.log(i);
        },ans)
    }
    console.log("Hello ninjas!");
}
timer();