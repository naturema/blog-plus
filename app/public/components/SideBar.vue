<template>
  <div class="content">
    <blockquote>上传统计 <span>17 / 最近30天</span></blockquote>
    <div class="calendar">
      <div>
        <Row type="flex" justify="center" align="middle" style="height:35px">
            <Col span="3">日</Col>
            <Col span="3">一</Col>
            <Col span="3">二</Col>
            <Col span="3">三</Col>
            <Col span="3">四</Col>
            <Col span="3">五</Col>
            <Col span="3">六</Col>
        </Row>
      </div>
      
      <div class="table">
        <Row type="flex" justify="center">
          <Col span="3" class="nullDay"></Col>
          <Col span="3" class="nullDay"></Col>
          <Col span="3" ></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3"></Col>
          <Col span="3" class="nullDay"></Col>
          <Col span="3" class="nullDay"></Col>
          <Col span="3" class="nullDay"></Col>
        </Row>
      </div>
    </div>
    <blockquote>本站导航</blockquote>
      <div class="gr_menu">
        <div class="gr_menu_list active"><Icon type="ios-list"></Icon>博客首页</div>
        <div class="gr_menu_list"><Icon type="ios-pricetags"></Icon>博文分类</div>
        <div class="gr_menu_list"><Icon type="ios-calendar"></Icon>博文归档</div>
        <div class="gr_menu_list"><Icon type="information-circled"></Icon>关于</div>
      </div>
    <blockquote>热推文章</blockquote>
    <div class="gr_list">
      <div class="gr_item">1. Elasticsearch入门使用</div>
      <div class="gr_item">2. 从零构建博客系统</div>
      <div class="gr_item">3. Vuex源码分析</div>
      <div class="gr_item">4. Mysql优雅使用</div>
      <div class="gr_item">5. 微信跳一跳Bug</div>
    </div>
    
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.content{
  margin: 18px 0px;
}
blockquote {
    border-left: 5px solid #e4393c;
    margin: 15px 30px 0 10px;
    padding-left: 10px;
    font-size: 16px;
    color: #777;
    font-weight: 600;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
blockquote span{
  font-size: 12px;
  font-weight: 500;
}
.calendar{
  height: 200px;
  width: 90%;
  /* border: 1px solid black; */
  margin: 10px auto;
  background: #f6f6f6;
  
}
.calendar .table {
  width: 100%;
  text-align:center;
}
.ivu-col{
  text-align: center;
  margin: 1.2px 1.2px;
}
.nullDay{
  background: #f6f6f6!important;
}
.gr_item_tag{
  font-size: 16px;
  cursor: pointer;
  border: none!important;
}
.ivu-tag{
  background: #f6f6f6!important;
  font-size: 14px;
}
.gr_menu_list:not(.active):hover{
  background: #E8E8E8;
}
.gr_menu_list i{
  margin-right: .8rem;
  font-size: 14px;
}
</style>
<style>
.table .ivu-row {
  height: 29px;
  text-align:center;
}
.table .ivu-col{
  background:#e8e8e8;
  height: 29px;
}
.gr_list{
  font-size:14px;
  width:90%;
  margin:10px auto!important;
}
.gr_list>.gr_item{
  padding:5px;
  border-top:1px solid #bbb;
}
.gr_list>.gr_item:first-child{
  border-top:none;
}
.gr_menu{
  width:90%;
  margin:10px auto;
}
.gr_menu_list{
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color:#777;
  border-radius: 3px;
  padding-left: .8rem;
  width: 50%;
  cursor: pointer;
}
.gr_menu_list.active{
  background: #A2B5CD;
  color: #fff;
}
</style>


