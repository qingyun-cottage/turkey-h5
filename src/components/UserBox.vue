<script setup lang="ts">
import defaultAvatar from '@/assets/img/avatar_demo.png'

defineProps<{
    avatarUrl: string
    userName: string
}>()
</script>

<template>
    <div class="user_box">
        <img class="avatar" :src="avatarUrl || defaultAvatar" alt="" />
        <div class="user_name">{{ userName || '用户名' }}</div>
    </div>
</template>

<style lang="less" scoped>
.user_box {
    display: flex;
    flex-direction: column;
    gap: 8px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }

    .user_name {
         color: var(--White, #fff);
        text-align: center;
        font-family: zihunxingmouhei_trial;
        font-size: 14px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }
}
</style>
