<template>
  <h1>归档页面</h1>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('pageChange', 3);
  },
}
</script>

