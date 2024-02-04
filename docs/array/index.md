---
title: 数组方法📄
---

::: tip 概述
🍉**本篇主要记录常用数组方法**
:::

**以方法首字母排序**

| 序号 | 方法名         | 参数                                                            | 返回值                                           | 改变原数组 |
| ---- | -------------- | --------------------------------------------------------------- | ------------------------------------------------ | ---------- |
| 1    | at             | index                                                           | 索引对应值                                       | 否         |
| 2    | concat         | array                                                           | 新数组                                           | 否         |
| 3    | copyWithin     | target,start,end                                                | 原数组                                           | 是         |
| 4    | entries        | 无                                                              | 可迭代对象                                       | 否         |
| 5    | every          | function(value,index,arr){},thisArg                             | 布尔值                                           | 否         |
| 6    | fill           | value,start,end                                                 | 原数组                                           | 是         |
| 7    | filter         | function(value,index,arr){},thisArg                             | 新数组                                           | 否         |
| 8    | find           | function(value,index,arr){},thisArg                             | 数组里第一个符合的值                             | 否         |
| 9    | findIndex      | function(value,index,arr){},thisArg                             | 数组第一个符合的值的索引，若都不符合返回-1       | 否         |
| 10   | flat           | depth                                                           | 新数组                                           | 否         |
| 11   | flatMap        | function(this,value,index,arr){},thisArg                        | 新数组                                           | 否         |
| 12   | forEach        | function(value,index,arr){},thisArg                             | 无                                               | 否/是      |
| 13   | includes       | searchElement,fromIndex                                         | 布尔值                                           | 否         |
| 14   | indexOf        | searchElement,fromIndex                                         | 目标值第一次出现在数组中的索引，若不存在返回-1   | 否         |
| 15   | join           | string，若无则默认逗号                                          | 字符串                                           | 否         |
| 16   | keys           | 无                                                              | 可迭代的键                                       | 否         |
| 17   | lastIndexOf    | searchElement,fromIndex                                         | 目标值最后一次出现在数组中的索引，若不存在返回-1 | 否         |
| 18   | map            | function(value,index,arr){},thisArg                             | 原数组                                           | 是         |
| 19   | pop            | 无                                                              | 数组最后一个元素                                 | 是         |
| 20   | push           | value                                                           | 数组长度                                         | 是         |
| 21   | reduce         | function(this,value,index,arr){}，currentValue,currentIndex,arr | ---                                              | 否         |
| 22   | reduceRight    | function(this,value,index,arr){}，currentValue,currentIndex,arr | ---                                              | 否         |
| 23   | reverse        | 无                                                              | 原数组                                           | 是         |
| 24   | shift          | 无                                                              | 数组中第一个元素                                 | 是         |
| 25   | slice          | start,end                                                       | 新数组                                           | 否         |
| 26   | some           | function(value,index,arr){},thisArg                             | 布尔值                                           | 否         |
| 27   | sort           | function(a,b){}                                                 | 原数组                                           | 是         |
| 28   | splice         | start,deleteCount,value                                         | 元素或数组                                       | 是         |
| 29   | toLocaleString | 无                                                              | 字符串                                           | 否         |
| 30   | toString       | 无                                                              | 字符串                                           | 否         |
| 31   | toSorted       | 同 sort                                                         | 新数组                                           | 否         |
| 32   | toSpliced      | 同 splice                                                       | 新数组                                           | 否         |
| 33   | unshift        | value                                                           | 数组长度                                         | 是         |
| 34   | values         | 无                                                              | 可迭代的值                                       | 否         |
| 35   | with           | index,value                                                     | 新数组                                           | 否         |

<!-- **常用方法详解**

1，<font color="violet">**filter**</font>

当在vscode编辑器写数组方法时鼠标指针停在方法名上就会出现对应的详细信息，包括参数类型，返回值，含义（如图）。简单来说filter方法接受一个回调函数作为参数，回调函数又有三个参数分别是item，元素，index，索引，arr调用filter方法的数组，返回数组中满足回调函数中指定条件的元素。应用场景一般是我们需要根据后端返回的数据找到我们需要的进行处理

<img :src="$withBase('/imgs/arr/filter.png')" alt="filter方法">

使用方式
```javascript
//过滤掉data中content为空的数据
const data = [
    {id:1,content:''},
    {id:2,content:'vue'},
    {id:3,content:'react'},
    {id:4,content:''}
]
let result = data.filter(item => {
    return item.content !== '';
})
console.log(result);//[{id:2,content:'vue'},{id:3,content:'react'}]
```

2，<font color="violet">**forEach**</font>

forEach方法也是接受一个函数作为参数，与filter一样，不过你可以在函数体内对元素任意操作，使用次数也非常多
```javascript
//给data中每一个的id*2且加上mark属性，值默认为'前端'
const data = [
    {id:1,content:''},
    {id:2,content:'vue'},
    {id:3,content:'react'},
    {id:4,content:''}
]
data.forEach(item=>{
    item.id *= 2
    item.mark = '前端'
})
console.log(result);//[{id: 2, content: '', mark: '前端'},{id: 4, content: 'vue', mark: '前端'}{id: 6, content: 'react', mark: '前端'}{id: 8, content: '', mark: '前端'}]
``` -->
