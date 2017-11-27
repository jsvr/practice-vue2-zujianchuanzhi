<template>
    <div class="componentA">
        <h1>{{ msg }}</h1>
        <h2>{{ logo }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'componentA',
        data () {
            return {
                msg: 'this is ZuJianChuanZhiFuZi component-A',
            }
        },
        props:["logo"]
    }
</script>

<style scoped>

</style>
