//JS基础语法

/*
 声明变量：   var   let   const
 区别：
1.  var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
2.  let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
3.  const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改（值可以发生改变，但不能修改指针）
如: 

const arrey = ['x', 'y', 'z'];
arrey.pop();                                  //可行
const arrey = ['x', 'y'];                     //出错 不能重新设值

*/








//数据类型：String Numbers Boolean null undefined

const name = 'wyn';
const age = 19;
const isCool = true;
const x = null;
const y = undefined;
let z;

//Concatenation 字符串连接       //老办法
console.log('My name is ' + name + ' and I am ' + age);
// Template String 模板字符串     //新方法
console.log(`My name is ${name} and I am ${age}`)








//字符串属性及方法
const s = 'Hello World!';
console.log(s.length); //字符串长度，这个是属性 不带空格 方法才带空格 此字符串长度为12
console.log(s.toUpperCase()); //全部大写
console.log(s.toLowerCase()); //全部小写
console.log(s.substring(0, 5)) //截取字符串 0~4 及Hello

const a = 'technology, computers, IT, code';
console.log(a.split(', ')) //以括号内容分割字符串 生成一个数组

const str = 'abcdefg';
str.indexOf(); //返回指定的字符串值在字符串中首次出现的位置。如果没有找到则返回 -1。
str.charAt(index); //返回指定位置的字符
str.charCodeAt(index); //返回在指定的位置的字符的 Unicode 编码
str[index] //获取指定位置的字符 H5新增







//数组 []
const fruits = ['apple', 'orange', 'pear'];
fruits.push('mango'); //添加到数组末尾
fruits.unshift('strawberry') //添加到数组开头
fruits.join('')  //join() 方法用于把数组中的所有元素转换一个字符串。元素是通过括号内指定的分隔符进行分隔的。默认为逗号

fruits.pop(); //取出最后一个元素 
fruits.shift(); //取出第一个元素

fruits.reverse()//反转数组

fruits.sort()//首字母升序排序
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });//数字升序排序
points.sort(function (a, b) { return b - a });//数字降序排序

console.log(fruits.indexOf('orange')) //返回数组元素的序号，查不到该元素就返回-1

//数组去重
function unique(arr) {
    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
fruits.toString()//将数组转换为字符串，以逗号分隔
fruits.join('分隔符')//将数组转换为字符串，并以括号内符号分隔

//获取数组最大值
var arrey = [16, 25, 2, 180, -12, 111, 99999, 0, 154.365];
var max = arrey[0];
for (i = 0; i < arrey.length; i++) {
    if (arrey[i] > max) {
        max = arrey[i];
    }
}
console.log(`max = ${max}`);

//数组中新增元素
var arrey2 = [];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 0; i < nums.length; i++) {
    arrey2.push(nums[i]);
}
console.log(arrey2);

//筛选数组
var arrey3 = [10, 6546, -18, 9, 17, 22, 238, 1.000];
var arrey3p = [];
for (i = 0; i < arrey3.length; i++) {
    if (arrey3[i] >= 10) {
        arrey3p.push(arrey3[i]);
    }
}
console.log(arrey3p);

//翻转数组
var nums2 = [];
for (i = nums.length - 1; i >= 0; i--) {
    nums2.push(nums[i]);
}
console.log(nums2);









// object  对象   类比py的字典
const person = {
    firstName: 'Wen',       // 属性
    lastName: 'YaNing',
    age: 19,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Chengdu',
        state: 'Sichaung',
    },
    sayHi: function () {      // 方法
        console.log('Hi~');
    }
}
console.log(person.age);    //调用属性法一
console.log(person['age']); //调用属性法二
console.log(person[0]); //得到属性值（Wen）

console.log(person.hobbies[1]);
console.log(person.address.city);

person.sayHi();  //调用方法


//遍历对象
for (var k in person) {
    console.log(person[a]);
}



//构造函数
function 构造函数名() {         //构造函数名首字母要大写
    this.属性 = 值;
    this.方法 = function () { }
}
new 构造函数名();   //对象的实例化，相当于创建了一个对象




//  内置对象

//  Math对象  不需要new
Math.PI;  //圆周率
Math.max(123, -456, 789); //max 同理还有个min
Math.pow(2, 5); //x的y次幂
Math.abs()  //绝对值
Math.floor() //向下取整数
Math.ceil() //向上取整数
Math.round() //四舍五入

Math.random() // 返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。

// 得到两个数之间的一个随机数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//随机数案例  猜一个1~10之间的数字
const ran = getRandomInt(1, 10);
while (true) {
    const num = prompt('猜一个1~10之间的数字：');
    if (num < ran) {
        alert('It is too small!');

    }
    else if (num > ran) {
        alert('It is too big!');
    }
    else {
        alert('nice!');
        break;

    }
}

// Date对象
const date = new Date;
// 方法自己查表
date.getFullYear();  //返回当前日期的年
date.getMonth();     //返回月份 （0~11）  所以记得 +1
date.getDate();      //返回几号
date.getDay();       //返回周几  周日~周六（0~6）

date.getHours()      //返回24小时制的小时数
date.getMinutes()    //返回分钟数
date.getSeconds()    //返回秒数     

date.getTime();      //返回 1970 年 1 月 1 日至今的毫秒数 (时间戳  永不重复)
const date1 = +new Date;  //也是返回总毫秒数  是一种常用的简便的写法
Date.now();          //也是返回总毫秒数  H5新增 不需要new Date

//Date实例 倒计时
function countDown(time) {
    const nowTime = +new Date();  //返回当前时间总毫秒数
    const inputTime = +new Date(time);  //返回输入时间的总毫秒数
    const times = (inputTime - nowTime) / 1000;  //剩余时间的总毫秒数转换为秒数

    var day = parseInt(times / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day;
    var hour = parseInt(times / 60 / 60 % 24);
    hour = hour < 10 ? '0' + hour : hour;
    var minutes = parseInt(times / 60 % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var seconds = parseInt(times % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return day + '天' + hour + '时' + minutes + '分' + seconds + '秒';
}