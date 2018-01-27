'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index(ctx) {
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
}

module.exports = HomeController;
