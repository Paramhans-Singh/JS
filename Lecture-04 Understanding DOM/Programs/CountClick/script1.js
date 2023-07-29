var box = document.getElementById("outer");
var text = document.getElementById("code");
var number = document.getElementById("count");
var count =0;
box.addEventListener("click",function(){
    if(number.innerText<5){
        // console.log(count);
        count++;
       number.innerText=count+" ";
       }
})