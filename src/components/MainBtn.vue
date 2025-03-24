<script setup lang="ts"></script>

<template>
    <van-button class="mian_btn">
        <span style="color: var(--White)">聆听</span>
        <span style="color: var(--Yellow, #fee522)">完成</span>
    </van-button>
</template>

<style lang="less" scoped>
.mian_btn {
    display: inline-flex;
    height: 44px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 12px 4px;
    border: 2px solid var(--Yellow, #fee522);
    background: var(--Black, #000);
    box-shadow: 0px 0px 0px 2px #fff;
}
</style>
