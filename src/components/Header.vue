<script setup lang="ts"></script>

<template>
    <div class="head">
        <div class="logo new_logo">
            <img src="@/assets/img/new_logo.svg" alt="" />
        </div>
        <!-- <div class="logo logo_left">
            <img src="@/assets/img/samyang.png" alt="" />
        </div>
        <div class="logo logo_right">
            <img src="@/assets/img/hot_sauce.svg" alt="" />
        </div> -->
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

    .new_logo{
        top: 16px;
        left: 26px;
        width: 96px;
        height: 46px;
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
