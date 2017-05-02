// JavaScript 计时




// 通过使用 JavaScript,有能力做到在一个设定的时间间隔之后来执行代码
// 而不是在函数被调用后立即执行。称之为计时事件




/*
JavaScript 计时事件
在 JavaScritp 中使用计时事件是很容易的,两个关键方法是:
setTimeout()
未来的某时执行代码
clearTimeout()
取消setTimeout()
*/ 






// setTimeout()
/*
语法
var t=setTimeout("javascript语句",毫秒)
setTimeout() 方法会返回某个值。
在上面的语句中,值被储存在名为 t 的变量中。
假如希望取消这个 setTimeout(),你可以使用这个变量名来指定它。

setTimeout() 的第一个参数是含有 JavaScript 语句的字符串。
这个语句可能诸如 "alert('5 seconds!')",或者对函数的调用,诸如 alertMsg()"。
*/ 
// 第二个参数指示从当前起多少毫秒后执行第一个参数。
// 1000 毫秒等于一秒。


// 当下面这个例子中的按钮被点击时,一个提示框会在5秒中后弹出
function timedMsg(){
 var t=setTimeout("alert('5 seconds!')",5000)
 }

//  无穷循环
// 要创建一个运行于无穷循环中的计时器,需要编写一个函数来调用其自身。
// 在下面的例子中,当按钮被点击后,输入域便从 0 开始计数
function timedCount(){
 document.getElementById('txt').value=c
 c=c+1
 t=setTimeout("timedCount()",1000)
 }






/*
clearTimeout()
语法
clearTimeout(setTimeout_variable)
*/ 
// 下面的例子和无穷循环的例子相似。
// 唯一的不同是,现在添加了一个 "Stop Count!" 按钮来停止这个计数器
var c=0
var t

function timedCount(){
 document.getElementById('txt').value=c
 c=c+1
 t=setTimeout("timedCount()",1000)
 }

function stopCount(){
 clearTimeout(t)
 }














// 实例

// 简单的计时
function timedMsg(){
var t=setTimeout("alert('5 秒！')",5000)
}
// 单击本例中的按钮后,会在 5 秒后弹出一个警告框。











// 另一个简单的计时
function timedText(){
var t1=setTimeout("document.getElementById('txt').value='2 秒'",2000)
var t2=setTimeout("document.getElementById('txt').value='4 秒'",4000)
var t3=setTimeout("document.getElementById('txt').value='6 秒'",6000)
}
// 本例中的程序会执行 2 秒、4 秒和 6 秒的计时。










// 在一个无穷循环中的计时事件
var c=0
var t
function timedCount(){
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()",1000)
}
// 在本例中,单击开始计时按钮后,程序开始从 0 以秒计时。










// 带有停止按钮的无穷循环中的计时事件
var c=0
var t
function timedCount(){
document.getElementById('txt').value=c
c=c+1
t=setTimeout("timedCount()",1000)
}

function stopCount(){
c=0;
setTimeout("document.getElementById('txt').value=0",0);
clearTimeout(t);
}
// 在本例中,点击计数按钮后根据用户输入的数值开始倒计时,点击停止按钮停止计时。










// 使用计时事件制作的钟表
function startTime(){
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// add a zero in front of numbers<10
m=checkTime(m)
s=checkTime(s)
document.getElementById('txt').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i){
if (i<10) 
  {i="0" + i}
  return i
}
// 一个 JavaScript 小时钟






