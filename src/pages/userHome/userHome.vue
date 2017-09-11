<template>
    <div>
        <mt-header class="top-header" title="个人设置"></mt-header>
        <div class="banner-div"></div>
        <div class="item-div">
            <span>修改用户名</span>
            <span class="item-sub-title">设置</span>
            <i class="iconfont icon-keyboardarrowright"></i>
        </div>
        <div class="item-div">
            <span>修改密码</span>
            <span class="item-sub-title">设置</span>
            <i class="iconfont icon-keyboardarrowright"></i>
        </div>
        <div class="item-div">
            <span>手机绑定</span>
            <span class="item-sub-title">设置</span>
            <i class="iconfont icon-keyboardarrowright"></i>
        </div>
        <div class="item-div" @click="toBinding">
            <span>身份绑定</span>
            <span class="item-sub-title">设置</span>
            <i class="iconfont icon-keyboardarrowright"></i>
        </div>
        <mt-button type="danger" size="large" class="logout-btn">退出登录</mt-button>
    </div>
</template>

<style scoped>
    .top-header {
        background-color: white;
    }

    .banner-div {
        width: 100%;
        height: 160PX;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .item-div {
        position: relative;
        background-color: white;
        width: 100%;
        margin-top: 1PX;
        padding: 10PX;
    }

    .column-title {
        display: block;
        color: #666666;
        padding: 10PX;
    }

    .item-sub-title {
        color: #9f9fa1;
        position: absolute;
        top: 10PX;
        right: 30PX;
    }

    .icon-keyboardarrowright {
        color: #9f9fa1;
        position: absolute;
        top: 10PX;
        right: 10PX;
        font-size: 20PX;
    }

    .logout-btn {
        width: 84%;
        margin: 40PX auto;
    }
</style>

<script type="text/javascript">
    import {Header, Button} from 'bh-mint-ui2';
    export default {
        components: {
            [Header.name]: Header,
            [Button.name]: Button
        },
        methods: {
            toBinding: function () {
                this.$router.push('/accountBinding');
            }
        }
    }
</script>