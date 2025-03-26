<script setup lang="ts"></script>

<template>
    <div class="page">
        <MainBtn class="btn" @click="">
            <span class="text_white">点击</span>
            <span class="text_yellow">蘸取声浪</span>
        </MainBtn>
    </div>
</template>

<style lang="less" scoped>
.btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
}
</style>
