<template>
    <div>
        <mt-header class="top-header" title="更改默认账号">
            <router-link to="/accountBinding" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="column-title-div">
            <span class="column-title">选择默认账号</span>
            <router-link to="/accountBinding">
                <span class="donot-btn">不设置默认</span>
            </router-link>
        </div>
        <mt-radio align="right" v-model="account" :options="accounts"></mt-radio>
        <mt-button type="danger" size="large" class="save-btn" @click="doSave">保存</mt-button>
    </div>
</template>

<style scoped>
    .top-header {
        background-color: white;
        color: black;
        font-size: 16PX;
    }

    .column-title-div {
        padding: 10PX 10PX 5PX 10PX;
        position: relative;
    }

    .column-title {
        color: #666666;
        font-size: 14PX;
    }

    .donot-btn {
        color: #009de4;
        font-size: 14PX;
        position: absolute;
        top: 12PX;
        right: 10PX;
    }

    .save-btn {
        background-color: #009de4;
        width: 84%;
        margin: 40PX auto;
    }
</style>

<script type="text/javascript">
    import {Header, Button, Radio, Cell, Toast} from 'mint-ui';
    import $ from 'jquery';

    export default {
        data() {
            return {
                canSee: false,
                account: '',
                accounts: [
                    {
                        label: '121212',
                        value: '121212'
                    },
                    {
                        label: '232323',
                        value: '232323'
                    },
                    {
                        label: '343434',
                        value: '343434'
                    },
                    {
                        label: '454545',
                        value: '454545'
                    }
                ]
            }
        },
        components: {
            [Header.name]: Header,
            [Button.name]: Button,
            [Radio.name]: Radio,
            [Cell.name]: Cell
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
            doSave: function () {
                Toast('保存成功');
                this.$router.go(-1);
            }
        }
    }
</script>