<script setup lang="ts">
import Clause from '@/components/Clause.vue'
import { useStepStore } from '@/store/stepStore'
import { initHome } from '@/utils/tools'
import { ref } from 'vue'

const { incrementStep } = useStepStore()

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
        console.log('已经同意过')
        toNext()
    } else {
        // 未同意
        showPopup()
    }
}

const toNext = () => {
    incrementStep()
}
</script>

<template>
    <div class="page">
        <MainBtn class="btn fadeIn_el" @click="getStart">
            <span class="text_white">点击</span>
            <span class="text_yellow">开始</span>
        </MainBtn>

        <Clause v-model:show="show" @toNext="toNext" />
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    background: url('@/assets/img/new_home.jpg') 50% 100% / cover no-repeat;

    .btn {
        position: absolute;
        bottom: 144px;
        left: 50%;
        transform: translateX(-50%);

        animation-delay: 0.5s;
    }
}
</style>
