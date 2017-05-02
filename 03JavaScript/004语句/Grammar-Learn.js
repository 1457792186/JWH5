// JavaScript 语句
// JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么
// 下面的 JavaScript 语句向 id="demo" 的 HTML 元素输出文本 "Hello World"
document.getElementById("demo").innerHTML="Hello World";



// 分号 ;
// 分号用于分隔 JavaScript 语句
// 通常在每条可执行的语句结尾添加分号
// 使用分号的另一用处是在一行中编写多条语句
// 在 JavaScript 中,用分号来结束语句是可选的





// JavaScript 代码
// JavaScript 代码（或者只有 JavaScript）是 JavaScript 语句的序列
// 浏览器会按照编写顺序来执行每条语句
// 操作两个 HTML 元素
document.getElementById("myDemo").innerHTML="Hello World";
document.getElementById("myDIV").innerHTML="How are you?";





// JavaScript 代码块
// JavaScript 语句通过代码块的形式进行组合
// 块由左花括号开始,由右花括号结束
// 块的作用是使语句序列一起执行
// JavaScript 函数是将语句组合在块中的典型例子
function myFunction(){
document.getElementById("demo").innerHTML="Hello World";
document.getElementById("myDIV").innerHTML="How are you?";
}







// JavaScript 对大小写敏感
// 当编写 JavaScript 语句时,留意是否关闭大小写切换键
// 函数 getElementById 与 getElementbyID 是不同的;同样,变量 myVariable 与 MyVariable 也是不同的





// 空格
// JavaScript 会忽略多余的空格。可以向脚本添加空格,来提高其可读性。
// 下面的两行代码是等效的
var name="Hello";
var name = "Hello";






// 对代码行进行折行
// 可以在文本字符串中使用反斜杠对代码行进行换行
document.write("Hello \
World!");
// 不能像这样折行
/*
document.write \
("Hello World!");
*/ 






// JavaScript 是脚本语言。浏览器会在读取代码时,逐行地执行脚本代码。
// 而对于传统编程来说,会在执行前对所有代码进行编译






