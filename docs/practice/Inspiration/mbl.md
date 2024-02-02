---
title: 毛玻璃🎉
---

::: info 概述
🐱‍🏍**本篇主要是看到饿了么官网的比较有意思的效果，然后随手记录写一写**
:::

## 一，突发奇想<Badge type="info" style="color: #76c6df"> 灵感一现 </Badge>

不知道各位有没有注意这样一个效果，在Element Plus官网上，当你向下滚动滚动条时，导航栏会出现一种“模糊”的现象，这个就是*毛玻璃* 效果，其实就是用到了CSS的一个属性：<span style="color: #76c6df"> backdrop-filter </span> 也就是**滤镜**属性，还有一个和滤镜相关的属性：<span style="color: #76c6df"> filter </span>，但是它们各自作用不一样。
- backdrop-filter 该属性可以让你为一个元素后面区域添加图形效果。它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。
- filter 该属性将模糊或颜色偏移等图形效果应用于元素

两者之间的差异：filter 是作用于元素本身，而 backdrop-filter 是作用于元素背后的区域所覆盖的所有元素。

|filter/backdrop-filter|备注|
|----------------------|----|
|url                   |获取指向SVG过滤器的URL|       
|blur                  |高斯模糊|
|brightness            |图像明亮度|
|constrast             |图像对比度|       
|drop-shadow           |图像阴影|
|grayscale             |图像灰度|
|hue-rotate            |图像色相|
|invert                |反转|
|opacity               |透明度|
|sepia                 |深褐色|
|saturate              |饱和度|

## 二，对比效果

如图示例
<!-- <img :src="$withBase('/imgs/mbl/mbl.png')" alt="毛玻璃"> -->
![毛玻璃](/imgs/mbl/mbl.png)

```html
 <div class="bg">
    <div>normal</div>
    <div class="filter">filter</div>
    <div class="backdrop-filter">backdrop-filter</div>
  </div>
```
```css
.bg{
  height: 400px;
  background: url(mbl.png);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bg > div{
  text-align: center;
  line-height: 200px;
  font-size: 24px;
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, .7);
}
.bg .filter{
  filter: blur(6px);
}
.bg .backdrop-filter{
   backdrop-filter:blur(6px)
}
```

## 三，实现

毛玻璃其实用到了**saturate** 图像饱和度滤镜 

<!-- <img :src="$withBase('/imgs/mbl/xgt.png')" alt="效果图"> -->
![效果图](/imgs/mbl/xgt.png)

```html
<div class="third">
  <div class="header">导航栏</div>
  <div class="container">
     <div class="circle">内容</div>
  </div>
</div>
```
```css
/* 毛玻璃效果  */
.third {
    width: 1052px;
    height: 200px;
    background-color: #fff;
    margin-left: 10px;
    position: relative;
    overflow: scroll;
}

.header {
    text-align: center;
    position: fixed;
    top: 80px;
    right: 46.3px;
    width: 53.85%;
    height: 100px;
    background-image: radial-gradient(transparent 1px, #fff 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    line-height: 100px;
    font-size: 20px;
    color: black;
}

.third .container {
    padding-top: 400px;
    height: 100vh;
}

.circle {
    width: 100%;
    height: 50px;
    background-color: red;
}
```
