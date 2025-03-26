<script setup lang="ts">
import MainBtn from './MainBtn.vue'

import { ref } from 'vue'
import Icon_test from './icon_test.vue'
import Clause from './Clause.vue'
import Close_icon from './icon/close_icon.vue';

const show = ref(false)
const showPopup = () => {
    show.value = true
}
</script>

<template>
    <div style="background: #0003">
        <h1>{{ '测试' }}</h1>

        <div>
            <button>{{ '按钮' }}</button>
        </div>

        <van-empty image="network" description="页面404" />

        <van-cell title="展示弹出层" is-link @click="showPopup" />
        <Clause v-model:show="show" />
        <!-- <van-popup
            v-model:show="show"
            :style="{ margin: '20px', backgroundColor: '#fff3' }"
            >内容</van-popup
        > -->

        <icon_test class="test"></icon_test>
        <Close_icon class="test"></Close_icon>

        <MainBtn>
            <span style="color: var(--White)">聆听</span>
            <span style="color: var(--Yellow, #fee522)">完成</span>
        </MainBtn>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}

.test {
    font-size: 160px;
    fill: var(--Black);
    fill: var(--Yellow);
}
</style>
