<template>
    <div class="content">
        <div>
            <img class="app-icon" :src="'./static/assets/icon_weixin.png'">
            <span class="app-name">金智大学服务号</span>
            <span class="logined-text">已登录微信：布朗大王</span>
            <span class="login-tip">初次登陆必须与学校账号进行绑定</span>
        </div>
        <div class="input-div mt20">
            <i class="iconfont icon-person"></i>
            <input type="text" class="input-input" placeholder="用户名">
        </div>
        <div class="input-div mt10">
            <i class="iconfont icon-lock"></i>
            <input id="pwd" type="password" class="input-input" placeholder="登录密码">
            <i v-if="!canSee" class="iconfont icon-visibilityoff" @click="changeCanSee"></i>
            <i v-else class="iconfont icon-visibility" @click="changeCanSee"></i>
        </div>
        <span class="forget-tip">忘记密码？</span>
        <mt-button type="primary" size="large" class="bind-btn">绑定</mt-button>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        height: 100vh;
        background-color: white;
        text-align: center;
    }

    .app-icon {
        width: 100PX;
        height: auto;
        margin-top: 30PX;
    }

    .app-name {
        display: block;
        color: #9f9fa1;
        margin-top: 2PX;
    }

    .logined-text {
        display: block;
        margin-top: 20PX;
    }

    .login-tip {
        display: block;
        color: #666666;
        margin-top: 10PX;
    }

    .input-div {
        position: relative;
        border: solid 1PX #e8e8e8;
        border-radius: 4PX;
        width: 84%;
        padding: 6PX 8PX 6PX 8PX;
        text-align: left;
        margin: auto;
    }

    .mt10 {
        margin-top: 10PX;
    }

    .mt20 {
        margin-top: 20PX;
    }

    .input-input {
        width: 80%;
        height: 26PX;
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-left: solid 1PX #e8e8e8;
        font-size: 15PX;
        padding-left: 6PX;
    }

    .icon-person {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
    }

    .icon-visibility {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
        position: absolute;
        top: 7PX;
        right: 8PX;
    }

    .icon-visibilityoff {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
        position: absolute;
        top: 7PX;
        right: 8PX;
    }

    .icon-lock {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
    }

    .forget-tip {
        display: block;
        font-size: 12PX;
        color: #009de4;
        width: 84%;
        text-align: right;
        margin: 10PX auto;
    }

    .bind-btn {
        background-color: #009de4;
        width: 84%;
        margin: 10PX auto;
    }
</style>

<script type="text/javascript">
    import {Button} from 'bh-mint-ui2';
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
            changeCanSee: function () {
                if (!this.canSee) {
                    $('#pwd')[0].type = 'text';
                } else {
                    $('#pwd')[0].type = 'password';
                }
                this.canSee = !this.canSee;
            }
        }
    }
</script>