<script setup lang="ts">
defineProps<{ active: boolean }>()
</script>

<template>
    <div class="strip" :class="{ active }">
        <div class="content">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <g clip-path="url(#clip0_406_235)">
                    <path
                        d="M14.971 9.438C14.549 10.094 14.325 9.813 14.451 9.438C14.787 8.445 14.799 4.91 12 4.469L11.998 16C11.998 17.657 10.263 20 7 20C5.343 20 4 19.129 4 17.5C4 15.381 5.927 14.1 8 14.1C9.328 14.1 10 14.5 10 14.5V0H12C12 2.676 17.986 4.744 14.971 9.438Z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_406_235">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span>
                <slot />
            </span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.strip {
    position: relative;
    height: 24px;

    &.active .content {
        svg {
            fill: var(--Yellow, #fee522);
            animation: shake 0.8s ease;
        }
        span {
            color: var(--Yellow, #fee522);
        }
    }

    &:before {
        position: absolute;
        z-index: 10;
        bottom: 0;

        content: '';
        display: block;
        width: 100%;
        height: 12px;
        border-radius: 2px;
        background: var(--Black, #000);
    }

    .content {
        position: relative;
        z-index: 12;

        display: inline-flex;
        align-items: flex-end;
        gap: 4px;

        svg {
            fill: var(--White, #fff);
        }

        span {
            color: var(--White, #fff);
            font-family: 'GenSenRounded TW';
            font-size: 14px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;

            // warp
            white-space: nowrap;
        }
    }
}
// 摇晃
@keyframes shake {
    0%,
    50%,
    100% {
        transform: rotate(0);
    }
    10%,
    20%,
    30%,
    40% {
        transform: rotate(8deg);
    }
    45% {
        transform: rotate(5deg);
    }
    12.5%,
    22.5%,
    32.5%,
    42.5% {
        transform: rotate(-8deg);
    }
    47.5% {
        transform: rotate(-3deg);
    }
}
</style>
