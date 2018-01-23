<template>
  <!--Scroll 要放在最外层-->
  <Scroll :on-reach-bottom="handleReachBottom" :height="800"> 
    <div>
      <titleList></titleList>
    </div>
  </Scroll>
</template>
<script>
import titleList from './TitleList.vue'
export default {
  data(){
    return {
      
    }
  },
  methods:{
    handleReachBottom(){
      return new Promise(res=>{
        setTimeout(() => {
          this.$store.dispatch('getBlog')
          resolve();
        }, 500);
      })
    }
  }
}
</script>
<style scoped>
</style>
