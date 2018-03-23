


var readLine = require('readline');

var read = readLine.createInterface({
  input:process.stdin,
  output:process.stdout
});

console.log('请输入你的歌曲数，每首歌的时间长度以及每张CD的容量:');

read.on('line',function(str) {
      //将str转换为数组
      var arr = str.split(' ');
      console.log(arr);

      //歌曲数目
      var n = parseInt(arr[0]);
      //每首歌的时间长度
      var s = parseInt(arr[1]);
      //每张CD的容量
      var l = parseInt(arr[2]);
      //每张CD的歌曲数
      var mCount = Math.floor(l/(s+1));
      console.log(mCount);

      if(mCount%13 === 0){
        mCount--;
      }

      //求出需要的CD数目
      var CDCount = Math.ceil(n/mCount);

      if(CDCount==1 && n%13 == 0){
        CDCount++;
      }
      console.log(CDCount);
});