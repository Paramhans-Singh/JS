function day(n){
    var s;
    var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    s=arr[n-1];
    return s;
}
var str = day(2);
console.log(str);