<template>
    <div class="componentA">
        <div>{{ msg }}</div>
        <p>{{ busData }}</p>
    </div>

</template>

<script>
    // 组件A $on 接受事件传递数据
    import Bus from './bus.js';
    export default {
        name: 'componentA',
        data () {
            return {
                msg: '非父子组件传值 component-A!',
                busData: " "
            }
        },
        created(){
            Bus.$on('byBus',(data) => {
                this.busData = data;
            })
        }
    }
</script>

<style scoped>

</style>
