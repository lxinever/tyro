---
title: 自定义右键菜单🐟
---

::: info 概述
🐳 **本篇主要记录自定义菜单的实现以及过程中的一些小问题**
:::

**右键菜单都不陌生，本篇就实现一个简单的自定义右键菜单，采用vue**

## 一，布局和样式

```vue
<template>
    <div>
        <div @click.stop="onContextMenu" class="special">我有自己的右键菜单</div>
        <div class="contextmenu-content">
            <div class="list">
                <div class="item">复制</div>
                <div class="item">剪切</div>
                <div class="item">粘贴</div>
                <div class="item">全选</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.special {
    //居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    box-shadow: 1px 1px 5px 5px #ccc;
    //不让用户选中文本
    user-select: none;
}

/* 菜单内容的容器 */
.contextmenu-content {
    position: fixed;
    z-index: 50;
    user-select: none;

    .list {
        width: 100px;
        border: 1px solid #555;
        border-radius: 4px;
        overflow: hidden;

        .item {
            padding: 0 5px;
            height: 30px;
            line-height: 30px;
            background-color: #fff;
            cursor: default;
            border-bottom: 1px solid #555;

            &:last-child {
                border-bottom: none;
            }

            &:hover {
                background-color: dodgerblue;
                color: #fff;
            }
        }
    }
}
</style>

```

效果如下

<!-- <img :src="$withBase('/imgs/rightmenu/1.png')" alt="初始界面"> -->
![初始界面](/imgs/rightmenu/1.png)

## 二，逻辑实现

- 整体思路：首先右键菜单先隐藏，等我们右键点击中间这个盒子再出现，获取到这个盒子，先给他注册一个右键事件，在点击时获取到鼠标位置，然后再赋值给右键菜单的位置属性,这个时候我们就要用到动态绑定样式了，右键菜单面板内容我们采用循环，让模板更简洁一些。修改上面代码为

```vue
<template>
    <div>
        <div class="special">我有自己的右键菜单</div>
        <div class="contextmenu-content" :style="{ display: styleForm.display, top: styleForm.top, right: styleForm.right, left: styleForm.left }">
            <div class="list">
                <div class="item" v-for="item in menuFunc" :key="item.id">{{ item.func }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        //获取需要自定义右键菜单的对象并注册contextmenu事件
        const spe = document.querySelector('.special')
        spe.addEventListener('contextmenu', this.onContextMenu)
    },
    data() {
        return {
            //右键菜单面板
            menuFunc: [
                {
                    id: 0,
                    func: '复制'
                },
                {
                    id: 1,
                    func: '剪切'
                },
                {
                    id: 2,
                    func: '粘贴'
                },
                {
                    id: 3,
                    func: '全选'
                },
            ],
            //动态属性
            styleForm: {
                //默认不展示
                display: 'none',
                top: '',
                right: '',
                left: ''
            }
        }
    },
    methods: {
        //右键菜单事件
        onContextMenu(e) {
            const contentEl = document.querySelector('.contextmenu-content')
            //先阻止默认事件，不让默认的右键菜单显示
            e.preventDefault()
            const rect = contentEl.getBoundingClientRect()
            //别名解构
            const { clientX: x, clientY: y } = e
            this.showContextMenu(x, y)
        },
        //显示菜单面板
        showContextMenu(x, y) {
            this.styleForm.top = y + 'px'
            this.styleForm.left = x + 'px'
            this.styleForm.right = y + 'px'
            this.styleForm.display = "block"
        }
    }
}
</script>
```
> **在右键菜单事件里我们用到了getBoundingClientRect()方法,该方法返回元素的大小及其相对于视口的位置，返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合， 具体见MDN官网**[getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

- 效果如下

<!-- <img :src="$withBase('/imgs/rightmenu/2.png')" alt="基本完成"> -->
![基本完成](/imgs/rightmenu/2.png)

## 三，bug

那么问题来了，一个新模块的开发总会出现几个bug需要解决。这个时候我们发现点击左键也会出现右键菜单，而且我们还要点击除中间盒子外的区域要让右键菜单消失。ok开始解决bug，继续修改代码为
```vue
<script>
export default {
    mounted() {
        //挂载完调用空白点击事件
        this.clickoutSide("special", this.hideContentMenu)
        const spe = document.querySelector('.special')
        spe.addEventListener('contextmenu', this.onContextMenu)
    },
    methods: {
        onContextMenu(e) {
            const contentEl = document.querySelector('.contextmenu-content')
            e.preventDefault()
            //阻止鼠标左键或中键也能触发右键菜单
            if (e.button === 0 || e.button === 1) return
            const rect = contentEl.getBoundingClientRect()
            const { clientX: x, clientY: y } = e
            this.showContextMenu(x, y)
        },
        //显示菜单面板
        showContextMenu(x, y) {
            this.styleForm.top = y + 'px'
            this.styleForm.left = x + 'px'
            this.styleForm.right = y + 'px'
            this.styleForm.display = "block"
        },
        //空白点击事件
        clickoutSide(nameClass, callback) {
            //全局注册
            document.onclick = function (e) {
                if (e.target.classNmae === nameClass) return
                callback()
            }
        },
        //隐藏菜单面板
        hideContentMenu() {
            this.styleForm.display = "none"
        }
    }
}
</script>
```

> 我们知道在事件函数里有一个e参数，这个就是事件对象，也是事件参数，里面有一个button属性，这个就是代表鼠标哪个键，0 左键，1 中键，2，右键。空白点击事件也不难理解，nameClass参数就是需要点击的对象的类名，callback就是点击除目标对象以外的区域触发的事件

## 四，继续优化

- 到这你以为完了吗，并没有，还有一个bug，你会发现哎我双击右键原本的菜单竟然在我自定义的菜单上面出现了，这可不行，再次修改代码，在mounted钩子里面写如下代码就欧克了，阻止最外层的盒子右键菜单事件，最后我们可以加一下点击右键菜单功能的反馈。至此，一个简单的自定义右键菜单完成！

```javascript
document.getElementById("app").oncontextmenu = function () {
    return false;
};
```
## 五，最后

- 完整代码如下

```vue
<template>
    <div>
        <div @click.stop="onContextMenu" class="special">我有自己的右键菜单</div>
        <div class="contextmenu-content">
            <div class="list">
               <div class="item" v-for="item in menuFunc" :key="item.id" @click="clickFunc(item.func)">{{ item.func }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        document.getElementById("app").oncontextmenu = function () {
            return false;
        }
        //挂载完调用空白点击事件
        this.clickoutSide("special", this.hideContentMenu)
        const spe = document.querySelector('.special')
        spe.addEventListener('contextmenu', this.onContextMenu)
    },
    methods: {
        onContextMenu(e) {
            const contentEl = document.querySelector('.contextmenu-content')
            e.preventDefault()
            //阻止鼠标左键或中键也能触发右键菜单
            if (e.button === 0 || e.button === 1) return
            const rect = contentEl.getBoundingClientRect()
            //别名解构
            const { clientX: x, clientY: y } = e
            this.showContextMenu(x, y)
        },
        //显示菜单面板
        showContextMenu(x, y) {
            this.styleForm.top = y + 'px'
            this.styleForm.left = x + 'px'
            this.styleForm.right = y + 'px'
            this.styleForm.display = "block"
        },
        //空白点击事件
        clickoutSide(nameClass, callback) {
            //全局注册
            document.onclick = function (e) {
                if (e.target.classNmae === nameClass) return
                callback()
            }
        },
        //隐藏菜单面板
        hideContentMenu() {
            this.styleForm.display = "none"
        }
    }
}
</script>
<style lang="less" scoped>
.special {
    //居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    box-shadow: 1px 1px 5px 5px #ccc;
    //不让用户选中文本
    user-select: none;
}

/* 菜单内容的容器 */
.contextmenu-content {
    position: fixed;
    z-index: 50;
    user-select: none;

    .list {
        width: 100px;
        border: 1px solid #555;
        border-radius: 4px;
        overflow: hidden;

        .item {
            padding: 0 5px;
            height: 30px;
            line-height: 30px;
            background-color: #fff;
            cursor: default;
            border-bottom: 1px solid #555;

            &:last-child {
                border-bottom: none;
            }

            &:hover {
                background-color: dodgerblue;
                color: #fff;
            }
        }
    }
}
</style>
```