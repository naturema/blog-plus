<template>
  <!--Scroll 要放在最外层-->
  <Scroll :on-reach-bottom="handleReachBottom" :height="800">
    <div>
      <Row>
        <Col span="18" class="gr_col_auto">
          <transition name="move" mode="out-in"><router-view></router-view></transition>
        </Col>
        <Col span="6" class="gr_col">
          <sideBar></sideBar>
        </Col>
      </Row>
    </div>
  </Scroll>
</template>
<script>
import sideBar from "./SideBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    sideBar
  },
  created() {
    console.log(2);
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.$store.dispatch("getBlog", "1");
          resolve();
        }, 500);
      });
    },
  }
};
</script>
<style scoped>
  body{
    height: 100%;
  }
  .gr_col{
    border: 1px solid salmon;
    height: 100%;
    overflow: scroll;
  }
</style>
