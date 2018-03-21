<template>
  <mobile-tear-sheet>
    <mu-sub-header>关于我</mu-sub-header>
  </mobile-tear-sheet>

</template>
<script>
export default {
  created(){
    this.$store.dispatch('mobilePageChange', 'list4');
  },
}
</script>

