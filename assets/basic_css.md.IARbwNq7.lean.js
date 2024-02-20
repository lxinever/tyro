import{_ as e}from"./chunks/header.vue_vue_type_script_setup_true_lang.dWYU8gfP.js";import{d as a,c as i,J as t,V as l,o}from"./chunks/framework.eh9rp3qH.js";import"./chunks/firstNotUndefined.BvnkRdw1.js";const r=l('<h2 id="一-盒模型" tabindex="-1">一，盒模型 <a class="header-anchor" href="#一-盒模型" aria-label="Permalink to &quot;一，盒模型&quot;">​</a></h2><ol><li>什么是盒模型：每个页面就是一个个盒子构成的，每个HTMl元素都可以看做成一个盒模型</li><li>盒模型的组成包括 margin border padding content</li><li>盒模型还分 标准盒模型 和 IE盒模型</li><li>这两种模型有一个很大的区别就是 content内容区域的标准盒模型 width 就等于 content 而IE盒模型是padding + border + content 等于 width的大小</li><li>在css当中我们可以使用 box-sizing 来设置盒模型，默认值就是标准盒模型content-box 使用 border-box 就是设置 成IE盒模型</li></ol><h2 id="二-bfc" tabindex="-1">二，BFC <a class="header-anchor" href="#二-bfc" aria-label="Permalink to &quot;二，BFC&quot;">​</a></h2><p>BFC直译过来就是块级格式化上下文，其实就是一个独立布局环境，并且有着自己的一套渲染规则，里面的元素布局是不受外界的影响的 创建BFC display是flex grid inline-block table-cell table-caption overflow的值不是visible float的值是left 或right 具体有什么作用呢 比如 很常见的 margin重叠问题，父元素高度塌陷，阻止标准流元素被浮动元素覆盖</p><h2 id="三-link-和-import" tabindex="-1">三，link 和 import <a class="header-anchor" href="#三-link-和-import" aria-label="Permalink to &quot;三，link 和 import&quot;">​</a></h2><p>link 是HTML提供的标签，可以加载 css 外部文件 还有ref属性 import标签是只能在css里面引入css 是css提供的语法。 在加载页面的时候，link标签是同时加载的，而import标签是在页面加载完毕后被加载</p><h2 id="四-css的优先级" tabindex="-1">四，css的优先级 <a class="header-anchor" href="#四-css的优先级" aria-label="Permalink to &quot;四，css的优先级&quot;">​</a></h2><p>!impotent &gt; 内联 &gt; id &gt; class = 伪类 = 属性 &gt; 标签 = 伪元素 &gt; 通配符* &gt; 继承</p><h2 id="五-em-rem-vw-vh" tabindex="-1">五，em rem % vw vh <a class="header-anchor" href="#五-em-rem-vw-vh" aria-label="Permalink to &quot;五，em rem % vw vh&quot;">​</a></h2><ol><li>em： 相对单位，会继承父元素的font-size ，如果自身定义了 font-size就会按照自身的来计算，这样会导致页面上所有的 1em都不一样</li><li>rem：看根元素 html 的 font-size 的大小</li><li>%:是相对于父元素的 font-size</li><li>vw vh :视口宽度 视口高度 1vw等于1%视口 我们经常使用 vw vh来写移动端，还要配合 meta标签 告诉浏览器页面宽度等于视口宽度</li></ol><h2 id="六-网页布局有哪几种-有什么区别" tabindex="-1">六，网页布局有哪几种，有什么区别 <a class="header-anchor" href="#六-网页布局有哪几种-有什么区别" aria-label="Permalink to &quot;六，网页布局有哪几种，有什么区别&quot;">​</a></h2><p>静态、自适应、流式、响应式四种网页布局;</p><ol><li>静态布局：意思就是不管浏览器尺寸具体是多少，网页布局就按照当时写代码的布局来布置；</li><li>自适应布局：就是说你看到的页面，里面元素的位置会变化而大小不会变化；</li><li>流式布局：你看到的页面，元素的大小会变化而位置不会变化——这就导致如果屏幕太大或者太小都会导致元素无法正常显示。</li><li>响应式布局：每个屏幕分辨率下面会有一个布局样式，同时位置会变而且大小也会变。</li></ol>',13),b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"basic/css.md","filePath":"basic/css.md","lastUpdated":null}'),s={name:"basic/css.md"},f=a({...s,setup(n){return(c,d)=>(o(),i("div",null,[t(e),r]))}});export{b as __pageData,f as default};
