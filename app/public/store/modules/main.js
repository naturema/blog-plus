import api from '../../api/index.js'
import * as types from '../mutation-types.js'

const state = {
  blogShort:[{
    title:"标题1",
    desc:"有个老头儿的狗死了，老头就把死狗打包托运准备带回家乡厚葬。但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了！"
  },{
    title:'标题2',
    desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
  },{
    title:'标题3',
    desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
  },{
    title:'标题4',
    desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
  },{
    title:'标题5',
    desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
  },{
    title:'标题6',
    desc:'有个老头儿的狗死了，老头就把死狗打包托运准备带回家乡厚葬。但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了！'
  }],
  success:false,
  calendar:[],
  totalCommits:0
}

const actions = {
  getBlog({commit,state},param){
    return new Promise((resolve,reject)=>{
      commit(types.GET_BLOG,[{
        title:"标题1",
        desc:"有个老头儿的狗死了，老头就把死狗打包托运准备带回家乡厚葬。但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了！"
      },{
        title:'标题2',
        desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
      },{
        title:'标题3',
        desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
      },{
        title:'标题4',
        desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
      },{
        title:'标题5',
        desc:'本来抱着大哭一场的念头去观摩将爱情进行到底，结果从头笑到尾。波尔多那一场戏，徐静蕾对李亚鹏说："带我走吧。"李亚鹏答："大象怎么办？"（大象是徐静蕾的儿子）。结果您猜怎么着？邻座一个观众很严肃的说：装冰箱呀！'
      },{
        title:'标题6',
        desc:'有个老头儿的狗死了，老头就把死狗打包托运准备带回家乡厚葬。但是托运的时候机场的人不知道是死的，下飞机的时候发现是死的，吓坏了。以为把狗托运死了。于是就派人去附近狗市买了一个一模一样的。后来这老头打开行李发现狗活了。于是老头给吓死了！'
      }])
      resolve()
    })
  },
  getCalendar({commit,state}){
    return new Promise((resolve,reject)=>{
      api.getCalendar()
      .then((res)=>{
        commit(types.GET_CALENDAR,res)
        resolve()
      })
    })
  },
  getCommits({commit, state}){
    return new Promise((resolve,reject)=>{
      api.getCommits()
      .then((res)=>{
        commit(types.GET_COMMITS,res)
        resolve()
      })
    })
  } 
}

const getters = {
  blogShort: state => state.blogShort,
  calendar: state => state.calendar,
  totalCommits: state => state.totalCommits
}

const mutations = {
  [types.GET_BLOG] (state,res){
    if(res.length>0){
      state.success = true
      for(let item of res){
        state.blogShort.push(item)
      }
    }
  },
  [types.GET_CALENDAR] (state,res){
    state.calendar = res;
  },
  [types.GET_COMMITS] (state,res){
    state.totalCommits = res;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
