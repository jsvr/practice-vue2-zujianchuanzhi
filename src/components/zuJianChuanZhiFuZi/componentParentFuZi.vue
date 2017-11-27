<template>
    <div class="component-parent">
        <h3><router-link to="/">Home</router-link></h3>
        <!--logoMsg 是父组件data里面的值-->
        <component-A :logo="logoMsg"></component-A>
        <component-B></component-B>
    </div>
</template>

<script>
    import componentA from './compinentA.vue';                          //引用相对路径
    import componentB from './compinentB.vue'; //引用绝对路径
    export default {
        name: 'componentParentFuZi',
        data () {
            return {
                logoMsg: "父组件传递过来的logoMsg!"
            }
        },
        components:{
            "component-A": componentA, //key: 标签名, value:import name
            "component-B": componentB,
        }
    }
</script>

<style scoped>

</style>
