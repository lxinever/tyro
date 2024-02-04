<script setup lang="ts">
  import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<global-header />

## 一，HTML HTML5 XML JSON

1. HTML 是超文本标记语言，是用来创建网页的标准标记语言，HTML 允许嵌入 图像 视频 音频 表格
2. HTML5 是 HTML 的最新版，新增了语义化标签，例如 header, footer, nav; 新的 API, 还有多媒体元素等
3. XML 是可扩展标记语言，使用一系列简单的标记描述数据
   - 可扩展
   - 标签必须有开头结束
   - 区分大小写
4. JSON 是一种轻量级的数据交换格式
   - 具有良好的自我描述性,便于阅读。
   - 具有层级结构(值中存在值)。
   - 可通过 JavaScript 进行解析。

::: tip !DocType 的作用
DocType 出现在 html 文档第一行，是告诉浏览器用什么 HTML 版本去解析这个文档，浏览器本身有两个模式，一个就是按照 W3C 的模式，还有一个就是浏览器本身的模式，通常都叫做 怪异模式， 在怪异模式下会和 标准模式产生很大的差异，如果不定义 doctype html 的话，每个浏览器都会有不同的怪异模式处理方式，会产生非常大的差距，所以要定义
:::

## 二，行盒(行内元素) 块盒(块级元素) 行块盒(行内块元素)

1. 行内元素：不独在一行，不能设置宽高，水平的 padding 和 margin 都可以设置，垂直方向不可以，常见的行内元素有 span, a, strong 等，也称内联元素
2. 块级元素：独在一行，可以设置宽高，宽度默认 100% ，padding ，margin 都可以设置，常见的块元素有 h1-h6, p, div, ul, ol 等
3. 行内块元素：不独在一行，和相邻行内元素（行内块）在一行上, <span style="color:#76c6df">但是之间会有空白缝隙</span> 一行可以显示多个，默认宽度就是它本身内容的宽度，padding ，margin 都可以设置，在行内元素中有几个特殊的标签 input，input, button 等，可以对它们设置宽高和对齐属性

::: tip 解决行内块元素之间空白间隙问题

1. 使用注释：在 HTML 代码中，将行内块元素之间的换行符或空格注释掉，例如：

```html
<span>元素1</span
><!--
--><span>元素2</span
><!--
--><span>元素3</span>
```

这样可以消除换行符和空格引起的空隙。

2. 使用负边距：通过为行内块元素设置负边距来消除空隙，例如：

```css
span {
  margin-right: -4px;
}
```

这样可以将元素之间的空隙抵消掉。

3. 使用字体大小为 0：将父元素的字体大小设置为 0，然后为行内块元素重新设置合适的字体大小，例如：

```css
.parent {
  font-size: 0;
}

.child {
  font-size: 16px;
}
```

这样可以消除由于字体大小引起的空隙。

4. 使用 flex 布局：将行内块元素的父元素设置为 flex 容器，并使用 flex 布局来控制元素的排列，例如：

```css
.parent {
  display: flex;
}

.child {
  flex: 1;
}
```

这样可以让行内块元素自动填充父容器，消除空隙。
:::

## 三，url src href

1. url：统一资源定位符 这个是经常用到的，就是绝对路径，相对路径，绝对路径就是完整的路径，而相对路径，就在此文件夹为起点
2. href：超文本引入 就是相互建立联系, 常用的标签 link a
3. src：引入资源替换 就是把这个替换给标签, 常用的有 img script

## 四，b 与 strong 的区别 和 i 与 em 的区别

- b，strong：粗体
- i，em：斜体
- em 和 strong 都是强调的意思，em 表示的音标强调的意思 strong 表示的强调内容，strong 有利于 seo

## 五，iframe 的作用和优缺点

- iframe 也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。
- 优点：可以用来处理加载缓慢的内容，比如：广告
- 缺点：

1. iframe 会阻塞主页面的 Onload 事件
2. iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。但是可以通过 JS 动态给 ifame 添加 src 属性值来解决这个问题，也可以解决 iframe 会阻塞主页面的 Onload 事件的问题
3. 会产生很多页面，不易管理
4. 浏览器的后退按钮没有作用
5. 无法被一些搜索引擎识别

## 六，Location 对象的属性和方法

1. **属性**
   |属性名 | 描述 |
   |:---|:---|
   |href | 表示完整的 URL 地址，包含协议、域名、路径、参数和锚点等信息。|
   |protocol | 表示 URL 的协议部分，如 http: 或 https:。|
   |host | 表示 URL 的主机和端口部分，如 www.baidu.com:80。|
   |hostname | 表示 URL 的主机部分，如 www.baidu.com。|
   |pathname | 表示 URL 的路径部分，如 /index.html。|
   |search | 表示 URL 的参数部分，如 ?name=zfpx。|
   |hash | 表示 URL 的锚点部分，如 #header。|
   |origin | 表示 URL 的协议和域名部分，如 http://www.baidu.com。|
2. **方法**
   |方法名 | 描述 |
   |:---|:---|
   |assign(url) | 用指定的 URL 替换当前 URL。|
   |replace(url) | 用指定的 URL 替换当前 URL，并返回当前页面。|
   |reload() | 刷新当前页面。|

## 七，Navigator 对象的属性和方法

1. **属性**
   |属性名 | 描述 |
   |:---|:---|
   |appCodeName | 表示浏览器的名称。通常是浏览器的内部标识符|
   |appName | 表示浏览器的名称。 通常是浏览器厂商给浏览器起的名字。常见的浏览器名称包括"Netscape"、"Microsoft Internet Explorer"、"Firefox"、"Chrome"等|
   |appVersion | 表示浏览器的版本号。|
   |language | 表示浏览器的语言。|
   |platform | 表示浏览器所在的平台。|
   |product | 表示浏览器的产品名称。|
   |userAgent | 表示浏览器的用户代理字符串。|
2. **方法**
   |方法名 | 描述 |
   |:---|:---|
   |javaEnabled() | 返回浏览器是否启用了 Java。|
   |cookieEnabled | 返回浏览器是否启用了 cookie。|
   |isSecureConnection | 返回当前页面是否通过安全连接（HTTPS）加载。|
   |onLine | 返回浏览器是否处于在线状态。|

## 八，History 对象的属性和方法

1. **属性**
   |属性名 | 描述 |
   |:---|:---|
   |length | 表示当前页面的浏览历史记录的长度。|
   |state | 表示当前页面的 state 对象。|
2. **方法**
   |方法名 | 描述 |
   |:---|:---|
   |back() | 向后退一步浏览历史记录。|
   |forward() | 向前进一步浏览历史记录。|
   |go(n) | 跳转到指定的浏览历史记录。|

## 九，cookie、localStorage、sessionStorage区别
cookie、localStorage、sessionStorage这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。
Cookie是服务器发送到用户浏览器并保存在浏览器上的一块数据， 它会在浏览器下一次发起请求时被携带并发送到服务器上。可以它用来确定两次请求是否来自于同一个浏览器，从而能够确认和保持用户的登录状态。Cookie的使用使得基于无状态的HTTP协议上记录稳定的状态信息成为了可能。

localStorage和sessionStorage 是 HTML5 标准中新加入的技术，可以用来存储数据。
- 不同点
1. 与服务器之间的通讯：
cookie在浏览器与服务器之间来回传递，每次都会携带在HTTP头中，作用是与服务器进行交互，作为http规范的一部分而存在的，如果使用cookie保存过多数据会带来性能问题；
localstorage和sessionstorage不参与和服务器间的通信，不会把数据发给服务器，仅在本地保存，存储在本地的数据可以直接获取。

2. 存储大小：
cookie存储大小为4k
localStorage和sessionStorage的存储数据大小一般都是：5MB

3. 存储内容类型：
会话cookie一般不存储在硬盘而是保存在内存里，当然这个行为并不是规范规定的。若设置了过期时间，浏览器就会把cookie保存到硬盘上。
localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理；

4. 数据有效期：
cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。 
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；

5. 作用域不同：
cookie也是在所有同源窗口中都是共享的，cookie在不设置过期时间的前提下，只在当前的会话有效。
localStorage在所有同源窗口中都是共享的，同浏览器无法共享local和session的信息，同浏览器下，local可以在不同页面 (指的是相同域名和端口的下的不同页面) 共享相同的local数据；
sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面，不同页面或标签页间无法共享sessionStorage的信息，需要注意页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的；

6. 应用场景：
cookie的作用：主要用于保存登录信息，设置“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在cookie中 。
localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据；
sessionStorage：敏感账号一次性登录；


