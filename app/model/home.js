'use strict';
const db = require('../db.js');
const time = require('silly-datetime');

const homeModel = {
  async getCommit(date) {
    const sql = `
    SELECT * FROM blog_commit
    WHERE commit_time = "${date}"`;
    const result = await db.query(sql);
    return result;
  },
  async getBlog(row, size) {
    const _sql = `
         SELECT * FROM blog_main
         WHERE status=1 limit ${row},${size}`;
    const result = await db.query(_sql);
    return result;
  },
  async getVisits() {
    return db.count('blog_visit');
  },
  async getCommitCount(start, end) {
    const sql = `
    select * from blog_commit where date_format(commit_time,'%Y/%m/%d') 
    between date_format("${start}",'%Y/%m/%d')
    and date_format("${end}",'%Y/%m/%d')`;
    const result = await db.query(sql);
    return result;
  },
  async insertLogin(cookie) {
    const data = {
      ip: cookie,
      visit_time: time.format(new Date()),
    };
    const result = await db.insertData('blog_visit', data);
    return result;
  },
};

module.exports = homeModel;
