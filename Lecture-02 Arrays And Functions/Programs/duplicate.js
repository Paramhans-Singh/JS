function duplicate(arr){
    var length = 2*arr.length;
    var arr2=new Array(length);
    var f = arr2.length/2;

for(var i=0;i<arr.length;i++){
    arr2[i]=arr[i];
    arr2[f]=arr[i];
    f++;
}
return arr2;
}
var arr=[1,2];
var ans = duplicate(arr);
console.log(ans);