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
            <span class="set-btn">未绑定</span>
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
        color: black;
        font-size: 16PX;
    }

    .banner-div {
        width: 100%;
        height: 120PX;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .item-div {
        position: relative;
        background-color: white;
        width: 100%;
        margin-top: 1PX;
        padding: 10PX;
    }

    .item-sub-title {
        color: #9f9fa1;
        position: absolute;
        top: 10PX;
        right: 30PX;
        font-size: 14PX;
    }

    .set-btn {
        background-color: #ff9800;
        border: solid 1PX #ff9800;
        border-radius: 4PX;
        position: absolute;
        top: 8PX;
        right: 16PX;
        font-size: 14PX;
        color: white;
        padding: 2PX 4PX 2PX 4PX;
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
    import {Header, Button} from 'mint-ui';
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