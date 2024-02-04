<!-- 移除 -->

---
title: 简单抽奖实现😎
---
# 先写个抽奖热热身🧐
<br/>

::: info 概述
✨**本篇来实现一个简单抽奖效果，思路就是首先得有个抽奖的画面，有个按钮，点击开始抽奖，再次点击就停下，并弹出抽奖结果**
:::

<!-- <img :src="$withBase('/imgs/lottery/lottery1.png')" alt="抽奖界面"> -->
![抽奖界面](/imgs/lottery/lottery1.png)

## 一，布局与样式

布局简简单单就是几个盒子然后加加样式啦，代码如下：

```vue
<template>
    <div class="box">
        <div class="title">
            <h2>应聘职业</h2>
        </div>
        <div class="trick">
            <el-button type="primary" @click="begin">{{ t ? 'stop' : 'begin' }}</el-button>
        </div>
        <div class="top">
            <div class="div">前端</div>
            <div class="div">后端</div>
            <div class="div">全栈</div>
            <div class="div">AI</div>
        </div>
        <div class="right">
            <div class="div">销售</div>
            <div class="div">客服</div>
        </div>
        <div class="bottom">
            <div class="div">保洁</div>
            <div class="div">教师</div>
            <div class="div">大数据</div>
            <div class="div">乞丐</div>
        </div>
        <div class="left">
            <div class="div">外卖</div>
            <div class="div">公务员</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.center {
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
}
.div {
    border: 1px solid black;
}
body {
    margin: 0;
    padding: 0;
    .box {
        margin: 200px auto;
        width: 405px;
        height: 403px;
        position: relative;
        .title {
            position: absolute;
            top: -110px;
            left: 155px;
        }
        .trick {
            position: absolute;
            left: 157px;
            top: 183px;
        }
        .top,
        .bottom {
            display: flex;
            .div {
                .center();
                border-right: none;
                &:nth-child(4) {
                    border-right: 1px solid black;
                }
            }
        }
        .bottom {
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .left,
        .right {
            position: absolute;
            .div {
                .center();
                border-top: none;
            }
        }
        .left {
            top: 100px;
            left: 0;
        }
        .right {
            right: 0;
            top: 100px;
        }
    }
}
</style>
```

## 二，逻辑实现

现在布局与样式都有了，那我点击按钮之后怎么知道抽奖正在进行呢？这里想法是在点击按钮之后，拿到所有的奖项，也就是盒子，然后给它们加样式比如背景变成红色，字体颜色变成白色，但是问题来了，给谁加？这里这个‘谁’应该是随机的，这就涉及到随机数了，我们可以从拿到的所有盒子，随机取出来一个加上这种标识。注意这里拿到的所有盒子是一个伪数组，但也可以用数组的方法， 要让抽奖进行，我们肯定需要一个定时器不停的执行，然后该奖项如果已经有style属性我们就移除，在点击停止时，我们要清除定时器，然后可以给一个弹框来表示你获奖了。逻辑代码如下

```vue
<script>
export default {
    data() {
        return {
            t: null,//这里记录定时器
            text: '',
        }
    },
    methods: {
        begin() {
            if (this.t) {
                clearInterval(this.t)
                this.t = null
                const divs = document.querySelectorAll('.div')//拿到所有奖项，也就是盒子
                divs.forEach(item => {
                    item.style['background-color'] ? this.$alert(`恭喜你应聘上${item.innerText}`, '应聘结果') : ''
                })
            } else {
                this.t = setInterval(() => {
                    const divs = document.querySelectorAll('.div')
                    let index = Math.floor(Math.random() * (0 - 11) + 11)
                    divs.forEach(item => {
                        item.style['background-color'] ? item.removeAttribute('style') : divs[index].setAttribute('style', 'background-color:red;color:white')
                    })
                }, 30)
            }
        }
    }
}
</script>
```

## 三，最终效果图
  
<!-- <img :src="$withBase('/imgs/lottery/lottery2.png')" alt="抽奖结果"> -->
![抽奖结果](/imgs/lottery/lottery2.png)

    
