<script setup lang="ts">
import OptionStrip from '@/components/OptionStrip.vue'
import { useStepStore } from '@/store/stepStore'
import { useTypeStore } from '@/store/typeStore'
import { ref } from 'vue'

const { setTypeByOpts } = useTypeStore()
const { incrementStep } = useStepStore()

const options = [
    'A. 经典甜辣拌饭：米饭裹酱，黏糯声浪治愈',
    'B. 火鸡辣酱开罐：“啵一声，蘸酱声浪觉醒',
    'C. 烤肉蘸酱滋啦：烟火混响，DNA声浪狂飙',
    'D. 薯片蘸酱咔嚓：辣味声浪，快乐不设防',
    'E. 炸鸡蘸酱暴击：酥脆上瘾，深夜快乐声浪',
    'F. 一口嘶哈过瘾：辣到冒火？嘶哈声浪救场',
    'G. 沸腾火锅蘸酱：灵魂震颤，蘸到停不下来',
]

const selectQueue = ref<number[]>([])

// 选项选择
const handleSelect = (index: number) => {
    if (selectQueue.value.includes(index)) {
        selectQueue.value = selectQueue.value.filter(item => item !== index)
    } else {
        if (selectQueue.value.length >= 4) {
            console.log('最多只能选择四项')
            return
        }
        selectQueue.value.push(index)
    }
}

// 提交
const handleSubmit = () => {
    if (selectQueue.value.length !== 4) {
        console.log('请选择四项')
        return
    }
    console.log('提交', selectQueue.value)
    setTypeByOpts(selectQueue.value)
    incrementStep()
}
</script>

<template>
    <div class="page">
        <div class="text_box fadeIn_el fadeIn_el_no1">
            <span class="no_warp">
                哪一<span class="text_yellow"
                    >”<span class="text_big">蘸</span>”</span
                >最能把你<span class="text_yellow text_big">点燃?</span>
            </span>
            <span class="no_warp">
                #请<span class="text_yellow text_big">按顺序</span>选择<span
                    class="text_yellow"
                    >其中<span class="text_big">四</span>项</span
                >#
            </span>
        </div>

        <div class="options_box fadeIn_el fadeIn_el_no2">
            <div class="option" v-for="(option, index) in options">
                <!-- <span
                    @click="handleSelect(index)"
                    :active="selectQueue.includes(index)"
                >
                    {{ option }}
                </span> -->
                <OptionStrip
                    @click="handleSelect(index)"
                    :active="selectQueue.includes(index)"
                >
                    {{ option }}
                </OptionStrip>
            </div>
        </div>

        <MainBtn class="btn fadeIn_el fadeIn_el_no3" @click="handleSubmit">
            <span class="text_white">生成我的</span>
            <span class="text_yellow">火辣之声</span>
        </MainBtn>
    </div>
</template>

<style lang="less" scoped>
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .text_box {
        margin: 80px auto 36px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;

        color: var(--White, #fff);
        text-align: center;
        font-family: zihunxingmouhei_trial;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;

        .no_warp {
            white-space: nowrap;
            overflow: hidden;
        }
    }

    .options_box {
        flex: 1;
        width: 100%;
        overflow: auto;
        // background: #0003;
        display: flex;
        flex-direction: column;
        gap: 22px;

        .option {
            display: flex;
            justify-content: end;
            margin: 0 auto;

            &:nth-child(1),
            &:nth-child(3),
            &:nth-child(5) {
                justify-content: start;
            }

            &:nth-child(1) {
                margin-left: 32px;
            }
            &:nth-child(2) {
                margin-right: 22px;
            }
            &:nth-child(3) {
                margin-left: 16px;
            }
            &:nth-child(4) {
                margin-right: 36px;
            }
            &:nth-child(5) {
                margin-left: 28px;
            }
            &:nth-child(6) {
                margin-right: 18px;
            }
            &:nth-child(7) {
                margin-right: 32px;
            }
        }
    }

    .btn {
        margin: 36px auto 60px;
    }

    .text_big {
        font-size: 32px;
    }
}
</style>
