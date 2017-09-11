<template>
    <div>
        <mt-header class="top-header" fixed title="个人设置"></mt-header>
        <div class="banner-div"></div>
        <div class="item-div">修改用户名</div>
        <div class="item-div">修改密码</div>
        <div class="item-div">手机绑定</div>
        <div class="item-div">身份绑定</div>
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
        background-color: white;
        width: 100%;
        margin-top: 1PX;
        padding: 10PX;
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
        }
    }
</script>