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





// 通过标签名查找HTML元素
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
// 查找id="main"的元素,然后查找"main"中的所有<p>元素
// 通过类名查找HTML元素在IE 5,6,7,8中无效




