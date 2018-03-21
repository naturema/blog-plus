import api from '../../api/index.js';
import * as types from '../mutation-types.js';
import moment from 'moment';
const marked = require('marked');
const highlight = require('highlight.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: code => {
    return highlight.highlightAuto(code).value;
  },
});

const state = {
  blogShort: [],
  success: false,
  calendar: [],
  totalCommits: 0,
  visit: 0,
  activePage: -1,
  activeList: '',
  pageView: {},
};


const actions = {
  getVisits({ commit }) {
    return new Promise(resolve => {
      api.getVisits()
        .then(res => {
          commit(types.GET_VISIT, res);
          resolve();
        });
    });
  },
  getBlog({ commit }, param) {
    return new Promise(resolve => {
      api.getBlog(param)
        .then(res => {
          commit(types.GET_BLOG, res);
          resolve();
        });
    });
  },
  getCalendar({ commit }) {
    return new Promise(resolve => {
      api.getCalendar()
        .then(res => {
          commit(types.GET_CALENDAR, res);
          resolve();
        });
    });
  },
  getCommits({ commit }) {
    return new Promise(resolve => {
      api.getCommits()
        .then(res => {
          commit(types.GET_COMMITS, res);
          resolve();
        });
    });
  },
  pageChange({ commit }, param) {
    commit(types.PAGE_CHANGE, param);
  },
  mobilePageChange({ commit }, param) {
    commit(types.MOBILE_PAGE_CHANGE, param);
  },
  clearBlog({ commit }) {
    commit(types.CLEAR_BLOG);
  },
  getBlogById({ commit }, param) {
    return new Promise(resolve => {
      api.getBlogById(param)
        .then(res => {
          commit(types.GET_BLOG_BYID, res);
          resolve();
        });
    });
  },
  clearPageView({ commit }) {
    commit(types.CLEAR_PAGE_VIEW);
  },
  likeBlog({ commit }, param) {
    return new Promise(resolve => {
      api.likeBlog(param)
        .then(res => {
          commit(types.LIKE_BLOG, res);
          resolve();
        });
    });
  },
};

const getters = {
  blogShort: state => state.blogShort,
  calendar: state => state.calendar,
  totalCommits: state => state.totalCommits,
  visit: state => state.visit,
  activePage: state => state.activePage,
  activeList: state => state.activeList,
  pageView: state => state.pageView,
  pageContent: state => state.pageView.blog_content ? marked(state.pageView.blog_content) : '',
  pageValid: state => moment(state.pageView.update_time).add(6, 'months').isBefore(new Date()) ? null : true,
  pageDate: state => state.pageView.update_time ? moment(state.pageView.update_time).format('YYYY-MM-DD HH:mm:ss') : '',
};

const mutations = {
  [types.GET_BLOG](state, res) {
    if (res.length > 0) {
      state.success = true;
      for (const item of res) {
        item.update_time = moment(item.update_time).format('YYYY-MM-DD HH:mm:ss');
        state.blogShort.push(item);
      }
    }
  },
  [types.GET_CALENDAR](state, res) {
    state.calendar = res;
  },
  [types.GET_COMMITS](state, res) {
    state.totalCommits = res;
  },
  [types.GET_VISIT](state, res) {
    state.visit = res;
  },
  [types.PAGE_CHANGE](state, param) {
    state.activePage = param;
  },
  [types.MOBILE_PAGE_CHANGE](state, param) {
    state.activeList = param;
  },
  [types.CLEAR_BLOG](state) {
    state.blogShort = [];
  },
  [types.GET_BLOG_BYID](state, res) {
    state.pageView = res[0];
  },
  [types.CLEAR_PAGE_VIEW](state) {
    state.pageView = {};
  },
  [types.LIKE_BLOG]() {
    console.log(1);
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};

