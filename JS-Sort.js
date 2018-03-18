

/*js插入排序实现数组的排序
  时间复杂度：O[n^2];
  最好情况下时间复杂度:O[n]
*/
function insertSort(arr){

  var i;
  var j;

  for(i=2;i<=arr.length;i++){
    if(arr[i] < arr[i-1]){
      arr[0] = arr[i];
      for(j=i-1;arr[j]>arr[0];j--){
        arr[j+1] = arr[j]
      }
      arr[j+1] = arr[0];
    }
  }

  return arr;

}
//测试
var arr = [,1,5,6,3];
console.log(insertSort(arr));
var arr1 = arr.splice(0,1);  //q切割掉第一个数组元素
console.log(arr);   //结果:[1,3,5,6]

/*js实现数组的排序:希尔排序
  时间复杂度：O[n^3/2];
  插入排序的基础上改造
*/

function shellSort(arr){

  var i;
  var j;
  var temp;  //临时存放元素
  var gap = arr.length;
  do{
    gap = parseInt(gap/3)+1;
    for(i=gap; i < arr.length; i++){
      if(arr[i] < arr[i-gap]){
        temp = arr[i];
        for(j=i-gap; arr[j]>temp;j-=gap){
          arr[j+gap] = arr[j]
        }
        arr[j+gap] = temp;
      }
    }
  }while(gap>1);
  return arr;
}
//测试
var arr = [5, 2, 6, 0, 3, 9, 1, 7, 4, 8];
var arr2 = shellSort(arr);
console.log(arr2);

/*
  冒泡排序：自顶向下冒泡
  时间复杂度：O[n^2]
*/

function BubbleSort1(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<=arr.length;j++){
      if(arr[i] > arr[j]){
        var temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}
//测试
var arr2 = [1,5,3,2,4];
console.log(BubbleSort1(arr2));

/*
   冒泡排序：自下向上
   时间复杂度：O[n^2]
*/

function BubbleSort2(arr2){
  for(var i=0;i<arr2.length;i++){
    for(var j = arr2.length-1;j>=i;j--){
      if(arr2[j] > arr2[j+1]){
        var temp;
        temp = arr2[j];
        arr2[j] = arr2[j+1];
        arr2[j+1] = temp;
      }
    }
  }
  return arr2;
}

//测试
var arr3 = [5,6,4,3];
console.log(BubbleSort2(arr3));

/*
   冒泡排序优化
   解决问题：假如给定一个有序的排列数组，不用像上面两种方法再遍历一次或多次
   时间复杂度：O[n^2]
*/

function BubbleSort3(arr){

  var flag = true;   //定义一个标志，用来作为判断的跳出

  for(var i=0;i<arr.length && flag;i++){
    flag = false;   //初始化

    for(var j=arr.length-1;j>=i;j--){
      if(arr[j] > arr[j+1]){
        var temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = true;
      }
    }

  }

  return arr;

}
//测试
var arr4 = [5,3,6,1,2];
console.log(BubbleSort3(arr4));

/*
  选择排序
  时间复杂度：O[n^2]
*/
function choooseSort(arr){
  var min;//声明一个数组中的最小下标

  for(var i=0;i<arr.length;i++){
    min = i;
    for(var j=i+1;j<=arr.length;j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    if(i != min){
      var temp;
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

//测试
var arr5 = [2,3,1,4,6];
console.log(choooseSort(arr5));

/*

   删除指定元素

*/

function listDelete(arr,index){
  var key;
  if(index > arr.length){
    console.log('超出指定的数组长度');
    return false;
  }
  for(key = index;key<arr.length;key++){
    arr[key] = arr[key+1];
  }
  arr.length--;
  return arr;
}

var arr1 = [1,2,3,4,5];
console.log(listDelete(arr1,8));


/*
   插入
*/
function listInsert(arr,index,elem){
  var i;
  for(i=arr.length-1;i>=index;i--){
    arr[i+1] = arr[i]
  }
  arr[index] = elem;
  return arr;
}
var arr6 = [1,2,3,4];
console.log(listInsert(arr6,1,5));

