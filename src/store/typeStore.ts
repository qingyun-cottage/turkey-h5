import { defineStore } from 'pinia'

// 计算方法
const calcType = (arr: number[]) => {
    // 结果1【摇滚风暴型】	选A、B及任意两个其他选项
    // 结果2【R&B暗夜型】	选A及任意三个非B选项
    // 结果3【电子热辣型】	选B及任意三个非A选项
    // 结果4【抒情微辣型】	选四个非A非B的选项

    const hasA = arr.some(item => item === 0)
    const hasB = arr.some(item => item === 1)

    if (hasA && hasB) {
        return 1
    } else if (hasA && !hasB) {
        return 2
    } else if (!hasA && hasB) {
        return 3
    } else {
        return 4
    }
}

export const useTypeStore = defineStore('type', {
    state: () => {
        return {
            type: 0,
        }
    },
    getters: {
        getType: state => state.type,
    },
    actions: {
        setType(type: number) {
            this.type = type
        },
        setTypeByOpts(arr: number[]) {
            this.type = calcType(arr)
        },
    },
})
