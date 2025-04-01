<script setup lang="ts">
import { useTypeStore } from '@/store/typeStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const typeStore = useTypeStore()
const { getType } = storeToRefs(typeStore)

const TextOption = computed(() => {
    const type = getType.value
    // 对应typeList 匹配
    return (
        typeList.find(item => item.type === type) || {
            type: 0,
            name: '未知',
            desc1: '未知',
            desc2: '未知',
        }
    )
})

/**
 * "1、【摇滚风暴型】
音乐DNA：火辣摇滚！辣到震颤的爆裂音浪
适配场景：火锅沸腾音，重金属狂响

2、【R&B暗夜型】
音乐DNA：暗夜R&B！微辣音效的治愈律动
适配场景：深夜泡面音，吸溜声混搭慵懒贝斯

3、【电子热辣型】
音乐DNA：辣感电子！脉冲音浪的极致上头
适配场景：烤肉滋啦音，烟火混响电子音墙

4、【抒情微辣型】
音乐DNA：微醺抒情！甜辣音效的平衡美学
适配场景：冰块碰撞音，清脆钢琴键混搭微辣和弦"
 */
const typeList = [
    {
        type: 1,
        name: '【暗夜<span>甜</span>心型】',
        desc1: '微辣暗甜！深夜R&B黏糯音浪',
        desc2: '米饭裹酱开拌，暗夜单曲循环',
        ratio: '36.8%',
    },
    {
        type: 2,
        name: '【热辣摇滚型】',
        desc1: '爆辣直球！重金属音浪蘸满灵魂',
        desc2: '沸腾火锅蘸酱，摇滚音浪狂响',
        ratio: '24.3%',
    },
    {
        type: 3,
        name: '电子热辣型',
        desc1: '辣感电子！脉冲音浪的极致上头',
        desc2: '烤肉滋啦音，烟火混响电子音墙',
        ratio: '24.1%',
    },
    {
        type: 4,
        name: '抒情微辣型',
        desc1: '微醺抒情！甜辣音效的平衡美学',
        desc2: '冰块碰撞音，清脆钢琴键混搭微辣和弦',
        ratio: '14.8%',
    },
]
</script>

<template>
    <div class="page">
        <UserBox class="user_box fadeIn_el fadeIn_el_no1" />

        <div class="text_box fadeIn_el fadeIn_el_no2">
            <div class="text_1">
                <span class="text_white"
                    >你的「声浪档案」是<span class="spacing"> -</span></span
                >
                <div class="text_main_box">
                    <span
                        class="text_yellow text_special"
                        v-html="TextOption.name"
                    ></span>
                </div>
                <span class="text_small"
                    >全部人群中只有<span class="text_yellow">24.3%</span></span
                >
            </div>
            <div class="text_2">
                <div class="item">
                    <span>音乐DNA：</span>
                    <span>{{ TextOption.desc1 }}</span>
                </div>
                <div class="item">
                    <span>适配场景：</span>
                    <span>{{ TextOption.desc2 }}</span>
                </div>
            </div>
        </div>

        <div class="btns_box fadeIn_el fadeIn_el_no3">
            <MainBtn class="btn" @click="">
                <span class="text_white">保存</span>
                <span class="text_yellow">火辣之声</span>
            </MainBtn>
            <MainBtn class="btn" @click="">
                <span class="text_white">前往天猫</span>
                <span class="text_yellow">领取更多福利</span>
            </MainBtn>
        </div>
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

    .user_box {
        margin-top: 38px;
    }

    .text_box {
        margin: 13px 0 24px;
        width: 100%;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;

        color: var(--White, #fff);
        text-align: center;
        font-family: zihunxingmouhei_trial;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 126%;

        .text_1 {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .text_2 {
            margin-top: 33px;
            padding: 0 32px;
            display: flex;
            flex-direction: column;
            gap: 25px;

            .item {
                position: relative;
                padding-left: 24px;
                display: flex;
                flex-direction: column;
                align-items: start;
                text-align: left;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 3.5px;
                    left: 0;
                    width: 18px;
                    height: 18px;
                    background: url('@/assets/img/star2_icon.png') 50% / cover
                        no-repeat;
                }
            }
        }
    }

    .btns_box {
        margin: 0 0 52px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .text_main_box {
        margin: 8px 0 16px;
    }

    .text_special {
        width: 100%;

        // display: inline-flex;
        // 底部对齐
        align-items: end;
        justify-content: center;
        font-size: 24px;
        letter-spacing: 1px;
        text-wrap: nowrap;
        // letter-spacing: 0.72px;

        :deep(> span) {
            font-size: 36px;
            // background: #000;
        }
    }
    .text_small {
        font-size: 20px;
    }

    .spacing {
        // letter-spacing: -10px;
    }
}
</style>

<!-- <style lang="less">
.text_special {
    width: 100%;
    margin: 16px 0;
    // display: inline-flex;
    // align-items: end;
    // justify-content: center;
    font-size: 36px;
    letter-spacing: 1px;
    text-wrap: nowrap;
    // letter-spacing: 0.72px;

    & > div {
        // display: inline-flex;
        // display: ;
        font-size: 58px;
        // background: #000;
    }
}
</style> -->
