
const Service = require('egg').Service;
const homeModel = require('../model/home');
const moment = require('moment');

class HomeService extends Service {
  async login(ip) {
    const result = homeModel.insertLogin(ip);
    if (!result) {
      this.logger.error('访问记录插入表失败');
    }
  }
  async getBlog(row, size) {
    const result = await homeModel.getBlog(row, size);
    for (const item of result) {
      item.tag_name = item.tag_name ? item.tag_name : '';
      item.tag_color = item.tag_color ? item.tag_color : '';
    }
    return result.length > 0 ? result : [];
  }
  async getVisits() {
    const result = await homeModel.getVisits();
    this.logger.info(result[0].total_count);
    return result[0].total_count;
  }
  async getCalendar() {
    moment.locale('zh-cn');
    const result = [];
    const list1 = [];
    const list2 = [];
    const d = new Date();
    const week = d.getDay();
    list2.push(moment().format('L'));
    for (let i = 0; i < 6 - week; i++) {
      list2.push(moment().add(i + 1, 'days').format('L'));
    }
    if (week === 0) {
      for (let i = 42 - list2.length; i > 0; i--) {
        list1.push(moment().subtract(i, 'days').format('L'));
      }
    } else {
      for (let i = 35 - list2.length; i > 0; i--) {
        list1.push(moment().subtract(i, 'days').format('L'));
      }
    }
    const list = list1.concat(list2);
    for (const date of list) {
      const res = await homeModel.getCommit(date);
      result[date] = covertColor(res.length);
      result.push({
        day: date,
        color: covertColor(res.length),
      });
    }
    return result;
  }
  async getCommits() {
    moment.locale('zh-cn');
    const start = moment().subtract(30, 'days').format('L');
    const end = moment().format('L');
    const result = await homeModel.getCommitCount(start, end);
    return result.length;
  }
  async getBlogById(id) {
    const result = await homeModel.getBlogById(id);
    return result;
  }
  async likeBlog(id) {
    const result = await homeModel.likeBlog(id);
    return result.affectedRows > 0 ? true : false;
  }
}
function covertColor(num) {
  let color = '#e8e8e8';
  if (num >= 10) {
    color = '#A2B5CD';
  } else if (num >= 5) {
    color = '#CAE1FF';
  } else if (num > 0) {
    color = '#E6E6FA';
  }
  return color;
}

module.exports = HomeService;
