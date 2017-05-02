// JavaScript 比较和逻辑运算符


// 比较和逻辑运算符用于测试 true 或 false
// 比较运算符
// 比较运算符在逻辑语句中使用,以测定变量或值是否相等。
// 给定 x=5,下面的表格解释了比较运算符:
/*
运算符			描述				例子
==				等于				x==8 为 false
===				全等（值和类型）	x===5 为 true;x==="5" 为 false
!=				不等于			x!=8 为 true
>				大于				x>8 为 false
<				小于				x<8 为 true
>=				大于或等于		x>=8 为 false
<=				小于或等于		x<=8 为 true
*/ 
// 如何使用:可以在条件语句中使用比较运算符对值进行比较,然后根据结果来采取行动
if (age<18) document.write("Too young");






// 逻辑运算符
// 逻辑运算符用于测定变量或值之间的逻辑。
// 给定 x=6 以及 y=3,下表解释了逻辑运算符:
/*
运算符		描述			例子
&&			and			(x < 10 && y > 1) 为 true
||			or			(x==5 || y==5) 为 false
!			not			!(x==y) 为 true
*/ 




// 条件运算符
// JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符:
// variablename=(condition)?value1:value2 
greeting=(visitor=="PRES")?"Dear President ":"Dear ";
// 如果变量 visitor 中的值是 "PRES",则向变量 greeting 赋值 "Dear President "
// 否则赋值 "Dear"
 














// JavaScript If...Else 语句
// 条件语句用于基于不同的条件来执行不同的动作
/*
条件语句
通常在写代码时,总是需要为不同的决定来执行不同的动作。可以在代码中使用条件语句来完成该任务。
在 JavaScript 中,可使用以下条件语句:
if 语句 - 只有当指定条件为 true 时,使用该语句来执行代码
if...else 语句 - 当条件为 true 时执行代码,当条件为 false 时执行其他代码
if...else if....else 语句 - 使用该语句来选择多个代码块之一来执行
switch 语句 - 使用该语句来选择多个代码块之一来执行
*/ 







// JavaScript Switch 语句
/*
使用 switch 语句来选择要执行的多个代码块之一

switch(n)
{
case 1:
  执行代码块 1
  break;
case 2:
  执行代码块 2
  break;
default:
  n 与 case 1 和 case 2 不同时执行的代码
}
*/ 









// JavaScript For 循环
/*
不同类型的循环
JavaScript 支持不同类型的循环：
for - 循环代码块一定的次数
for/in - 循环遍历对象的属性
while - 当指定的条件为 true 时循环指定的代码块
do/while - 同样当指定的条件为 true 时循环指定的代码块
*/ 









// JavaScript Break 和 Continue 语句
/*
Break 语句
break 语句用于跳出 switch() 语句。
break 语句可用于跳出循环。
break 语句跳出循环后,会继续执行该循环之后的代码（如果有的话）
*/ 
for (i=0;i<10;i++){
  if (i==3) break;
  x=x + "The number is " + i + "<br>";
  }
// 该循环会运行到 i=3 
/*
Continue 语句
continue 语句中断循环中的迭代,如果出现了指定的条件,然后继续循环中的下一个迭代
*/ 
for (i=0;i<=10;i++){
 if (i==3) continue;
  x=x + "The number is " + i + "<br>";
 }
// 该循环会跳过 i=3 



