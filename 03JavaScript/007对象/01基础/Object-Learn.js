// 创建 JavaScript 对象
// JavaScript 中的所有事物都是对象:字符串、数字、数组、日期，等等
// 在 JavaScript 中,对象是拥有属性和方法的数据


// 本例创建名为 "person" 的对象,并为其添加了四个属性
// 声明新变量时,可以使用关键词 "new" 来声明其类型
person = new Object();
// var person = new Object();//与上一行相同
person.firstname = "Bill";
person.lastname = "Gates";
person.age = 56;
person.eyecolor = "blue";



// 访问对象的属性
// 访问对象属性的语法是:objectName.propertyName
var message="Hello World!";
var x=message.length
// x为message的长度







// 访问对象的方法
// 可以通过下面的语法调用方法:objectName.methodName()
// 这个例子使用 String 对象的 toUpperCase() 方法来把文本转换为大写
var message="Hello world!";
var x=message.toUpperCase();
// x为大写的message,即:HELLO WORLD!







// 在面向对象的语言中,使用 camel-case 标记法的函数是很常见的。
// 会经常看到 someMethod() 这样的函数名,而不是 some_method()



