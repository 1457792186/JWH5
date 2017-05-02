// JavaScript Boolean（逻辑）对象

// Boolean（逻辑）对象用于将非逻辑值转换为逻辑值（true 或者 false）

// 检查逻辑值
var b1=new Boolean( 0)
var b2=new Boolean(1)
var b3=new Boolean("")
var b4=new Boolean(null)
var b5=new Boolean(NaN)
var b6=new Boolean("false")

document.write("0 是逻辑的 "+ b1 +"<br />")
document.write("1 是逻辑的 "+ b2 +"<br />")
document.write("空字符串是逻辑的 "+ b3 + "<br />")
document.write("null 是逻辑的 "+ b4+ "<br />")
document.write("NaN 是逻辑的 "+ b5 +"<br />")
document.write("字符串 'false' 是逻辑的 "+ b6 +"<br />")
// 检查逻辑对象是 true 还是 false





// 创建 Boolean 对象
// 使用关键词 new 来定义 Boolean 对象。
// 下面的代码定义了一个名为 myBoolean 的逻辑对象:
var myBoolean=new Boolean()
// 如果逻辑对象无初始值或者其值为 0、-0、null、""、false、undefined 或者 NaN,那么对象的值为 false。
// 否则,其值为 true（即使当自变量为字符串 "false" 时）

// 下面的所有的代码行均会创建初始值为 false 的 Boolean 对象
var myBoolean=new Boolean();
var myBoolean=new Boolean(0);
var myBoolean=new Boolean(null);
var myBoolean=new Boolean("");
var myBoolean=new Boolean(false);
var myBoolean=new Boolean(NaN);
// 下面的所有的代码行均会创初始值为 true 的 Boolean 对象
var myBoolean=new Boolean(1);
var myBoolean=new Boolean(true);
var myBoolean=new Boolean("true");
var myBoolean=new Boolean("false");
var myBoolean=new Boolean("Bill Gates");












// 可用于逻辑对象的属性和方法


// Boolean 对象:Boolean 对象表示两个值:"true" 或 "false"
/*
创建 Boolean 对象的语法:
new Boolean(value);	//构造函数
Boolean(value);		//转换函数
*/ 

// 参数:参数 value 由布尔对象存放的值或者要转换成布尔值的值


/*
返回值
当作为一个构造函数（带有运算符 new）调用时
Boolean() 将把它的参数转换成一个布尔值,并且返回一个包含该值的 Boolean 对象。
如果作为一个函数（不带有运算符 new）调用时
Boolean() 只将把它的参数转换成一个原始的布尔值,并且返回这个值。

如果省略 value 参数,或者设置为 0、-0、null、""、false、undefined 或 NaN
则该对象设置为 false。否则设置为 true（即使 value 参数是字符串 "false"）
*/ 

/*
Boolean 对象属性
属性				描述
constructor		返回对创建此对象的 Boolean 函数的引用
prototype		使有能力向对象添加属性和方法。
*/ 

/*
Boolean 对象方法
方法					描述
toSource()			返回该对象的源代码。
toString()			把逻辑值转换为字符串,并返回结果。
valueOf()			返回 Boolean 对象的原始值。
*/ 


/*
Boolean 对象描述
在 JavaScript 中,布尔值是一种基本的数据类型。
Boolean 对象是一个将布尔值打包的布尔对象。
Boolean 对象主要用于提供将布尔值转换成字符串的 toString() 方法。
当调用 toString() 方法将布尔值转换成字符串时（通常是由 JavaScript 隐式地调用）
JavaScript 会内在地将这个布尔值转换成一个临时的 Boolean 对象
然后调用这个对象的 toString() 方法
*/ 
