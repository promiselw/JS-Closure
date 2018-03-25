
var readLine = require('readline');

var read = readLine.createInterface({
  input:process.stdin,
  output:process.stdout
});

console.log('请输入你想要的数组长度以及差值和数组，中间用空格隔开：');

read.on('line',function(str) {
  var arr = str.split(' ');
  //console.log(arr[1]);
  var arr1 = arr.slice(2);
  var count =0;
  for(var i=0;i<=arr1.length;i++){
    for(var j=i+1;j<=arr1.length;j++){
      if(Math.abs(arr1[i] - arr1[j]) == arr[1]){
          if(arr1[j] != arr1[j-1]){
            count++;
          }else if(arr1[i] == arr1[j]){
            count = 1;
          }
      }
    }
  }
  console.log(count);
});