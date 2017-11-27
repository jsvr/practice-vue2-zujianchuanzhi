<template>
    <div class="componentA">
        <button @click="toParentClick">子向父传值</button>
    </div>
</template>

<script>
    export default {
        name: 'componentA',
        data () {
            return {
                datal: 'this is ZuJianChuanZhiZiFu component-A',
            }
        },
        methods: {
            toParentClick: function () {
                this.$emit('toParent',this.datal) //调用父组件toParent方法,并传递参数
            }
        }
    }
</script>

<style scoped>

</style>
