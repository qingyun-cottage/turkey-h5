<script setup lang="ts">
import { useStepStore } from '@/store/stepStore'

const { incrementStep } = useStepStore()

const emit = defineEmits(['playAudio'])

const handleClick = () => {
    incrementStep()
    // 播放音频
    emit('playAudio')
}
</script>

<template>
    <div class="page">
        <div class="btn_box">
            <MainBtn class="btn fadeIn_el fadeIn_el_no1" @click="handleClick">
                <span class="text_white">点击</span>
                <span class="text_yellow">蘸取声浪</span>
            </MainBtn>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    background: url('//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/start_bg2.jpg') 50% / cover no-repeat;

    .btn_box {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 60px;
    }
}
</style>
