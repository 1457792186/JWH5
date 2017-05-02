// JavaScript 变量


// 变量是存储信息的容器
var x=2;
var y=3;
var z=x+y;
// 可以把变量看做存储数据的容器



// JavaScript 变量
// 变量可以使用短名称（比如 x 和 y）,也可以使用描述性更好的名称（比如 age, sum, totalvolume）
// 变量必须以字母开头
// 变量也能以 $ 和 _ 符号开头（不过不推荐这么做）
// 变量名称对大小写敏感（y 和 Y 是不同的变量）
// JavaScript 语句和 JavaScript 变量都对大小写敏感




// JavaScript 数据类型
// JavaScript 变量还能保存其他数据类型,比如文本值 (name="Bill Gates")
// 在 JavaScript 中,类似 "Bill Gates" 这样一条文本被称为字符串
// JavaScript 变量有很多种类型
// 向变量分配文本值时,应该用双引号或单引号包围这个值
// 向变量赋的值是数值时,不要使用引号。如果用引号包围数值,该值会被作为文本来处理
var pi=3.14;
var name="Bill Gates";
var answer='Yes I am!';




// 声明（创建） JavaScript 变量
// 在 JavaScript 中创建变量通常称为“声明”变量
// 使用 var 关键词来声明变量
var carname;
// 变量声明之后,该变量是空的（它没有值）
// 如需向变量赋值,使用等号
carname="Volvo";
// 不过,也可以在声明变量时对其赋值
var carname="Volvo";
// 好的编程习惯是,在代码开始处,统一对需要的变量进行声明




// 一条语句,多个变量。
// 可以在一条语句中声明很多变量。该语句以 var 开头,并使用逗号分隔变量即可
var name="Gates", age=56, job="CEO";
// 声明也可横跨多行
var name="Gates",
age=56,
job="CEO";





// Value = undefined
// 在计算机程序中,经常会声明无值的变量。未使用值来声明的变量,其值实际上是 undefined
// 在执行过以下语句后,变量 carname 的值将是 undefined
var carname;





// 重新声明 JavaScript 变量
// 如果重新声明 JavaScript 变量,该变量的值不会丢失
// 在以下两条语句执行后,变量 carname 的值依然是 "Volvo"
var carname="Volvo";
var carname;






// JavaScript 算数
// 可以通过 JavaScript 变量来做算数,使用的是 = 和 + 这类运算符















