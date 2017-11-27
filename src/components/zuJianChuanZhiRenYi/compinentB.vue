<template>
    <div id="componentB">
        <h1>{{ msg }}</h1>
        <button @click="byBus">B组件点击传值</button>
    </div>
</template>

<script>
    //组件B $emit 触发事件:
    import Bus from './bus.js';
    export default {
        name: 'componentB',
        data () {
            return {
                msg: '非父子组件中的 component-B !',
                byBusData: 'component-B 传递的 byBusData!',
            }
        },
        methods: {
            byBus: function () {
                Bus.$emit('byBus',this.byBusData);
            }
        }
    }
</script>

<style scoped>

</style>
