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
};

module.exports = homeModel;
