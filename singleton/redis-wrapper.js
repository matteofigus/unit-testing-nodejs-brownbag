var conn;
// var redis = require('redis');
module.exports = {
  connect: function(configuration, callback){
    if(!!conn){
      console.log('I am using existing connection');
      return callback(null, conn);
    } else {
      console.log('I am creating connection...');
      conn = 'blablabla';
      return callback(null, conn);
    }
  }
};
