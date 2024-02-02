---
title: 工具函数🐠
---

::: tip 概述
🦑**本篇主要记录工作中一些实用的工具函数**
:::

## 1，根据身份证判断性别
```javascript
getSex(idCard){
    if((parseInt(idCard.substr(16，1)) % 2 == 1)){
        return "1"; //男
    }else{
        return "2"; //女
    }
}
```

## 2，金额格式化
```javascript
Fmoney(val) {
    val = val.toString().replace(/\$|\,/g, '');
    if (isNaN(val)) val = '0';
    const sign = (val == (val = Math.abs(val)));
    val = Math.floor(val * 100 + 0.50000000001);
    let cents = val % 100;
    val = Math.floor(val / 100).toString();
    if (cents < 10) cents = '0' + cents;
    for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
        val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
    };
    return (((sign) ? '' : '-') + val + '.' + cents);
}
console.log(Fmoney(10000)); //10,000.00
```

## 3，打招呼/随机问候语
```javascript
//打招呼
timeFix () {
  const time = new Date();
  const hour = time.getHours();
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好';
}
console.log(timeFix()) //下午好
//随机问候语
welcome () {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 LOL', '我猜你可能累了'];
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
console.log(welcome()) //我猜你可能累了
```

# 4，将url请求参数转为json格式
```javascript
/**
 * @description 将url请求参数转为json格式
 * @param url
 * @returns {{}|any}
 */
urlParam2Json(url) {
  const search = url.split('?')[1];
  if (!search) return {};
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}
console.log(paramObj("https://localhost:1102/detail?name=vue&id=1")) //{ "name": "vue", "id": "1" }
```

## 5，时间戳转换
```javascript
/**
 * @description 10位时间戳转换
 * @param time
 * @returns {string}
 */
tenBitTimestamp(time) {
  const date = new Date(time * 1000)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '' + m : m
  let d = date.getDate()
  d = d < 10 ? '' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return y + '年' + m + '月' + d + '日 ' + h + ':' + minute + ':' + second //组合
}
console.log(tenBitTimestamp(1303608600));//2011年4月24日 09:30:00
/**
 * @description 13位时间戳转换
 * @param time
 * @returns {string}
 */
thirteenBitTimestamp(time) {
  const date = new Date(time / 1)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '' + m : m
  let d = date.getDate()
  d = d < 10 ? '' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  return y + '年' + m + '月' + d + '日 ' + h + ':' + minute + ':' + second //组合
}
console.log(thirteenBitTimestamp(130360800600));//1974年2月18日 03:20:00
```

## 6，m到n的随机数
```javascript
/**
 * @description m到n的随机数
 * @param m
 * @param n
 * @returns {number}
 */
random(m, n) {
  return Math.floor(Math.random() * (m - n) + n)
}
console.log(random(1,10));//8(数字1到10之间的整数)
```

## 7，随机id
```javascript
/**
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
uuid(length = 32) {
  const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let str = ''
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * num.length))
  }
  return str
}
console.log(uuid());//12lwEZ7NShWOoZc8XiE6I3yEXXmpGHzq
```

## 8，打乱数组
```javascript
/**
 * @description 数组打乱
 * @param array 需要打乱的数组
 * @returns {*}
 */
shuffle(array) {
  let m = array.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}
console.log(shuffle([1,2,3,4,5]));//[2, 3, 1, 4, 5]
```

## 9，防抖与节流
```javascript
// 防抖
debounce (callback,delay) {
  var t = null;
  return function () {
    clearTimeout(t);
    t = setTimeout(callback,delay);
  }
}
window.onscroll = debounce(function(){
  console.log("调用了一次");
},500)

//节流
throttle (callback,duration){
  var lastTime = new Date().getTime();
  return function () {
    var now = new Date().getTime();
    if(now - lastTime > duration){
      callback();
      lastTime = now;
    }
  }
}
window.onscroll = throttle(function(){
  console.log("调用了一次");
},500)
```

## 10，字符串转换为对象
```javascript
const strParse = (str) => JSON.parse(str.replace(/(\w+)\s*:/g, (_, p1) => `"${p1}":`).replace(/\'/g, "\""))
```

## 11，数字操作
```javascript
//1，当你需要将小数点后的某些数字截断而不取四舍五入
const toFixed = (n, fixed) =>  `${n}`.match(new RegExp(`^-?\\d+(?:\\.\\d{0,${fixed}})?`))[0];
toFixed(10.255, 2) // 10.25

//2，当你需要将小数点后的某些数字截断，并取四舍五入
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
round(10.255, 2) // 10.26
```

## 12，补0
```javascript
//当你需要在一个数字num不足len位数的时候前面补零操作
const replenishZero = (num, len, zero = 0) => num.toString().padStart(len, zero)
replenishZero(8, 2) // 08
```

## 13，常用正则
```javascript
1，校验手机号码：/^1[3-9]\d{9}$/
2，校验邮箱地址：/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
3，校验身份证号码：/^\d{17}[\dXx]$/
4，校验密码强度：/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
5，校验URL地址：/^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/
6，校验日期格式：/^\d{4}-\d{2}-\d{2}$/
7，校验IP地址：/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
8，校验开头，结尾空格：/^\S(.*\S)?$/i
```