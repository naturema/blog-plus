<template>
  <h1>关于页面</h1>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('pageChange', 4);
  },
}
</script>
