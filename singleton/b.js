var redisWrapper = require('./redis-wrapper');

module.exports = function(){
  redisWrapper.connect({}, console.log);
};
