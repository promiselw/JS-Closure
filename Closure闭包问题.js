

/* 闭包的概念：
     通俗理解：
          函数里面嵌套函数，该内部函数会继承上一级函数的变量值。
          当在外部调用时，如果闭包函数使用了上一级的值，它不会在函数调用结束而被垃圾回收
          机制回收掉。
*/

//第一种情况(闭包)
function addMethod() {
  var num = 99;

  //全局对象中
  add = function() {
    num++;           //引入外部变量num
  };
  return function answer() {
    console.log(num);
  }
}

//测试
var test = addMethod();  //获取的return的返回值
console.log(test.toString());

console.log('-----------------');
test();  //执行该函数，返回的值为99
add();   //调用，执行num++
test();  //结果100
add();   //调用，num++
test();  //结果101

//修改上面的函数
function addMethod2() {
  var num = 99;

  //全局对象中
  add1 = function() {
    num = 250;       //此时的变量时该函数自己拥有的变量
    num++;
  };
  return function answer() {
    console.log(num);
  }
}

var test2 = addMethod2();

console.log('-------第二次测试----------');
test2();  //执行该函数，返回的值为99,第一次返回99的值，涉及到函数调用执行问题，因为此时的add1()还为调用，所以不存在作用域的问题
add1();   //调用，执行num++
test2();  //结果251
add1();   //调用，num++
test2();  //结果251

//第三次测试(作用域引入)

function addMethod3() {
  var num = 99;

  //全局对象中
  add1 = function() {
    num = 250;       //此时的变量时该函数自己拥有的变量
    num++;
  };

  add1();

  return function answer() {
    console.log(num);
  }
}

var test3 = addMethod3();
console.log('--------第三次测试结果-------------');
test3();   //此时输出的值为251,涉及到了作用域的问题，因为add1()函数中的num为全局变量，它会顺着自己的层级向上查找，遇到自己相同的变量名后，看其是否有var声明，然后覆盖
test3();   //251
test3();   //251

/*闭包注意的问题：
          1.由于闭包会使得函数中的变量保存在内存中，内存消耗很大，因此不能滥用包，否则会造成网页的性能
问题，在IE中可能导致内存泄漏。
          解决方法：
                在退出函数之前，将不使用的局部变量全部删除。
          2.闭包会在父函数的外部，改变父函数内部变量的值。
    概念：
        当内部函数在定义它的作用域的外部被引用时，就创建了该内部函数的闭包，如果内部函数引用了位于外部函数的变量
        当外部函数调用完毕后，这些变量在内存中不会在释放，以为闭包需要他们。
*/
