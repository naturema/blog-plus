<template>
  <div class="demo-infinite-container">
    <mu-card v-for="(item, index) in list" :key="index">
      <mu-card-title :title="item.blog_title" :subTitle="item.update_time"/>
      <mu-card-text>
        {{item.blog_desc}}
      </mu-card-text>
    </mu-card>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
  data() {
    return {
      index: 0,
      loading: false,
      scroller: null
    }
  },
  computed:mapGetters({
    list:'blogShort'
  }),
  created(){
    this.$store.dispatch('getBlog',{
      index:this.index
    })
  },
  destroyed(){
    this.$store.dispatch('clearBlog')
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      const self = this;
      self.index = self.index + 6;
      return new Promise(resolve => {
        setTimeout(() => {
          self.$store.dispatch("getBlog", {
            index:self.index
          });
          resolve();
          self.loading = false
        }, 500);
      });
    }
  }
}
</script>
<style>
.mu-card-text{
  padding-top: 9px!important;
}
</style>


