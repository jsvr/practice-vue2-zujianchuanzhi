<template>
    <div id="componentB">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default Vue.component('my-component',{
        name: 'componentB',
        template: '#componentB',
        data () {
            return {
                msg: 'this is component-B'
            }
        }
    })
</script>

<style scoped>

</style>
