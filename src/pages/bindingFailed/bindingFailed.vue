<template>
    <div class="content">
        <div>
            <img class="tip-icon" :src="'./static/assets/attention.png'">
            <span class="tip-failed">绑定失败</span>
            <span class="tip-text">绑定的信息不完整，请重新绑定</span>
        </div>
        <mt-button type="default" size="normal" class="back-btn" @click="toHome">返回</mt-button>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        height: 100vh;
        background-color: white;
        text-align: center;
    }

    .tip-icon {
        width: 100PX;
        height: auto;
        margin-top: 30PX;
    }

    .tip-failed {
        display: block;
        color: #ef4d4d;
        margin-top: 20PX;
    }

    .tip-text {
        display: block;
        color: #666666;
        margin-top: 10PX;
    }

    .back-btn {
        background-color: white;
        width: 40%;
        margin: 40PX auto;
    }
</style>

<script type="text/javascript">
    import {Button} from 'mint-ui';
    import $ from 'jquery';
    export default {
        data() {
            return {
                canSee: false
            }
        },
        components: {
            [Button.name]: Button
        },
        methods: {
            toHome: function () {
                this.$router.push('/userHome');
            }
        }
    }
</script>