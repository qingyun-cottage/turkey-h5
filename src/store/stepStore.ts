import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStepStore = defineStore('step', () => {
    // 使用 ref 定义状态
    const currentStep = ref(1)

    // 定义 getters
    const getCurrentStep = () => currentStep.value

    // 定义 actions
    const incrementStep = () => {
        currentStep.value++
    }

    const decrementStep = () => {
        if (currentStep.value > 1) {
            currentStep.value--
        }
    }

    return {
        currentStep,
        getCurrentStep,
        incrementStep,
        decrementStep,
    }
})