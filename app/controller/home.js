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
}

module.exports = HomeController;
