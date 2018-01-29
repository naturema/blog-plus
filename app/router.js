'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getCalendar', controller.home.getCalendar);
  router.post('/getCommits', controller.home.getCommits);
  router.post('/getVisits', controller.home.getVisits);
};
