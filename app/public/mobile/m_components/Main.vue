<template>
  <div class="layout">
    <div class="header">
      <div class="logo" @click="openLeft">
         <mu-icon style="margin-right:.5rem" value="menu" />. Gatinul
      </div>
      <div style="float:right">
        <img class="logoImg" src="/public/images/love.png" alt="">
      </div>
    </div>
    <div class="content">
      <mu-popup position="left" popupClass="popup-left" :open="leftPopup" @close="close">
        <div class="header">
          <div class="logo">
            . Gatinul
          </div>
        </div>
        <mu-list @change="handleListChange" :value="activeList">
          <mu-list-item title="博文首页" value="list1" >
            <mu-icon slot="left" value="send" />
          </mu-list-item>
          <mu-list-item title="博文分类" value="list2">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item>
          <mu-list-item title="博文归档" value="list3">
            <mu-icon slot="left" value="inbox"/>
          </mu-list-item>
          <mu-list-item title="关于我" value="list4">
            <mu-icon slot="left" value="info"/>
          </mu-list-item>
        </mu-list>
      </mu-popup>
      <div class="content-right">
        <div class="body">
          <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeList: 'list1',
      showNav:false,
      leftPopup:false
    }
  },
  methods: {
    handleListChange (val) {
      this.activeList = val
    },
    openLeft(){
      this.leftPopup = true
    },
    close() {
      this.leftPopup = false;
    }
  }
}
</script>
<style>
.popup-left{
  height: 100%!important;
}
.mu-item.show-left{
  padding-right: 72px;
}
.mu-item.selected .mu-item-left{
  color: #4766b8!important;
}
.mu-item.selected{
  color: #4766b8!important;
}
.mu-card {
  margin-bottom: 1rem;
}
</style>

<style scoped>
.logoImg{
  height:24px;
  width:24px;
  margin-right:.85rem;
  margin-top:.85rem;
}
.sideBar{
  height: 100%!important;
}
.layout{
  background-color: rgb(236, 236, 236);
}
.header{
  background-color: #4766b8;
}
.logo{
  vertical-align: middle;
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}
.content{
  overflow: hidden;
}
.content-right{
  width: 100%;
  display: inline-block;
  padding: 10px 20px;
  background-color:#fff;
}

</style>