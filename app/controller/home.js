'use strict';

const Controller = require('egg').Controller;
const uuid = require('uuid');


class HomeController extends Controller {
  async index(ctx) {
    let userId;
    if (ctx.cookies.get('user')) {
      this.logger.info(`有cookie：${ctx.cookies.get('user')}`);
      userId = ctx.cookies.get('user');
    } else {
      this.logger.info('无cookie，生成userID');
      userId = uuid.v1();
      ctx.cookies.set('user', userId);
    }
    ctx.service.home.login(userId);
    await ctx.render('index.html');
  }
  async getCalendar(ctx) {
    const calendar = await ctx.service.home.getCalendar();
    ctx.body = calendar;
  }
  async getCommits(ctx) {
    const count = await ctx.service.home.getCommits();
    ctx.body = count;
  }
  async getVisits(ctx) {
    const count = await ctx.service.home.getVisits();
    ctx.body = count;
  }
}

module.exports = HomeController;
