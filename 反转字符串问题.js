
/*
  node环境
 */

var readLine = require('readline');

var read = readLine.createInterface({
  input:process.stdin,
  output:process.stdout
});

console.log('请输入一个字符串,以及你想从字符串的那个地方开始和你要选取的长度(中间用空格间隔)');

read.on('line',function(str) {
  var arr = str.split(' ');
  //获取你的字符串
  var yourStr = arr[0];
  //开始位置
  var startIndex = parseInt(arr[1]);
  //结束位置
  var endIndex = parseInt(arr[2]);
  //console.log(arr,yourStr,startIndex,endIndex);
  var newArr = yourStr.slice(startIndex,endIndex);
  //console.log(newArr);
  var reverseArr = newArr.split('').reverse();
  var Yarr = yourStr.concat(reverseArr);
  //console.log(Yarr.slice(6,7));
  var Rarr  = Yarr.slice(0,6) + Yarr.slice(7);
  console.log('经过翻转后的字符串为:'+Rarr);
});