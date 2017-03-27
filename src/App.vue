<template>
  <div id="app">
    <div class="router-link">
      <router-link to="/shoppingCart">购物车</router-link>
      <router-link to="/address">地址列表</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app .router-link{
    width: 1280px;
    margin: 0 auto;
    padding:0 30px;
    text-align: center;
    background: #605F5F;
    border-radius: 2px;
    box-shadow: 5px 2px 5px #eee;
  }
  #app .router-link a{
    display:inline-block;
    width:150px;
    height:50px;
    line-height:50px;
    font-size:20px;
    text-align: center;
    color:#fff;
  }
  #app .router-link a:hover{
    color: #EE7A23;
  }
</style>
