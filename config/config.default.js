'use strict';

module.exports = appInfo => {
  const config = exports = {
    security: {
      csrf: false,
      doMainWhiteList: '*',
    },
    cors: {
      allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS',
      credentials: true,
    },
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516106557604_3052';

  // add your config here
  config.middleware = [];

  return config;
};
