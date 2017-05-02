// JavaScript Math（算数）对象


// Math（算数）对象的作用是:执行常见的算数任务

// 实例

// round()
// 如何使用 round()。
document.write(Math.round(0.60) + "<br />")
document.write(Math.round(0.50) + "<br />")
document.write(Math.round(0.49) + "<br />")
document.write(Math.round(-4.40) + "<br />")
document.write(Math.round(-4.60))


// random()
// 如何使用 random() 来返回 0 到 1 之间的随机数。
document.write(Math.random())



// max()
// 如何使用 max() 来返回两个给定的数中的较大的数。
// （在 ECMASCript v3 之前,该方法只有两个参数。）
document.write(Math.max(5,7) + "<br />")
document.write(Math.max(-3,5) + "<br />")
document.write(Math.max(-3,-5) + "<br />")
document.write(Math.max(7.25,7.30))



// min()
// 如何使用 min() 来返回两个给定的数中的较小的数。
// （在 ECMASCript v3 之前,该方法只有两个参数。）
document.write(Math.min(5,7) + "<br />")
document.write(Math.min(-3,5) + "<br />")
document.write(Math.min(-3,-5) + "<br />")
document.write(Math.min(7.25,7.30))





// Math 对象
// Math（算数）对象的作用是:执行普通的算数任务。
// Math 对象提供多种算数值类型和函数。无需在使用这个对象之前对它进行定义






/*
算数值

JavaScript 提供 8 种可被 Math 对象访问的算数值:
常数
圆周率
2 的平方根
1/2 的平方根
2 的自然对数
10 的自然对数
以 2 为底的 e 的对数
以 10 为底的 e 的对数

这是在 Javascript 中使用这些值的方法:（与上面的算数值一一对应）
Math.E
Math.PI
Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
Math.LOG2E
Math.LOG10E
*/ 






算数方法

// 除了可被 Math 对象访问的算数值以外,还有几个函数（方法）可以使用。
// 函数（方法）实例:
// 下面的例子使用了 Math 对象的 round 方法对一个数进行四舍五入。
document.write(Math.round(4.7))
// 上面的代码输出为:5


// 下面的例子使用了 Math 对象的 random() 方法来返回一个介于 0 和 1 之间的随机数:
document.write(Math.random())
// 上面的代码输出为:0.9370844220218102


// 下面的例子使用了 Math 对象的 floor() 方法和 random() 来返回一个介于 0 和 10 之间的随机数:
document.write(Math.floor(Math.random()*11)) 
// 上面的代码输出为:3









// 可用于算术对象的属性和方法

// Math 对象
// Math 对象用于执行数学任务。
/*
使用 Math 的属性和方法的语法:
var pi_value=Math.PI;
var sqrt_value=Math.sqrt(15);
*/ 
// Math 对象并不像 Date 和 String 那样是对象的类
// 因此没有构造函数 Math(),像 Math.sin() 这样的函数只是函数不是某个对象的方法。
// 无需创建它,通过把 Math 作为对象使用就可以调用其所有属性和方法。



/*
Math 对象属性
属性				描述
E				返回算术常量 e,即自然对数的底数（约等于2.718）。
LN2				返回 2 的自然对数（约等于0.693）。
LN10			返回 10 的自然对数（约等于2.302）。
LOG2E			返回以 2 为底的 e 的对数（约等于 1.414）。
LOG10E			返回以 10 为底的 e 的对数（约等于0.434）。
PI				返回圆周率（约等于3.14159）。
SQRT1_2			返回返回 2 的平方根的倒数（约等于 0.707）。
SQRT2			返回 2 的平方根（约等于 1.414）。
*/ 



/*
Math 对象方法
方法				描述
abs(x)			返回数的绝对值。
acos(x)			返回数的反余弦值。
asin(x)			返回数的反正弦值。
atan(x)			以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
atan2(y,x)		返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
ceil(x)			对数进行上舍入。
cos(x)			返回数的余弦。
exp(x)			返回 e 的指数。
floor(x)		对数进行下舍入。
log(x)			返回数的自然对数（底为e）。
max(x,y)		返回 x 和 y 中的最高值。
min(x,y)		返回 x 和 y 中的最低值。
pow(x,y)		返回 x 的 y 次幂。
random()		返回 0 ~ 1 之间的随机数。
round(x)		把数四舍五入为最接近的整数。
sin(x)			返回数的正弦。
sqrt(x)			返回数的平方根。
tan(x)			返回角的正切。
toSource()		返回该对象的源代码。
valueOf()		返回 Math 对象的原始值。
*/

