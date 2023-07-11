<template>
    <el-space direction="horizontal">
        <ElImage style="width: 500px;" lazy :src="data.oneDayEnglish.img"></ElImage>
        <div>
            <div>{{ data.oneDayEnglish.content }}</div>
            <div>{{ data.oneDayEnglish.dateline }}</div>
            <audio controls :src="data.oneDayEnglish.tts"></audio>
        </div>
    </el-space>
</template>

<script lang = 'ts' >
import { defineComponent, onMounted, reactive } from 'vue'
import { getOneDayEnglishAsync, Daily } from '@/api/api-daily'

export default defineComponent({
    name: "OneDaily",
    setup() {
        let oneDayEnglish = new Daily();
        let data = reactive({
            oneDayEnglish,
            showDialog: true
        });
        onMounted(() => {
            getOneDayEnglishAsync().then(res => data.oneDayEnglish = res.result);
        });
        return {
            data
        };
    }
})
</script>