//获取HTML元素
document.getElementById("intro"); //通过 id 查找 HTML 元素
document.getElementsByTagName("p");//通过标签名查找 HTML 元素  得到的是一个数组
document.getElementsByClassName("intro");//通过类名找到 HTML 元素
document.querySelector();  //获取指定选择器的第一个元素对象 如  .box  #id  
document.querySelectorAll(); // 获取指定选择器的所有元素对象
document.body; //获取<body></body>元素
document.documentElement; //获取<html></html>元素



//改变元素内容
element.innerText //不识别标签 不保留空格和换行
element.innerHtml //识别标签 保留空格和换行  （基本只用这个）  input表单不能用 
input.value  //表单用value来改变内容
element.style.属性 //修改样式属性 属性名用驼峰命名法




//节点
Node.parentNode  //返回某节点的最近的一个父节点 没有就返回null

Node.childNodes // 返回所有子节点 包括元素节点 文本节点（空行）等
Node.children //返回所有子元素节点 （好用 常用）
Node.firstChild //返回第一个子节点
Node.lastChild //返回最后一个子节点
Node.firstElementChlid  //返回第一个子元素节点  (存在兼容性问题   IE9以上)
Node.lastElementChlid     //返回最后一个子元素节点 (存在兼容性问题)
Node.children[0]   //返回第一个子元素节点
Node.children[Node.children.length - 1]  //返回最后一个子元素节点

Node.nextSibling //下一个兄弟节点
Node.previousSibling //上一个兄弟节点
Node.nextElementSibling //下一个兄弟元素节点
Node.previousElementSibling //上一个兄弟元素节点 

document.createElement();//创建元素节点
Node.appendChlid()  //添加节点  追加到后面
Node.insertBefore(chlid,指定元素) //添加节点 到指定元素之前 

Node.removeChlid() //删除子节点

Node.cloneNode()   //复制节点  若()为空或为(false)，只复制标签不复制内容;  若(true) 完整复制







