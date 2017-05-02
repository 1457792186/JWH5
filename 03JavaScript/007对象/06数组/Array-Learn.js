// JavaScript Array（数组）对象



// 数组对象的作用是:使用单独的变量名来存储一系列的值

// 实例

// 创建数组
// 创建数组,为其赋值,然后输出这些值。
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"

for (i=0;i<mycars.length;i++){
document.write(mycars[i] + "<br/>")
}



// For...In 声明
// 使用 for...in 声明来循环输出数组中的元素。
var x
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"

for (x in mycars){
document.write(mycars[x] + "<br />")
}



// 合并两个数组 - concat()
// 如何使用 concat() 方法来合并两个数组。
var arr = new Array(3)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

var arr2 = new Array(3)
arr2[0] = "James"
arr2[1] = "Adrew"
arr2[2] = "Martin"

document.write(arr.concat(arr2))



// 用数组的元素组成字符串 - join()
// 如何使用 join() 方法将数组的所有元素组成一个字符串。
var arr = new Array(3);
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join());
document.write("<br />");
document.write(arr.join("."));



// 文字数组 - sort()
// 如何使用 sort() 方法从字面上对数组进行排序。
var arr = new Array(6)
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"
arr[3] = "James"
arr[4] = "Adrew"
arr[5] = "Martin"

document.write(arr + "<br />")
document.write(arr.sort())



// 数字数组 - sort()
// 如何使用 sort() 方法从数值上对数组进行排序。
function sortNumber(a, b){
return a - b
}

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

document.write(arr + "<br />")
document.write(arr.sort(sortNumber))








// 定义数组
// 数组对象用来在单独的变量名中存储一系列的值。
// 使用关键词 new 来创建数组对象。
// 下面的代码定义了一个名为 myArray 的数组对象
var myArray=new Array()

// 有两种向数组赋值的方法（可以添加任意多的值,就像可以定义你需要的任意多的变量一样）
// 1:
var mycars=new Array()
mycars[0]="Saab"
mycars[1]="Volvo"
mycars[2]="BMW"
// 可以使用一个整数自变量来控制数组的容量
var mycars=new Array(3)
mycars[0]="Saab"
mycars[1]="Volvo"
mycars[2]="BMW"



// 2:
var mycars=new Array("Saab","Volvo","BMW")
// 如果需要在数组内指定数值或者逻辑值
// 那么变量类型应该是数值变量或者布尔变量,而不是字符变量




// 访问数组
// 通过指定数组名以及索引号码,可以访问某个特定的元素。
// 下面是代码行:
document.write(mycars[0])
// 下面是输出:Saab





// 修改已有数组中的值
// 如需修改已有数组中的值,只要向指定下标号添加一个新值即可:
mycars[0]="Opel";
// 代码:
document.write(mycars[0]);
// 将输出:Opel







// 可用于数组对象的属性和方法

// JavaScript Array 对象
// Array 对象
// Array 对象用于在单个的变量中存储多个值
/*
创建 Array 对象的语法:
new Array();
new Array(size);
new Array(element0, element1, ..., elementn);
*/ 

//参数
// 参数 size 是期望的数组元素个数。返回的数组,length 字段将被设为 size 的值。
// 参数 element ..., elementn 是参数列表。
// 当使用这些参数来调用构造函数 Array() 时,新创建的数组的元素就会被初始化为这些值。
// 它的 length 字段也会被设置为参数的个数 

// 返回值
// 返回新创建并被初始化了的数组。
// 如果调用构造函数 Array() 时没有使用参数,那么返回的数组为空,length 字段为 0。
// 当调用构造函数时只传递给它一个数字参数,该构造函数将返回具有指定个数、元素为 undefined 的数组。
// 当其他参数调用 Array() 时,该构造函数将用参数指定的值初始化数组。
// 当把构造函数作为函数调用,不使用 new 运算符时,它的行为与使用 new 运算符调用它时的行为完全一样


/*
Array 对象属性
属性					描述
constructor			返回对创建此对象的数组函数的引用。
length				设置或返回数组中元素的数目。
prototype			使有能力向对象添加属性和方法。
*/ 


/*
Array 对象方法
方法					描述
concat()			连接两个或更多的数组,并返回结果。
join()				把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop()				删除并返回数组的最后一个元素
push()				向数组的末尾添加一个或更多元素,并返回新的长度。
reverse()			颠倒数组中元素的顺序。
shift()				删除并返回数组的第一个元素
slice()				从某个已有的数组返回选定的元素
sort()				对数组的元素进行排序
splice()			删除元素,并向数组添加新元素。
toSource()			返回该对象的源代码。
toString()			把数组转换为字符串,并返回结果。
toLocaleString()	把数组转换为本地数组,并返回结果。
unshift()			向数组的开头添加一个或更多元素,并返回新的长度。
valueOf()			返回数组对象的原始值
*/ 






