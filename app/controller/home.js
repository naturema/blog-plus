
const Controller = require('egg').Controller;
const uuid = require('uuid');


class HomeController extends Controller {
  async index(ctx) {
    let userId;
    const deviceAgent = ctx.request.headers['user-agent'].toLowerCase();
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if (ctx.cookies.get('user')) {
      this.logger.info(`有cookie：${ctx.cookies.get('user')}`);
      userId = ctx.cookies.get('user');
    } else {
      this.logger.info('无cookie，生成userID');
      userId = uuid.v1();
      ctx.cookies.set('user', userId);
    }
    ctx.service.home.login(userId);
    if (agentID) {
      await ctx.render('mobile_index.html');
    } else {
      await ctx.render('index.html');
    }
  }
  async getBlog(ctx) {
    const index = ctx.request.body.index;
    this.logger.info(`获取博文${index + 1}到${index + 6}条`);
    const result = await ctx.service.home.getBlog(index, 6);
    ctx.body = result;
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
  async getBlogById(ctx) {
    const id = ctx.request.body.id;
    const result = await ctx.service.home.getBlogById(id);
    ctx.body = result;
  }
  async likeBlog(ctx) {
    const id = ctx.request.body.id;
    const result = await ctx.service.home.likeBlog(id);
    ctx.body = result;
  }
}

module.exports = HomeController;
