<script setup lang="ts">
import { useStepStore } from '@/store/stepStore'

const { incrementStep } = useStepStore()

defineProps<{ remainingTime: string }>()
const emit = defineEmits(['pauseAudio'])

const handleClick = () => {
    incrementStep()
    // 暂停音频
    emit('pauseAudio')
}
</script>

<template>
    <div class="page">
        <div class="text_box fadeIn_el fadeIn_el_no1">
            <span class="text_white"
                >当<span class="text_yellow">辣酱</span>蘸上</span
            >
            <span class="text_yellow no_warp">
                炸鸡、烤肉、深夜泡面<span class="spacing">······</span>
            </span>
            <span class="text_white"
                >每一"蘸”都藏着你的<span class="text_yellow"
                    >灵魂音效</span
                ></span
            >
            <span>
                <span class="text_white">就此刻，</span>
                <span class="text_yellow">坠入音浪</span>
            </span>
        </div>

        <div class="show_box fadeIn_el fadeIn_el_no2">
            <div class="timer">
                <div class="bg">
                    <img src="//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/headset.svg" alt="" />
                </div>
                <div class="text">{{ remainingTime }}</div>
            </div>
            <div class="wave"></div>
        </div>

        <MainBtn class="btn fadeIn_el fadeIn_el_no3" @click="handleClick">
            <span class="text_white">聆听</span>
            <span class="text_yellow">完毕</span>
        </MainBtn>
    </div>
</template>

<style lang="less" scoped>
.page {
    position: absolute;
    width: 100%;
    height: 100%;

    .text_box {
        margin: 80px auto;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;

        color: var(--White, #fff);
        text-align: center;
        font-family: YouSheBiaoTiYuan;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%; /* 28.6px */

        .no_warp {
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .show_box {
        position: absolute;
        width: 100%;
        top: 60%;
        transform: translateY(-60%);
        // top: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .timer {
            width: 120px;
            height: 120px;
            position: relative;

            .bg {
                position: absolute;
                left: -2.5px;
                width: 120px;
                height: 120px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .text {
                margin-top: 70px;

                color: var(--White, #fff);
                text-align: center;
                font-family: Inter;
                font-size: 11px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
            }
        }

        .wave {
            margin-top: 40px;
            width: 311px;
            height: 30px;
            flex-shrink: 0;
            background: url('//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/wave.svg') 50% / contain no-repeat;
        }
    }

    .btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 60px;
    }

    .spacing {
        letter-spacing: -15.08px;
    }
}
</style>
