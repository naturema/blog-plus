import api from '../../api/index.js'
import * as types from '../mutation-types.js'

const state = {
  blogShort:[],
  success:false,
  calendar:[],
  totalCommits:0,
  visit:0,
  activePage:-1,
}

const actions = {
  getVisits({commit, state},param){
    return new Promise((resolve,reject)=>{
      api.getVisits()
      .then((res)=>{
        commit(types.GET_VISIT,res)
        resolve()
      })
    })
  },
  getBlog({commit,state},param){
    return new Promise((resolve,reject)=>{
      api.getBlog(param)
      .then((res)=>{
        commit(types.GET_BLOG,res)
        resolve()
      })
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
  },
  pageChange({commit, state}, param){
    commit(types.PAGE_CHANGE, param)
  }
}

const getters = {
  blogShort: state => state.blogShort,
  calendar: state => state.calendar,
  totalCommits: state => state.totalCommits,
  visit: state => state.visit,
  activePage: state => state.activePage
}

const mutations = {
  [types.GET_BLOG] (state,res){
    console.log(res);
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
  },
  [types.GET_VISIT] (state,res){
    state.visit = res;
  },
  [types.PAGE_CHANGE] (state,param){
    state.activePage = param;
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
