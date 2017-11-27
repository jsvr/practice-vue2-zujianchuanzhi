<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3><router-link to="/">Home</router-link></h3>
    <h3><router-link to="/yinYongZuJian/componentParent">componentParent</router-link></h3>
    <h3><router-link to="/ZuJianChuanZhiFuZi/componentParentFuZi">componentParentFuZi</router-link></h3>
    <h3><router-link to="/ZuJianChuanZhiZiFu/componentParentZiFu">componentParentZiFu</router-link></h3>
    <h3><router-link to="/ZuJianChuanZhiRenYi/componentParentRenYi">componentParentRenYi</router-link></h3>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  -webkit-transition: opacity .6s;
  -moz-transition: opacity .6s;
  -ms-transition: opacity .6s;
  -o-transition: opacity .6s;
  transition: opacity .6s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  -webkit-transition: opacity .6s;
  -moz-transition: opacity .6s;
  -ms-transition: opacity .6s;
  -o-transition: opacity .6s;
  transition: opacity .6s;
}
</style>
