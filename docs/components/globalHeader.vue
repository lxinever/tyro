<template>
    <div class="header" v-if="content" style="text-align: center;">
        <div style="color: #76c6df;">{{ content }}</div>
        <div style="text-align: right;font-size: 12px;">—{{ from }}</div>
        <div style="text-align: right;font-size: 12px;cursor: pointer;" @click="change">
            <Tooltip title="换一个" placement="right" color="#76c6df">
                <span>🖱</span>
            </Tooltip> 
        </div>
    </div>
    <div v-else>
        <Empty description="服务器开小差了~" />
    </div>
</template>

<script setup lang="ts">
import { Tooltip,Empty } from "ant-design-vue";
import { ref,onMounted } from "vue";

import axios from "axios";

const content = ref<string>('')
const from = ref<string>('')
const url1 = 'https://zj.v.api.aa1.cn/api/wenan-shici/?type=json'//随机古诗词
const url2 = 'https://v1.hitokoto.cn/?encode=json&c=d&c=j&c=k&c=k&c=i&lang=cn' //itab标签页下方随机诗词/名言
const change = () => {
    axios.get(url2).then((res) => {
        content.value = res.data.hitokoto
        from.value = res.data.from
    },rej=>{
        content.value = ''
    })
}

// onMounted(change)
</script>