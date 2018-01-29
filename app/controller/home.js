'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index(ctx) {
    let ip = ctx.req.headers['x-forwarded-for'] ||
        ctx.req.ip ||
        ctx.req.connection.remoteAddress ||
        ctx.req.socket.remoteAddress ||
        ctx.req.connection.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
      ip = ip.split(',')[0];
    }
    ctx.service.home.login(ip);
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
