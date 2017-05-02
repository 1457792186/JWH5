// JavaScript 错误 - Throw、Try 和 Catch

// try 语句测试代码块的错误。
// catch 语句处理错误。
// throw 语句创建自定义错误。


// JavaScript 抛出错误
// 当错误发生时,当事情出问题时,JavaScript 引擎通常会停止,并生成一个错误消息。
// 描述这种情况的技术术语是:JavaScript 将抛出一个错误。




// JavaScript 测试和捕捉
// try 语句允许我们定义在执行时进行错误测试的代码块。
// catch 语句允许我们定义当 try 代码块发生错误时,所执行的代码块。
// JavaScript 语句 try 和 catch 是成对出现的。
try{
  //在这里运行代码
  }
catch(err){
  //在这里处理错误
  }
// 例子:
function message(){
try{
  adddlert("Welcome guest!");
  }
catch(err){
  txt="There was an error on this page.\n\n";
  txt+="Error description: " + err.message + "\n\n";
  txt+="Click OK to continue.\n\n";
  alert(txt);
  }
}






// Throw 语句
// throw 语句允许我们创建自定义错误。
// 正确的技术术语是:创建或抛出异常（exception）。
// 如果把 throw 与 try 和 catch 一起使用,那么能够控制程序流,并生成自定义的错误消息。
// 语法:throw exception
// 异常可以是 JavaScript 字符串、数字、逻辑值或对象

// 本例检测输入变量的值。如果值是错误的,会抛出一个异常（错误）。
// catch 会捕捉到这个错误,并显示一段自定义的错误消息
function myFunction(){
try{
  var x=document.getElementById("demo").value;
  if(x=="")    throw "empty";
  if(isNaN(x)) throw "not a number";
  if(x>10)     throw "too high";
  if(x<5)      throw "too low";
  }
catch(err){
  var y=document.getElementById("mess");
  y.innerHTML="Error: " + err + ".";
  }
}





























































