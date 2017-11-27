<template>
    <div class="componentA">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'this is component-A',
            }
        }
    }
</script>

<style scoped>

</style>
