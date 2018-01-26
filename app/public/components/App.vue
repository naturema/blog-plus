<template>
  <div id="app">
    <transition name="move" mode="out-in"><router-view></router-view></transition>
  </div>
</template>

<script>
export default {
  
}
</script>
<style>
  #app{
    background: #f6f6f6;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>


