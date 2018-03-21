<template>
  <div class="demo-infinite-container">
    <mu-card v-for="(item, index) in list" :key="index">
      <mu-card-title :title="item.blog_title" :subTitle="item.update_time"/>
      <mu-card-text style="color:#444">
        {{item.blog_desc}}
      </mu-card-text>
      <mu-card-actions>
        <mu-chip v-if="item.tag_name.split(',')[0]" class="list_chip">
          {{item.tag_name.split(',')[0]}}
        </mu-chip>
        <mu-chip v-if="item.tag_name.split(',')[1]" class="list_chip">
          {{item.tag_name.split(',')[1]}}
        </mu-chip>
      </mu-card-actions>
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
    this.$store.dispatch('mobilePageChange', 'list1');
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
.list_chip{
  line-height:30px!important;
  background-color: #e9e9e9!important;
  margin-right: .3rem!important;
  border-radius:12px!important;
}
.mu-card-text{
  padding-top: 9px!important;
}
.mu-card-title-container .mu-card-title{
  color: #333!important;
  font-size: 20px!important;
  line-height: 28px!important;
  font-weight: 600;
  margin-bottom: .3rem;
}
.mu-card-actions{
  padding: 8px 16px!important;
}
.mu-chip .mu-avatar{
  margin: 0 .3rem;
}
</style>


