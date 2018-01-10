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




// JavaScript-确认（confirm 消息对话框）
function rec(){
    var mymessage=  confirm("你是女士?");;
    if(mymessage==true)
    {
    	document.write("你是女士!");
    }
    else
    {
        document.write("你是男士!");
    }
  }  





// JavaScript-警告（alert 消息对话框）
function rec(){
    var mychar="I love JavaScript";
	alert(mychar);
  }
/*Html内调用对应
<body>
    <input name="button" type="button" onClick="rec()" value="点击我，弹出对话框" />
</body>
*/ 




// JavaScript-提问（prompt 消息对话框）

/*
弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框
语法:

prompt(str1, str2);
参数说明：

str1: 要显示在消息对话框中的文本，不可修改
str2：文本框中的内容，可以修改
返回值:

1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
*/ 
function rec(){
	var score; //score变量，用来存储用户输入的成绩值。
	score =  prompt("请输入你的成绩:");
	if(score>=90)
	{
	   document.write("你很棒!");
	}
	else if(score>=75)
    {
	   document.write("不错吆!");
	}
	else if(score>=60)
    {
	   document.write("要加油!");
    }
    else
	{
       document.write("要努力了!");
	}
  }






// JavaScript-打开新窗口（window.open）

/*
open() 方法可以查找一个已经存在或者新建的浏览器窗口。

语法：

window.open([URL], [窗口名称], [参数字符串])
参数说明:

URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
窗口名称：可选参数，被打开窗口的名称。
    1.该名称由字母、数字和下划线字符组成。
    2."_top"、"_blank"、"_self"具有特殊意义的名称。
       _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页
    3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
   4.name 不能包含有空格。
参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。

参数说明：
参数 		值			说明
top 		number		窗口离屏幕顶部距离
left		number		窗口离屏幕左边距离
width		number		窗口宽度
height		number		窗口高度
menubar		yes,no		窗口有无菜单
toolbar		yes,no		窗口有无工具条
scrollbars 	yes,no		窗口有无滚动条
status		yes,no		窗口有无状态栏
*/ 

// 打开http://www.imooc.com网页，将在新窗体中打开，宽为600，高为400，距屏顶100像素，屏左0像素。当点击按钮时，打开新窗口
function Wopen(){
      window.open('http://www.imooc.com','_blank','width=600,height=400,top=100,left=0,menubar=no,toolbar=no, status=no,scrollbars=yes')

  } 





// JavaScript-关闭窗口（window.close）
/*
close()关闭窗口

用法：
window.close();   //关闭本窗口
或
<窗口对象>.close();   //关闭指定的窗口
*/ 

function wClose(){
      var mywin=window.open("http://www.imooc.com");
 		mywin.close();
  } 




















