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
        name: '摇滚风暴型',
        desc1: '火辣摇滚！辣到震颤的爆裂音浪',
        desc2: '火锅沸腾音，重金属狂响',
    },
    {
        type: 2,
        name: 'R&B暗夜型',
        desc1: '暗夜R&B！微辣音效的治愈律动',
        desc2: '深夜泡面音，吸溜声混搭慵懒贝斯',
    },
    {
        type: 3,
        name: '电子热辣型',
        desc1: '辣感电子！脉冲音浪的极致上头',
        desc2: '烤肉滋啦音，烟火混响电子音墙',
    },
    {
        type: 4,
        name: '抒情微辣型',
        desc1: '微醺抒情！甜辣音效的平衡美学',
        desc2: '冰块碰撞音，清脆钢琴键混搭微辣和弦',
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
                <span class="text_yellow text_big">
                    【{{ TextOption.name }}】
                </span>
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
                <span class="text_yellow">声浪档案</span>
            </MainBtn>
            <MainBtn class="btn" @click="">
                <span class="text_white">前往</span>
                <span class="text_yellow">活动抽奖</span>
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
        margin-top: 36px;
    }

    .text_box {
        margin: 13px 0 24px;
        width: 100%;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;

        color: var(--White, #fff);
        text-align: center;
        font-family: YouSheBiaoTiYuan;
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
                    background: url('//gitee.com/qingyun-cottage/resource/raw/main/app/turkey-h5/img/star2_icon.png') 50% / cover
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

    .text_big {
        width: 100%;
        margin: 16px 0;
        display: inline-flex;
        justify-content: center;
        font-size: 50px;
        letter-spacing: 1px;
        text-wrap: nowrap;
    }
    .text_small {
        font-size: 20px;
    }

    .spacing {
        letter-spacing: -10px;
    }
}
</style>
