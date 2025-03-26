<script setup lang="ts">
import Clause from '@/components/Clause.vue'
import { initHome } from '@/utils/tools';
import { ref } from 'vue'

const show = ref(false)
const showPopup = () => {
    show.value = true
}

// 点击开始
const getStart = () => {
    const agreeRule = Number(localStorage.getItem('samyang-agree-rule') || '0')
    if (agreeRule == 1) {
        // 已经同意过
        initHome()
    } else {
        // 未同意
        showPopup()
    }
}
</script>

<template>
    <div class="page">
        <MainBtn class="btn" @click="getStart">
            <span class="text_white">点击</span>
            <span class="text_yellow">开始</span>
        </MainBtn>

        <Clause v-model:show="show" />
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    background: url('@/assets/img/home_bg.jpg') 50% / cover no-repeat;

    .btn {
        position: absolute;
        top: 68%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
