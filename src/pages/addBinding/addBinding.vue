<template>
    <div>
        <mt-header class="top-header" title="添加绑定">
            <router-link to="/accountBinding" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <span class="column-title">请输入要绑定账号的账号密码</span>
            <div class="input-div">
                <span class="input-label">账号</span>
                <input type="text" class="input-input" placeholder="点击输入" v-model="account">
            </div>
            <div class="input-div">
                <span class="input-label">验证密码</span>
                <input id="pwd" type="password" class="input-input" placeholder="点击输入" v-model="password">
                <i v-if="!canSee" class="iconfont icon-visibilityoff" @click="changeCanSee"></i>
                <i v-else class="iconfont icon-visibility" @click="changeCanSee"></i>
            </div>
        </div>
        <mt-button type="danger" size="large" class="add-btn" @click="doBinding">添加绑定</mt-button>
    </div>
</template>

<style scoped>
    .top-header {
        background-color: white;
        color: black;
        font-size: 16PX;
    }

    .column-title {
        display: block;
        color: #666666;
        padding: 10PX;
        font-size: 14PX;
    }

    .input-div {
        position: relative;
        background-color: white;
        width: 100%;
        padding: 10PX;
        text-align: left;
        margin: 1PX auto;
    }

    .input-label {
        font-size: 15PX;
        vertical-align: middle;
    }

    .input-input {
        width: 60%;
        height: 26PX;
        border: none;
        font-size: 15PX;
        padding-left: 6PX;
    }

    .icon-visibility {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
        position: absolute;
        top: 12PX;
        right: 12PX;
    }

    .icon-visibilityoff {
        color: #9f9fa1;
        vertical-align: middle;
        font-size: 20PX;
        position: absolute;
        top: 12PX;
        right: 12PX;
    }

    .add-btn {
        background-color: #009de4;
        width: 84%;
        margin: 40PX auto;
    }
</style>

<script type="text/javascript">
    import {Header, Button, Toast} from 'mint-ui';
    import $ from 'jquery';
    export default {
        data() {
            return {
                canSee: false,
                account: '',
                password: ''
            }
        },
        components: {
            [Header.name]: Header,
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
            },
            doBinding: function () {
                if(this.account.length <= 0) {
                    Toast('请输入账号');
                } else if(this.password.length <= 0) {
                    Toast('请输入密码');
                } else {
                    Toast('账号或密码不正确');
                    Toast('绑定成功');
                    this.$router.go(-1);
                }
            }
        }
    }
</script>