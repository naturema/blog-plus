<template>
  <mobile-tear-sheet>
    <mu-sub-header>归档页面</mu-sub-header>
  </mobile-tear-sheet>

</template>
<script>
export default {
  created(){
    this.$store.dispatch('mobilePageChange', 'list3');
  },
}
</script>

