<template>
  <!--Scroll 要放在最外层-->
  <Scroll :on-reach-bottom="handleReachBottom" :height="700">
    <Row class="code-row-bg">
      <i-col span="12" class="gr_col_child" v-for="(item, index) in list" :key="index">
      <div class="page" @click="blogView(item)">
        <h2 :id="'blog_'+item.id" class="title">{{item.blog_title}}</h2>
        <p>{{item.blog_desc}}</p>
        <!-- <p class="icon"><Icon type="android-favorite-outline"></Icon> 1102</p> -->
        <p class="icon"><Tag v-if="item.tag_name.split(',')[0]" type="dot" :color="item.tag_color.split(',')[0]">{{item.tag_name.split(',')[0]}}</Tag>
        <Tag v-if="item.tag_name.split(',')[1]" type="dot" :color="item.tag_color.split(',')[1]">{{item.tag_name.split(',')[1]}}</Tag></p>
      </div>
      </i-col>
    </Row>
  </Scroll>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
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
    this.$store.dispatch('pageChange', 1);
    this.$store.dispatch('getBlog',{
      index:this.index
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
a {
	color: #fff;
	position:absolute;
	right: 1%;
	top: 5px;
}
.title {
	text-align:center;
}
.title:after {
	width: 180px;
	height: 30px;
	content: " ";
	margin-left: -90px;
	border: 1px solid rgba(200, 200, 200, .8);
	background: rgba(254, 254, 254, .6);
	-moz-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	-moz-transform: rotate(-5deg); 
	-webkit-transform: rotate(-5deg);
	-o-transform: rotate(-5deg);
    transform: rotate(-5deg);
	position: absolute;
	left: 50%;
	top: -15px;
}
.page {
  background: #E8E8E8;
  border-radius: 2%;
	margin: 0 auto;
	padding: 1em 0 2em;
	-moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	text-shadow: 0 1px 0 #F6EF97;
	position: relative;
  height: 185px;
  cursor: pointer;
}
.page:before {
    -webkit-transform: skew(-15deg) rotate(-5deg);
    -moz-transform: skew(-15deg) rotate(-5deg);
	-o-transform: skew(-15deg) rotate(-5deg);
    transform: skew(-15deg) rotate(-5deg);
    left: 15px;
}
.page:after {
    -webkit-transform: skew(15deg) rotate(5deg);
    -moz-transform: skew(15deg) rotate(5deg);
	-o-transform: skew(15deg) rotate(5deg);
    transform: skew(15deg) rotate(5deg);
    right: 15px;
}
.page:before, .page:after {
    width: 90%;
    height: 20%;
    content: ' ';
    -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 22px;
    z-index: -1;
}
.page p {
	line-height: 2em;
	padding: 0 2em;
}
.page .icon{
  position: absolute;
  right: 0px;
  bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.code-row-bg{
  padding: 30px;
  min-height: 800px;
  padding-top: 10px;
}
.gr_col_child{
  margin-top: -10px;
  height: 260px;
  overflow: hidden;
  padding: 32px;
}

.icon .ivu-tag-dot{
  background: #E8E8E8!important;
}
.icon .ivu-tag{
  padding: 0 4px;
}
</style>
<style>
.icon .ivu-tag-dot-inner{
  margin-right: 0px!important;
}
.icon .ivu-tag-text{
  font-weight:500;
}
</style>

