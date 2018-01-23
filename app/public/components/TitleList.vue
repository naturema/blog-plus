<template>
    <Row type="flex" align="middle" class="code-row-bg" :gutter="64">
      <Col span="12" class="gr_col_child" v-for="(item, index) in list" :key="index">
      <div class="page">
        <h2 class="title">{{item.title}}</h2>
        <p>{{item.desc}}</p>
      </div>
      </Col>
    </Row>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data(){
    return {
    }
  },
  computed:mapGetters({
    list:'blogShort'
  }),
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
.code-row-bg{
  padding: 30px;
}
.gr_col_child{
  margin-bottom: 35px;
  height: 200px;
}
</style>

