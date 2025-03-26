<script setup lang="ts">
import { initHome } from '@/utils/tools'
// import { h } from 'vue'

defineProps<{ show: boolean }>()
const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
}>()

const agree = () => {
    localStorage.setItem('samyang-agree-rule', '1')
    initHome()
}

const notAgree = () => {
    localStorage.setItem('samyang-agree-rule', '0')
    emit('update:show', false)
}

// const copyWriting = {
//     title: '三养食品网页使用条款和条件',
//     content: h('div', { class: 'content' }, [
//         h(
//             'span',
//             {
//                 class: 'heavy',
//             },
//             '本条款包含什么内容？'
//         ),
//         h(
//             'span',
//             '本条款告知您使用我们的网页 “三养火鸡辣酱狂想之旅”（下称“H5”）以及我们在微信上向用户提供的其他服务（统称“服务”）的规则。'
//         ),
//     ]),
// }
</script>

<template>
    <van-overlay :show="show" :lock-scroll="false">
        <div class="clause_box" @click.stop>
            <div class="close_icon" @click="$emit('update:show', false)">
                <img src="@/assets/img/close.svg" alt="" />
            </div>
            <div class="title">三养食品网页使用条款和条件</div>
            <div class="content">
                <p>
                    <span class="heavy">本条款包含什么内容？</span>
                    <br />
                    <span>
                        本条款告知您使用我们的网页“三养火鸡辣酱狂想之旅”（下称“H5”）以及我们在微信上向用户提供的其他服务（统称“服务”）的规则。
                    </span>
                </p>
                <p>
                    <span class="heavy">我们是谁以及如何联系我们</span><br />
                    <span>
                        我们的服务由三养食品（上海）有限公司（下称“我们”）运营。我们注册于中国，注册办事处位于上海市某某区多少号楼。我们是一家有限公司。 </span
                    ><br />
                    <span>
                        如需联系我们，请发送电子邮件至example@sanyangfoods.com。
                    </span>
                </p>
                <p>
                    <span class="heavy">使用我们的服务即表示您接受本条款</span>
                    <br />
                    <span class="heavy"
                        >通过使用我们的服务，您确认您接受并同意遵守本使用条款。</span
                    >
                </p>
            </div>
            <div class="btns">
                <van-button class="btn_1" @click="notAgree">不同意</van-button>
                <van-button class="btn_2" @click="agree">同意</van-button>
            </div>
        </div>
    </van-overlay>
</template>

<style lang="less" scoped>
.clause_box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 20px;
    width: calc(100% - 40px);
    max-height: calc(100% - 140px);

    border-radius: 12px 4px;
    border: 1px solid var(--Yellow, #fee522);
    background: var(--Black, #000);
    // overflow: scroll;

    display: flex;
    flex-direction: column;

    .close_icon {
        position: absolute;
        right: 8px;
        top: 8px;

        width: 20px;
        height: 20px;
        img {
            width: 100%;
        }
    }

    .title {
        margin: 30px 24px 0;
        color: var(--Yellow, #fee522);
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .content {
        // 随flex 改变高度 溢出出现滚动条
        overflow: scroll;
        flex: 1;

        margin: 10px 24px;
        color: var(--White, #fff);
        font-family: 'PingFang SC';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */

        .heavy {
            font-weight: 600;
        }
    }

    .btns {
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
        gap: 11px;

        .van-button {
            display: flex;
            width: 120px;
            height: 42px;
            padding: 10px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 4px;
            border: none;
        }

        // 样式穿透
        .btn_1 {
            border: 1px solid var(--Yellow, #fee522);
            background: var(--Black, #000);

            color: var(--Yellow, #fee522);
            text-align: center;
            font-family: 'PingFang SC';
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 21px */
        }
        .btn_2 {
            background: var(--Yellow, #fee522);

            color: var(--Black, #000);
            text-align: center;
            font-family: 'PingFang SC';
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 21px */
        }
    }
}
</style>
