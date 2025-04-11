<script setup lang="ts">
import { computed } from 'vue'
import Header from './components/Header.vue'
// import HelloWorld from './components/HelloWorld.vue'
import { useStepStore } from './store/stepStore'
import Step1 from './views/Step1.vue'
import Step2 from './views/Step2.vue'
import Step3 from './views/Step3.vue'
import Step4 from './views/Step4.vue'
import { ref } from 'vue'
import Step5 from './views/Step5.vue'

const stepStore = useStepStore()
const step = computed(() => stepStore.step)

const audioPlayer = ref<HTMLAudioElement | null>(null)

// 当前播放时间
const currentTime = ref(0)
// 剩余时间
const remainingTime = computed(() => {
    let time = currentTime.value
    time = 60 - time
    if (time / 60 >= 1) {
        return `01:${
            (time % 60).toString().length > 1 ? time % 60 : '0' + (time % 60)
        }`
    } else {
        return `00:${time.toString().length > 1 ? time % 60 : '0' + time}`
    }
})
let timer: number | undefined
// 每秒更新时间
const updateTime = () => {
    clearInterval(timer)
    timer = setInterval(() => {
        if (audioPlayer.value) {
            currentTime.value = Number(audioPlayer.value.currentTime.toFixed(0))
        }
    }, 1000)
}
const cancelUpdate = () => {
    clearInterval(timer)
}

// 播放音频
const playAudio = () => {
    if (audioPlayer.value) {
        audioPlayer.value
            .play()
            .then(() => {
                console.log('Audio playing...')
                updateTime()
            })
            .catch(error => {
                console.error('Failed to play audio:', error)
            })
    }
}
// 暂停音频
const pauseAudio = () => {
    if (audioPlayer.value) {
        audioPlayer.value.pause()
        cancelUpdate()
    }
}
</script>

<template>
    <Header />
    <audio id="myAudio" ref="audioPlayer" loop preload="true">
        <source src="//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/audio/test.mp3" type="audio/mpeg" />
    </audio>
    <!-- <HelloWorld msg="Vite + Vue" v-if="0" /> -->
    <Step1 v-show="step === 1" />
    <Step2 v-show="step === 2" @playAudio="playAudio" />
    <Step3
        v-show="step === 3"
        @pauseAudio="pauseAudio"
        :remainingTime="remainingTime"
    />
    <Step4 v-show="step === 4" />
    <Step5 v-show="step === 5" />
    <!-- 音频 -->
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
