function rotateLeft(arr) {
    var first = arr.shift();
    arr.push(first);
    return arr;
}
var arr=[1,2,3,4];
var ans = rotateLeft(arr);
console.log(ans);