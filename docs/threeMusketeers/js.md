<script setup lang="ts">
  import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<global-header />

## 一，数据类型

### 基础数据类型（值类型）

1. Number
2. String
3. Boolean
4. Null
5. undefined
6. Symbol
7. BigInt ：*BigInt*数据类型是为了让 JavaScript 程序能表示超出 Number 类型支持的数值范围。BigInt 可以表示任意大的整数

### 引用数据类型

1. Object(Array/Function/Date/RegExp/Map/Set)

数据类型大致可以分为两类来进行存储

1. 基础类型存储在栈内存。被引用或者拷贝时，会创建一个完全相等的变量。
2. 引用类型存储在堆内存。存储的是地址，多个引用指向同一个地址。(涉及“共享”概念)

### 数据类型检测

| 方法名                           | 说明                                                                                                                                                                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| typeof                           | typeof null 结果是 object，不能作为判断 null 的方法                                                                                                                                                        |
| instanceof                       | instanceof 运算符用于检查一个对象是否是指定构造函数（或其原型链上的任何构造函数）的实例。它通过检查对象的原型链来确定对象的类型。如果对象是指定构造函数的实例，那么 instanceof 返回 true，否则返回 false。 |
| Object.prototype.toString.call() | 准确判断数据类型                                                                                                                                                                                           |

::: tip
instanceof 可以准确地判断复杂引用数据类型但是不能正确判断基础数据类型  
而 typeof 也存在弊端，它虽然可以判断基础数据类型 (null 除外) 但是引用数据类型中，除了 function 类型以外，其他的也无法判断
:::

### 数据类型转换

1. '==' 比较运算符，会进行隐式类型转换然后再比较（可能会导致一些意外的结果）
2. '===' 严格相等运算符，不会进行类型转换，只有类型和值都相等才返回 true 推荐使用

## 二，常用数组方法

```javascript
//改变原数组方法:
let arr = [];
arr.push(); //数组末尾添加
arr.pop(); //数组末尾删除
arr.unshift(); //数组头部添加
arr.shift(); //数组头部删除
arr.splice(); //方法向/从数组中添加/删除项目，然后返回被删除的项目。
arr.reverse(); //方法用于颠倒数组中元素的顺序。
arr.sort(); //方法用于对数组的元素进行排序。
//不改变原数组方法:
let arr = [];
arr.includes(); // 方法用于判断字符串是否包含指定的子字符串。如果找到匹配的字符串则返回 true，否则返回 false。
arr.indexOf(); //方法可返回某个指定的字符串值在字符串中首次出现的位置。
arr.lastIndexOf(); //方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
arr.slice(); //方法可从已有的数组中返回选定的元素。
arr.join(); //方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
arr.toString();
arr.concat(); //方法用于连接两个或多个数组。
```

## 三，常用字符串方法

```javascript
let str = "string";
str.trim(); //方法用于移除字符串的前导空格和尾随空格。
str.toLowerCase(); //方法用于把字符串的字母小写。
str.toUpperCase(); //方法用于把字符串的字母大写。
str.split(); //方法用于把一个字符串分割成字符串数组。
str.replace(); //方法用于替换字符串中指定的子字符串。
str.substring(); //方法用于从字符串中提取子串。
str.slice(); //方法用于从字符串复制子串。
str.substr(); //方法用于从字符串中提取子串。
str.lastIndexOf(); //方法用于返回某个子字符串最后一次出现的位置。
str.indexOf(); //方法用于返回某个子字符串首次出现的位置。
str.match(); //方法用于在字符串中查找匹配的子串，返回一个数组。
str.search(); //方法用于在字符串中查找匹配的子串，返回子串在字符串中的位置。
str.concat(); //方法用于把两个或多个字符串连接在一起。
```

::: tip substr 和 substring 有什么区别？

1. substring(startIndex, endIndex)：substring 方法接受两个参数，startIndex 和 endIndex，它返回从 startIndex 到 endIndex 之间的子字符串。startIndex 是要截取的子字符串的起始位置，endIndex 是要截取的子字符串的结束位置（不包括该位置的字符）。如果省略 endIndex 参数，则 substring 会截取从 startIndex 到字符串末尾的所有字符。
2. substr(startIndex, length)：substr 方法接受两个参数，startIndex 和 length，它返回从 startIndex 开始，长度为 length 的子字符串。startIndex 是要截取的子字符串的起始位置，length 是要截取的子字符串的长度。如果省略 length 参数，则 substr 会截取从 startIndex 到字符串末尾的所有字符。
3. 需要注意的是，substring 和 substr 的参数有一些差异。substring 的参数是起始位置和结束位置，而 substr 的参数是起始位置和长度。另外，如果传递给 substring 或 substr 的参数是负数，则它们会被视为 0。

```javascript
let str = "Hello World!";
console.log(str.substr(0, 5)); // Hello
console.log(str.substring(0, 5)); // Hello
console.log(str.substr(6)); // World!
console.log(str.substring(6)); // World!
console.log(str.substr(-3)); // !
console.log(str.substring(-3)); // Hello World!
```
:::

## 四，new操作符
1. new 操作符创建一个新对象
2. 将该对象的内部属性 [[Prototype]] 指向构造函数的 prototype 对象
3. new 操作符会为这个新对象设置一个 constructor 属性，这个属性的值就是构造函数本身
4. 执行代码，通过this给新对象添加属性或方法
5. 返回新对象
::: info 手写
[new](../handlewrite/index.md)
:::

## 五，this指向
this 的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this 的指向不同

1. 普通函数this在非严格模式下指向window，严格模式下指向undefined
2. 构造函数this指向实例对象，原型对象里面的方法也指向实例对象
3. 对象方法中的this指向该方法所属的对象
4. 事件绑定方法中的this指向绑定该事件的对象
5. 定时器函数的this指向window
6. 立即执行函数中的this指向window

## 六，call、apply、bind
1. call: call(thisObj, arg1, arg2...) 要求传入函数的参数是参数列表
2. apply: apply(thisObj, [argArray]) 要求传入函数的参数必须放入数组中整体传入
3. bind: bind(thisObj,arg1,arg2,...)

- 共同点 : 都可以改变this指向
- 不同点:
  1. call 和 apply会立即调用函数.bind不会立即调用函数, 需要手动调用.
  2. call及bind 和 apply传递的参数不一样,call及bind传递参数使用逗号隔开,apply使用数组传递.
- 应用场景
  1. call 经常做继承.
  2. apply 经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值
  ``` javascript
  const numbers = [5, 2, 9, 1, 7, 3];

  const max = Math.max.apply(null, numbers);
  const min = Math.min.apply(null, numbers);

  console.log(max); // 输出：9
  console.log(min); // 输出：1
  ```
  3. bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向.
::: info 手写
[call、apply、bind](../handlewrite/index.md)
:::

## 六，eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）
```  javascript
eval('console.log(123)') // 控制台会打印123
```

## 七，BOM 和 DOM 
1. BOM全称Browser Object Model，即浏览器对象模型，主要处理浏览器窗口和框架。
2. DOM全称Document Object Model，即文档对象模型，是 HTML 和XML 的应用程序接口（API），遵循W3C 的标准，所有浏览器公共遵守的标准。
3. 可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。

