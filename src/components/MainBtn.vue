<script setup lang="ts"></script>

<template>
    <van-button class="mian_btn">
        <div class="content">
            <slot></slot>
        </div>
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
    position: relative;

    color: var(--White, #fff);
    font-family: 'GenSenRounded TW';
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    .content {
        &:before,
        &:after {
            display: block;
            content: '';
            position: absolute;
            background: url('@/assets/img/star_icon.png') 50% / cover no-repeat;
            // background-size: cover;
        }

        &:before {
            width: 6px;
            height: 9px;
            left: 6px;
            bottom: 7px;
        }
        &:after {
            width: 9px;
            height: 12px;
            right: 4px;
            top: 7px;
        }
    }
}
</style>
