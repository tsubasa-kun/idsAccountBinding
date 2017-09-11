<template>
    <div>
        <mt-header class="top-header" title="更改默认账号">
            <router-link to="/accountBinding" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="column-title-div">
            <span class="column-title">选择默认账号</span>
            <span class="donot-btn">不设置默认</span>
        </div>
        <mt-checklist align="right" v-model="value" :options="accounts"></mt-checklist>
        <mt-button type="danger" size="large" class="save-btn">保存</mt-button>
    </div>
</template>

<style scoped>
    .top-header {
        background-color: white;
    }

    .column-title-div {
        padding: 10PX;
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
        top: 10PX;
        right: 10PX;
    }

    .save-btn {
        background-color: #009de4;
        width: 84%;
        margin: 40PX auto;
    }
</style>

<script type="text/javascript">
    import {Header, Button, Checklist, Cell} from 'bh-mint-ui2';
    import $ from 'jquery';

    export default {
        data() {
            return {
                canSee: false,
                value: [],
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
            [Checklist.name]: Checklist,
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
            }
        }
    }
</script>