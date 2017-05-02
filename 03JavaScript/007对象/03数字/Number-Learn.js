// JavaScript Number 对象


// JavaScript 只有一种数字类型。
// 可以使用也可以不使用小数点来书写数字
var pi=3.14;    // 使用小数点
var x=34;       // 不使用小数点


// 极大或极小的数字可通过科学（指数）计数法来写
var y=123e5;    // 12300000
var z=123e-5;   // 0.00123




// 所有 JavaScript 数字均为 64 位
// JavaScript 不是类型语言。与许多其他编程语言不同,JavaScript 不定义不同类型的数字
// 比如整数、短、长、浮点等等。
// JavaScript 中的所有数字都存储为根为 10 的 64 位（8 比特）,浮点数






// 精度
// 整数（不使用小数点或指数计数法）最多为 15 位。
// 小数的最大位数是 17,但是浮点运算并不总是 100% 准确
var x=0.2+0.1;






// 八进制和十六进制
// 如果前缀为 0,则 JavaScript 会把数值常量解释为八进制数
// 如果前缀为 0 和 "x",则解释为十六进制数
var y=0377;
var z=0xFF;
// 绝不要在数字前面写零,除非需要进行八进制转换






/*
数字属性和方法
属性:
MAX VALUE
MIN VALUE
NEGATIVE INFINITIVE
POSITIVE INFINITIVE
NaN
prototype
constructor

方法:
toExponential()
toFixed()
toPrecision()
toString()
valueOf()
*/ 



/*
Number 对象属性
属性					描述
constructor			返回对创建此对象的 Number 函数的引用。
MAX_VALUE			可表示的最大的数。
MIN_VALUE			可表示的最小的数。
NaN					非数字值。
NEGATIVE_INFINITY	负无穷大,溢出时返回该值。
POSITIVE_INFINITY	正无穷大,溢出时返回该值。
prototype			使有能力向对象添加属性和方法。
*/ 






/*
Number 对象方法
方法				描述
toString		把数字转换为字符串,使用指定的基数。
toLocaleString	把数字转换为字符串,使用本地数字格式顺序。
toFixed			把数字转换为字符串,结果的小数点后有指定位数的数字。
toExponential	把对象的值转换为指数计数法。
toPrecision		把数字格式化为指定的长度。
valueOf			返回一个 Number 对象的基本数字值。
*/ 






/*
Number 对象描述
在 JavaScript 中,数字是一种基本的数据类型。
JavaScript 还支持 Number 对象,该对象是原始数值的包装对象。
在必要时,JavaScript 会自动地在原始数据和对象之间转换。
在 JavaScript 1.1 中,可以用构造函数 Number() 明确地创建一个 Number 对象,
尽管这样做并没有什么必要。
构造函数 Number() 可以不与运算符 new 一起使用,而直接作为转化函数来使用。
以这种方式调用 Number() 时,它会把自己的参数转化成一个数字,
然后返回转换后的原始数值（或 NaN）。
构造函数通常还用作 5 个有用的数字常量的占位符,
这5个有用的数字常量分别是可表示的最大数、可表示的最小数、正无穷大、负无穷大和特殊的NaN值。
注意,这些值是构造函数 Number() 自身的属性,而不是单独的某个 Number 对象的属性
*/ 
// 比如这样使用属性 MAX_VALUE 是正确的:
var big = Number.MAX_VALUE
// 但是这样是错误的:
var n= new Number(2);
var big = n.MAX_VALUE
/*
作为比较,看一下 toString() 和 Number 对象的其他方法
它们是每个 Number 对象的方法,而不是 Number() 构造函数的方法。
在必要时,JavaScript 会自动地把原始数值转化成 Number 对象,
调用 Number 方法的既可以是 Number 对象,也可以是原始数字值
*/ 
var n = 123;
var binary_value = n.toString(2);



