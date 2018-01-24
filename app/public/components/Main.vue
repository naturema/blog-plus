<template>
    <div>
      <Row>
        <Col span="18" class="gr_col_auto">
          <vHead></vHead>
          <transition name="move" mode="out-in"><router-view></router-view></transition>
        </Col>
        <Col span="6" class="gr_col">
          <sideBar></sideBar>
        </Col>
      </Row>
    </div>
</template>
<script>
import vHead from './Head.vue'
import sideBar from "./SideBar.vue";
export default {
  data() {
    return {};
  },
  components: {
    sideBar,
    vHead
  },
  created() {
    console.log(2);
  },
  methods: {
    
  }
};
</script>
<style scoped>
  .gr_col_auto{
    /* border: 1px solid salmon; */
    min-height: 600px;
    overflow: scroll;
  }
  .gr_col{
    border-left: 1px dashed #999;
    height: 800px;
  }
</style>
