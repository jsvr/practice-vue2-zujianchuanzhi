<template>
    <div class="component-parent">
        <h3><router-link to="/">Home</router-link></h3>
        <component-A @toParent="listenTo"></component-A>
        <div> childs tells me: {{ childWords }}</div>
        <component-B></component-B>
    </div>
</template>

<script>
    import componentA from './compinentA.vue';                          //引用相对路径
    import componentB from './compinentB.vue'; //引用绝对路径
    export default {
        name: 'componentParentZiFu',
        data () {
            return {
                childWords: ""
            }
        },
        components:{
            "component-A": componentA, //key: 标签名, value:import name
            "component-B": componentB,
        },
        methods:{
            listenTo:function (data) {
                this.childWords = data;
            }
        }
    }
</script>

<style scoped>

</style>
