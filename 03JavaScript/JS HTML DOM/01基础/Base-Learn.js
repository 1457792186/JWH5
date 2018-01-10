// JavaScript HTML DOM


// 通过 HTML DOM,可访问 JavaScript HTML 文档的所有元素

// HTML DOM （文档对象模型）
// 当网页被加载时,浏览器会创建页面的文档对象模型（Document Object Model）。
// HTML DOM 模型被构造为对象的树



// 通过可编程对象模型,JavaScript获得了足够的能力来创建动态的HTML
// JavaScript能够改变页面中的所有HTML元素
// JavaScript能够改变页面中的所有HTML属性
// JavaScript能够改变页面中的所有CSS样式
// JavaScript能够对页面中的所有事件做出反应








// 查找HTML元素
// 在DOM中查找HTML元素的最简单的方法是通过使用元素的id
var x = document.getElementById("intro");
// 查找id="intro"的元素
// 如果找到该元素，则该方法将以对象（在x中）的形式返回该元素
// 如果未找到该元素，则x将包含null










// 通过ID获取元素
// 通过标签名查找HTML元素
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
// 查找id="main"的元素,然后查找"main"中的所有<p>元素
// 通过类名查找HTML元素在IE 5,6,7,8中无效











// innerHTML 属性（获取或替换html内容）
/*
innerHTML 属性用于获取或替换 HTML 元素的内容。

语法:
Object.innerHTML
注意:

1.Object是获取的元素对象，如通过document.getElementById("ID")获取的元素。
2.注意书写，innerHTML区分大小写
*/ 

/*例子：
1. 通过id获取h2标签元素,并赋给变量mychar。
2. 使用innerHTML属性，将获取的h2标签内容修改为"Hello world!"
*/ 
// <body>
// <h2 id="con">javascript</H2>
// <p> JavaScript是一种基于对象、事件驱动的简单脚本语言，嵌入在HTML文档中，由浏览器负责解释和执行，在网页上产生动态的显示效果并实现与用户交互功能。</p>
// <script type="text/javascript">
  var mychar= document.getElementById("con");//通过id获取h2标签元素,并赋给变量mychar
  document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
  mychar.innerHTML = "Hello world!";
//   使用innerHTML属性，将获取的h2标签内容修改为"Hello world!"
  document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
// </script>
// </body>












// 改变 HTML 样式
/*
语法:

Object.style.property=new style;
注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

基本属性表（property）(部分):
属性 				描述
backgroundColor		元素的背景颜色
height				元素的高度
width				元素的宽度
color 				文本的颜色
font 				在一行设置所有的字体属性
fontFamily 			元素的字体系列
fontSize 			元素的字体大小
*/ 

/*例子：
改变下HTML中元素的CSS样式:
1. 修改h2标签的样式，将颜色设为红色。
2. 修改h2标签的样式，将背景颜色设为灰色(#CCC)。
3. 修改h2标签的样式，将宽设为300px。
*/ 
// <body>
//   <h2 id="con">I love JavaScript</H2>
//   <p> JavaScript使网页显示动态效果并实现与用户交互功能。</p>
//   <script type="text/javascript">
    var mychar= document.getElementById("con");
    mychar.style.color="red";
    mychar.style.backgroundColor = "#CCC";
    mychar.style.width="300";

//   </script>
// </body>













// 显示和隐藏（display属性）
/*
网页中经常会看到显示和隐藏的效果，可通过display属性来设置。

语法：
Object.style.display = value
注意:Object是获取的元素对象，如通过document.getElementById("id")获取的元素。

value取值:
none	隐藏
block 	显示
*/ 
function hidetext() {  
		var mychar = document.getElementById("con");
        	mychar.style.display = none;
		}  

function showtext()  {
		var mychar = document.getElementById("con");
        mychar.style.display = block;
		}
// 对应Html内存在id为con的元素











// 控制类名（className 属性）
/*
className 属性设置或返回元素的class 属性。

语法：

object.className = classname
作用:

1.获取元素的class 属性
2. 为网页内的某个元素指定一个css样式来更改该元素的外观
*/ 

// <!DOCTYPE HTML>
// <html>
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=gb2312">
// <title>className属性</title>
// <style>
 //    body{ font-size:16px;}
 //    .one{
	// 	border:1px solid #eee;
	// 	width:230px;
	// 	height:50px;
	// 	background:#ccc;
	// 	color:red;
 //    }
	// .two{
	// 	border:1px solid #ccc;
	// 	width:230px;
	// 	height:50px;
	// 	background:#9CF;
	// 	color:blue;
	// }
// 	</style>
// </head>
// <body>
//     <p id="p1" > JavaScript使网页显示动态效果并实现与用户交互功能。</p>
//     <input type="button" value="添加样式" onclick="add()"/>
// 	<p id="p2" class="one">JavaScript使网页显示动态效果并实现与用户交互功能。</p>
//     <input type="button" value="更改外观" onclick="modify()"/>

// 	<script type="text/javascript">
	   function add(){
	      var p1 = document.getElementById("p1");
	      p1.className = "one";
	   }
	   function modify(){
	      var p2 = document.getElementById("p2");
	      p2.className = "two";
	   }
// 	</script>
// </body>
// </html>













































