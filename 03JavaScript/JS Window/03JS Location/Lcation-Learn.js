// JavaScript Window Location


// window.location 对象用于获得当前页面的地址 (URL),并把浏览器重定向到新的页面



// Window Location
// window.location 对象在编写时可不使用 window 这个前缀。

// 一些例子:
// location.hostname 返回 web 主机的域名
// location.pathname 返回当前页面的路径和文件名
// location.port 返回 web 主机的端口 （80 或 443）
// location.protocol 返回所使用的 web 协议（http:// 或 https://）





// Window Location Href
// location.href 属性返回当前页面的 URL。
// 实例:返回（当前页面的）整个 URL
document.write(location.href);
// 以上代码输出为当前页网址






// Window Location Pathname
// location.pathname 属性返回 URL 的路径名。
// 实例:返回当前 URL 的路径名
document.write(location.pathname);
// 以上代码输出为:URL路径名





// Window Location Assign
// location.assign() 方法加载新的文档
// 实例:加载一个新的文档
function newDoc(){
  window.location.assign("http://www.w3school.com.cn")
  }




