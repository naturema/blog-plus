<template>
  <h1>分类页面</h1>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('pageChange', 2);
  },
}
</script>
