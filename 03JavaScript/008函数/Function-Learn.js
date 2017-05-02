// JavaScript 函数语法
// 函数就是包裹在花括号中的代码块,前面使用了关键词 function
/*
function functionname(){
这里是要执行的代码
}
*/ 
// 当调用该函数时,会执行函数内的代码
// 可以在某事件发生时直接调用函数（比如当用户点击按钮时）
// 并且可由 JavaScript 在任何位置进行调用
// JavaScript 对大小写敏感。
// 关键词 function 必须是小写的,并且必须以与函数名称相同的大小写来调用函数





// 调用带参数的函数
// 在调用函数时,可以向其传递值,这些值被称为参数。
// 这些参数可以在函数中使用。
// 可以发送任意多的参数,由逗号 (,) 分隔
// myFunction(argument1,argument2)
// 当声明函数时,把参数作为变量来声明
/*
function myFunction(var1,var2){
这里是要执行的代码
}
*/ 
// 变量和参数必须以一致的顺序出现。
// 第一个变量就是第一个被传递的参数的给定的值,以此类推
function myFunction(name,job){
alert("Welcome " + name + ", the " + job);
}





// 带有返回值的函数
// 有时,会希望函数将值返回调用它的地方。
// 通过使用 return 语句就可以实现。
// 在使用 return 语句时,函数会停止执行,并返回指定的值
function myFunction(){
var x=5;
return x;
}
// 整个 JavaScript 并不会停止执行
// 仅仅是函数。JavaScript 将继续执行代码,从调用函数的地方
// 函数调用将被返回值取代
var myVar=myFunction();
// myVar 变量的值是 5,也就是函数 "myFunction()" 所返回的值

// 不把它保存为变量,也可以使用返回值
document.getElementById("demo").innerHTML=myFunction();
// "demo" 元素的 innerHTML 将成为 5,也就是函数 "myFunction()" 所返回的值




// 局部 JavaScript 变量
// 在 JavaScript 函数内部声明的变量（使用 var）是局部变量,所以只能在函数内部访问它。
// （该变量的作用域是局部的）。
// 可以在不同的函数中使用名称相同的局部变量,因为只有声明过该变量的函数才能识别出该变量。
// 只要函数运行完毕,本地变量就会被删除





// 全局 JavaScript 变量
// 在函数外声明的变量是全局变量,网页上的所有脚本和函数都能访问它





// JavaScript 变量的生存期
// JavaScript 变量的生命期从它们被声明的时间开始
// 局部变量会在函数运行以后被删除
// 全局变量会在页面关闭后被删除







// 向未声明的 JavaScript 变量来分配值
// 如果把值赋给尚未声明的变量,该变量将被自动作为全局变量声明
carname="Volvo";
// 将声明一个全局变量 carname,即使它在函数内执行



