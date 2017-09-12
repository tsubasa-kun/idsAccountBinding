<template>
    <div>
        <mt-header class="top-header" title="身份绑定">
            <router-link to="/userHome" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <span class="column-title">默认账号</span>
            <div class="item-div" @click="toChange">
                <span>无默认账号</span>
                <span class="item-sub-title">去设置</span>
                <i class="iconfont icon-keyboardarrowright"></i>
            </div>
        </div>
        <div>
            <span class="column-title">已绑定账号</span>
            <div class="item-div" v-for="n in 5" @click="toUnwound">
                <span>12121212</span>
                <span class="item-sub-title">解绑</span>
                <i class="iconfont icon-keyboardarrowright"></i>
            </div>
        </div>
        <mt-button type="danger" size="large" class="bind-btn" @click="toAdd">添加绑定</mt-button>
    </div>
</template>

<style scoped>
    .top-header {
        background-color: white;
        color: black;
        font-size: 16PX;
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
        font-size: 14PX;
    }

    .item-sub-title {
        color: #9f9fa1;
        position: absolute;
        top: 10PX;
        right: 30PX;
        font-size: 14PX;
    }

    .icon-keyboardarrowright {
        color: #9f9fa1;
        position: absolute;
        top: 10PX;
        right: 10PX;
        font-size: 20PX;
    }

    .bind-btn {
        background-color: #009de4;
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
            toUnwound: function () {
                this.$router.push('/unwoundBinding');
            },
            toChange: function () {
                this.$router.push('/changeDefault');
            },
            toAdd: function () {
                this.$router.push('/addBinding');
            }
        }
    }
</script>