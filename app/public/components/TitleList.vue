<template>
  <!--Scroll 要放在最外层-->
  <Scroll :on-reach-bottom="handleReachBottom" :height="700">
    <Row class="code-row-bg">
      <i-col span="24" class="gr_col_child" v-for="(item, index) in list" :key="index">
        <div @click="blogView(item)">
          <Card>
            <p slot="title">{{item.blog_title}}</p>
            <p class="" slot="extra">
              <span>最后更新：{{item.update_time}}</span>
            </p>
            <p>{{item.blog_desc}}</p>
            <p class="gr_bottom_tag">
              <Tag v-if="item.tag_name.split(',')[0]" type="dot" :color="item.tag_color.split(',')[0]">{{item.tag_name.split(',')[0]}}</Tag>
              <Tag v-if="item.tag_name.split(',')[1]" type="dot" :color="item.tag_color.split(',')[1]">{{item.tag_name.split(',')[1]}}</Tag>
            </p>
          </Card>
        </div>
        <!-- <div class="page" @click="blogView(item)">
          <h2 class="title">{{item.blog_title}}</h2>
          <p>{{item.blog_desc}}</p>
          <p class="icon"><Tag v-if="item.tag_name.split(',')[0]" type="dot" :color="item.tag_color.split(',')[0]">{{item.tag_name.split(',')[0]}}</Tag>
          <Tag v-if="item.tag_name.split(',')[1]" type="dot" :color="item.tag_color.split(',')[1]">{{item.tag_name.split(',')[1]}}</Tag></p>
        </div> -->
      </i-col>
    </Row>
  </Scroll>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
import moment from 'moment';
export default {
  data(){
    return {
      index:0
    }
  },
  computed:mapGetters({
    list:'blogShort'
  }),
  created(){
    this.$Spin.show();
    this.$store.dispatch('pageChange', 1);
    this.$store.dispatch('getBlog',{
      index:this.index
    }).then(()=>{
      this.$Spin.hide();
    });
  },
  destroyed(){
    this.$store.dispatch('clearBlog')
  },
  methods:{
    handleReachBottom() {
      const self = this;
      self.index = self.index + 6;
      return new Promise(resolve => {
        setTimeout(() => {
          self.$store.dispatch("getBlog", {
            index:self.index
          });
          resolve();
        }, 500);
      });
    },
    blogView(item) {
      console.log(item.id)
      this.$router.replace('page/'+item.id)
    },
    format(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style scoped>
  body {
	padding-top: 2.5em;
	background-color: #f6f6f6;
	color: #333;
	font-size: 84%;
	font-family: "微软雅黑", "Yahei Mono";
}

.code-row-bg{
  padding: 30px;
  min-height: 800px;
  padding-top: 10px;
}
.gr_col_child{
  /* margin-top: -10px; */
  /* height: 260px; */
  overflow: hidden;
  padding: 16px 32px;
}
.ivu-card{
  cursor: pointer;
  background: #f6f6f6!important;
  padding: 10px;
}
.ivu-tag-dot{
  height: 20px;
  line-height: 20px;
  border: 1px solid #f6f6f6!important;
  color: #495060!important;
  background: #f6f6f6!important;
  padding: 0px 12px;
}
.ivu-card-head p {
  font-size: 18px!important;
}
.gr_bottom_tag {
  margin-left: -15px;
  margin-top: 32px;
}

</style>
<style>
.icon .ivu-tag-dot-inner{
  margin-right: 0px!important;
}
.icon .ivu-tag-text{
  font-weight:500;
}
.ivu-card-extra {
  padding: 10px!important;
}
.ivu-card-extra span{
  /* font-style:italic; */
  font-size:13px;
  color:#777;
}
</style>

