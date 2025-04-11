<script setup lang="ts"></script>

<template>
    <div class="head">
        <div class="logo logo_left">
            <img src="//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/samyang.png" alt="" />
        </div>
        <div class="logo logo_right">
            <img src="//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/hot_sauce.svg" alt="" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.head {
    position: absolute;
    top: 0;
    width: 100%;

    .logo {
        position: absolute;
    }

    .logo_left {
        top: 16px;
        left: 19px;
        width: 99px;
        height: 21px;
    }

    .logo_right {
        top: 13px;
        right: 11px;
        width: 63px;
        height: 36px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
