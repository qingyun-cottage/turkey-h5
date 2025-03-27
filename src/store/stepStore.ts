import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStepStore = defineStore('step', () => {
    // 使用 ref 定义状态
    const step = ref(1)

    // 定义 actions
    const incrementStep = () => {
        step.value++
    }

    const decrementStep = () => {
        if (step.value > 1) {
            step.value--
        }
    }

    return {
        step,
        incrementStep,
        decrementStep,
    }
})
