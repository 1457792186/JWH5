// JavaScript 消息框


// 可以在 JavaScript 中创建三种消息框:警告框、确认框、提示框






// 警告框
// 警告框经常用于确保用户可以得到某些信息。
// 当警告框出现后,用户需要点击确定按钮才能继续进行操作。
// 语法:alert("文本")
function disp_alert(){
alert("我是警告框！！")
}
// 带有折行的警告框
function disp_alert(){
alert("再次向您问好！在这里,我们向您演示" + '\n' + "如何向警告框添加折行。")
}




// 确认框
// 确认框用于使用户可以验证或者接受某些信息。
// 当确认框出现后,用户需要点击确定或者取消按钮才能继续进行操作。
// 如果用户点击确认,那么返回值为 true。如果用户点击取消,那么返回值为 false。
// 语法:confirm("文本")
function show_confirm(){
var r=confirm("Press a button!");
if (r==true){
  alert("You pressed OK!");
  }
else{
  alert("You pressed Cancel!");
  }
}








// 提示框
// 提示框经常用于提示用户在进入页面前输入某个值。
// 当提示框出现后,用户需要输入某个值,然后点击确认或取消按钮才能继续操纵。
// 如果用户点击确认,那么返回值为输入的值。如果用户点击取消,那么返回值为 null。
// 语法:prompt("文本","默认值")
function disp_prompt(){
  var name=prompt("请输入您的名字","Bill Gates")
  if (name!=null && name!=""){
    document.write("你好！" + name + " 今天过得怎么样？")
    }
  }



