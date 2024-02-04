<script setup lang="ts">
  import GlobalHeader from '../components/GlobalHeader.vue';
</script>

<global-header />

## 一，盒模型
1. 什么是盒模型：每个页面就是一个个盒子构成的，每个HTMl元素都可以看做成一个盒模型
2. 盒模型的组成包括 margin border padding content 
3. 盒模型还分 标准盒模型 和 IE盒模型 
4. 这两种模型有一个很大的区别就是 content内容区域的标准盒模型 width  就等于 content  而IE盒模型是padding + border + content 等于 width的大小
5. 在css当中我们可以使用 box-sizing 来设置盒模型，默认值就是标准盒模型content-box 使用 border-box 就是设置 成IE盒模型

## 二，BFC
BFC直译过来就是块级格式化上下文，其实就是一个独立布局环境，并且有着自己的一套渲染规则，里面的元素布局是不受外界的影响的
创建BFC display是flex grid inline-block table-cell table-caption overflow的值不是visible float的值是left 或right
具体有什么作用呢 比如 很常见的 margin重叠问题，父元素高度塌陷，阻止标准流元素被浮动元素覆盖

## 三，link 和 import
link 是HTML提供的标签，可以加载 css 外部文件 还有ref属性 import标签是只能在css里面引入css 是css提供的语法。
在加载页面的时候，link标签是同时加载的，而import标签是在页面加载完毕后被加载

## 四，css的优先级
!impotent > 内联 > id > class = 伪类 = 属性 > 标签 = 伪元素 > 通配符* > 继承

## 五，em rem % vw vh
1. em： 相对单位，会继承父元素的font-size ，如果自身定义了 font-size就会按照自身的来计算，这样会导致页面上所有的 1em都不一样
2. rem：看根元素 html  的 font-size 的大小 
3. %:是相对于父元素的 font-size 
4. vw vh :视口宽度 视口高度 1vw等于1%视口 我们经常使用 vw vh来写移动端，还要配合 meta标签 告诉浏览器页面宽度等于视口宽度

## 六，网页布局有哪几种，有什么区别
静态、自适应、流式、响应式四种网页布局;
1. 静态布局：意思就是不管浏览器尺寸具体是多少，网页布局就按照当时写代码的布局来布置；
2. 自适应布局：就是说你看到的页面，里面元素的位置会变化而大小不会变化；
3. 流式布局：你看到的页面，元素的大小会变化而位置不会变化——这就导致如果屏幕太大或者太小都会导致元素无法正常显示。
4. 响应式布局：每个屏幕分辨率下面会有一个布局样式，同时位置会变而且大小也会变。