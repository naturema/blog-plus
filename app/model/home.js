'use strict';
const db = require('../db.js');


const homeModel = {
  async getCommit(date) {
    const sql = `
    SELECT * FROM blog_commit
    WHERE commit_time = "${date}"`;
    const result = await db.query(sql);
    return result;
  },
  async getCommitCount(start, end) {
    console.log(start, end);
    const sql = `
    select * from blog_commit where date_format(commit_time,'%Y/%m/%d') 
    between date_format("${start}",'%Y/%m/%d')
    and date_format("${end}",'%Y/%m/%d')`;
    const result = await db.query(sql);
    return result;
  },
};

module.exports = homeModel;
