<template>
  <div>
      <Avatar src="/public/images/love.png" size="large" />
      <span class="name">. Gatinul</span>
      <Input icon="search" class="gr_input" placeholder="全文搜索..." style="width: 400px"></Input>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
div{
  height: 90px;
  /* border: 1px salmon solid; */
  padding-left: 62px;
}
.ivu-avatar-large {
    width: 70px;
    height: 70px;
    line-height: 40px;
    border-radius: 35px;
    margin-left: 10px;
    margin-top: 10px;
}
span.name{
  font-size: 32px;
  font-weight: 600;
  vertical-align: bottom;
  color: #777;
  margin-left: 10px;
}
.gr_input{
  position: absolute;
  right: 60px;
  top: 40px;
}

</style>
<style>
.ivu-input{
  position: absolute;
  background: #f6f6f6!important;
  float: right!important;
  border: 0!important;
  border-radius: 0!important;
  border-bottom: 1px solid #c2cad8!important;
}
</style>

