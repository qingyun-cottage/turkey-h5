<script setup lang="ts">
import { useStepStore } from '@/store/stepStore'

const { incrementStep } = useStepStore()

const emit = defineEmits(['playAudio'])

const handleClick = () => {
    incrementStep()
    // 播放音频
    emit('playAudio')
}
</script>

<template>
    <div class="page">
        <div class="movement_box">
            <div class="bottle">
                <img src="@/assets/img/bottle.png" alt="" />
            </div>
        </div>
        <div class="btn_box">
            <MainBtn class="btn fadeIn_el fadeIn_el_no1" @click="handleClick">
                <span class="text_white">点击</span>
                <span class="text_yellow">开启辣音风暴</span>
            </MainBtn>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page {
    width: 100%;
    height: 100%;
    // background: url('@/assets/img/start_bg2.jpg') 50% / cover no-repeat;

    .btn_box {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 60px;
    }
}

.movement_box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .bottle {
        width: 260px;
        height: 400px;
        // background: #0003;
        position: absolute;
        left: 58px;
        bottom: 140px;
        animation: blobby 5s ease-in-out infinite;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

@keyframes blobby {
    0% {
        transform: translate3d(0, -600px, 0) scaleY(1.2);
    }
    10% {
        transform: translate3d(0, 50px, 0) scaleY(0.8);
    }
    14% {
        transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
    18% {
        transform: translate3d(0, 10px, 0) scaleY(0.9);
    }
    20%,
    22% {
        transform: translate3d(0, 0, 0) scaleY(1);
    }
    26% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    32% {
        transform: translate3d(0, 0, 0) scale(0);
    }
    38% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    42% {
        transform: translate3d(0, 0, 0) scale(0.9);
    }
    45% {
        transform: translate3d(0, 0, 0) scale(1.08);
    }
    48% {
        transform: translate3d(0, 0, 0) scale(0.95);
    }
    50%,
    52% {
        transform: translate3d(0, 0, 0) scale(1);
    }

    // 48% {
    //     transform: translate3d(0, 0, 0) scale(1.1);
    // }
    // 50% {
    //     transform: translate3d(0, 0, 0) scale(1);
    // }

    // 50% {
    //     transform: translate3d(0, 0, 0) scale(1.2);
    // }

    // 68% {
    //     transform: translate3d(0, 0, 0) scale(1);
    // }
    // 74% {
    //     transform: translate3d(0, 0, 0) scale(0);
    // }
    // 80% {
    //     transform: translate3d(0, 0, 0) scale(1.2);
    // }
    // 84% {
    //     transform: translate3d(0, 0, 0) scale(0.9);
    // }
    86%,
    88% {
        transform: translate3d(0, 0, 0) scale(1);
    }
    92% {
        transform: translate3d(0, -30px, 0) scaleY(0.9);
    }
    100% {
        transform: translate3d(0, 600px, 0) scaleY(1.2);
    }
}
</style>
