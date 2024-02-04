---
title: relation-graph关系图📊
---

::: info 概述
本篇记录工作上用**relation-graph**做关系图，官网[realtion-graph](http://relation-graph.com/) GitHub stars 1.1k
:::

关于图表，我就用过echarts做一些简单的图表，relation-graph没听说过（以下用rg代替）然后同事就把rg官网发给我让我熟悉熟悉，说有个功能模块要用rg重写一下。我：？？？😳然后接着开发方案就出来了，老板说想要这个图做的像天眼查那样，而且这个功能一旦做好应该是比较有亮点的一部分，客户反响会好。然后就跟后端一起开个会，说一下整个逻辑。初到公司不久，我就在想这个重要的功能应该让老人做吧，让一个新人还不懂rg岂不是...好了废话不多说，开做！

- 主要实现：根节点有集团标识，采用背景色蓝文字颜色为白色，集团下有多个公司，公司又有股东等，可以向上向下展开，部分公司采用背景色浅蓝文字黑色，部分公司边框为灰色，背景色白色，人边框采用橘色，线条显示百分比，用折线，颜色采用灰色，节点有右键菜单等...。一些判断字段就要和后端商量了，不过要放在**节点的data里面，因为data是官方给你提供放自定义属性的地方保证你可以拿到**

## 一、查阅官方文档

1，首先去官网看看，有很多现成的例子，几乎涵盖各种关系图了，使用和配置很详细，官网在线demo的代码都在github上，都有注释，点进去直接CV就能用，不过还得自己修改，毕竟需要的效果和demo还是有很大不同的，目前结合vue2，vue3，react都有，还可以在线配置（复杂的要收费）。

**官网示例代码 vue2**
```vue
<template>
   <div>
     <div style="height:calc(100vh - 50px);">
        <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick" />
     </div>
   </div>
 </template>

 <script>
// relation-graph也支持在main.js文件中使用Vue.use(RelationGraph);这样，你就不需要下面这一行代码来引入了。
 import RelationGraph from 'relation-graph'
 export default {
   name: 'Demo',
   components: { RelationGraph },
   data() {
     return {
       graphOptions: {
         allowSwitchLineShape: true, //是否在工具栏中显示切换线条形状的按钮
         allowSwitchJunctionPoint: true, //是否在工具栏中显示切换连接点位置的按钮
         defaultJunctionPoint: 'border' //默认连接点
         // 这里可以参考"Graph 图谱"中的参数进行设置
       }
     }
   },
   mounted() {
     this.showSeeksGraph()
   },
   methods: {
     showSeeksGraph() {
       const __graph_json_data = {
         rootId: 'a', //根节点id
         //节点数据
         nodes: [ 
           { id: 'a', text: 'A', borderColor: 'yellow' },
           { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
           { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
           { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
         ],
         //线条数据
         lines: [
           { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
           { from: 'a', to: 'c', text: '关系2' },
           { from: 'a', to: 'e', text: '关系3' },
           { from: 'b', to: 'e', color: '#67C23A' }
         ]
       }
       // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置 
       this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
         // Called when the relation-graph is completed 当关系图完成时调用
       })
     },
     //节点点击事件
     onNodeClick(nodeObject, $event) {
       console.log('onNodeClick:', nodeObject)
     },
     //线条点击事件
     onLineClick(lineObject, $event) {
       console.log('onLineClick:', lineObject)
     }
   }
 }
 </script>
```
**效果图**
<!-- <img :src="$withBase('/imgs/relation-graph/rg1.png')" alt="官网示例效果图"> -->
![官网示例效果图](/imgs/relation-graph/rg1.png)

## 二、具体实现

2，当然我们需求不是这样，我们需求是类似股权架构图，去天眼查找一家企业看下样式和效果，最好是层级多一点的树状图，数据肯定是要调接口，因为官网示例数据为一个node，一个line,所以暂定后端返回数据格式为node:[...],line:[...]
可以先让后端返回一些数据或者自己模拟一下数据调整样式，（这个样式是真不好调😭）
由于默认样式调整完之后还是不太好看，所以当时就想着在节点上盖一层，与原本节点宽高保持一致，而且节点中间的内容还不同，样式直接给盖着的这层加，然后再根据字段判断，而且需要动态绑定，注意，节点展开那个小圆圈➕样式是跟着默认节点样式的

3，节点右键菜单官网也有对应例子，也就是使用插槽 ,主要代码如下
```vue
<template>
<div>
    <div ref="myPage" style="height:calc(100vh - 50px);" @click="isShowNodeMenuPanel =  false">
        <RelationGraph ref="seeksRelationGraph" :options="graphOptions">
        <div slot="node" slot-scope="{node}">这里通过node.data.xxx就可以拿到自定义属性</div>
        </RelationGraph>
    </div>
     <div v-show="isShowNodeMenuPanel" :style="{left: nodeMenuPanelPosition.x + 'px', top: nodeMenuPanelPosition.y + 'px' }" style="z-index: 999;padding:10px;background-color: #ffffff;border:#eeeeee solid 1px;box-shadow: 0px 0px 8px #cccccc;position: absolute;">
      <div style="line-height: 25px;padding-left: 10px;color: #888888;font-size: 12px;">对这个节点进行操作：</div>
      <div class="c-node-menu-item" @click.stop="doAction('操作1')">操作1</div>
      <div class="c-node-menu-item" @click.stop="doAction('操作1')">操作2</div>
      <div class="c-node-menu-item" @click.stop="doAction('操作1')">操作3</div>
      <div class="c-node-menu-item" @click.stop="doAction('操作1')">操作4</div>
    </div>
</div>
</template>
<script>
export default{
    methods:{
        showNodeMenus(nodeObject, $event) {
            this.currentNode = nodeObject;
            const _base_position = this.$refs.myPage.getBoundingClientRect();
            console.log('showNodeMenus:', $event, _base_position);
            this.isShowNodeMenuPanel = true;
            this.nodeMenuPanelPosition.x = $event.clientX - _base_position.x;
            this.nodeMenuPanelPosition.y = $event.clientY - _base_position.y;
        },
        doAction(actionName) {
            this.$notify({
            title: '提示',
            message: '对节点【' + this.currentNode.text + '】进行了：' + actionName,
            type: 'success'
            });
            this.isShowNodeMenuPanel = false;
        }
    }
}
</script>
```
## 三、整体效果图

4，整体最后再完善一下功能，调整样式，就差不多了，最终效果图
<!-- <img :src="$withBase('/imgs/relation-graph/rg2.png')" alt="最终效果"> -->
![最终效果](/imgs/relation-graph/rg2.png)
