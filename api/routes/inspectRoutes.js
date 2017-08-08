'use strict';
module.exports = function(app) {
  var inspect = require('../controllers/inspectController');

//read route
  app.route('/inspect/:tingId')
    .get(inspect.getTingInfo);
};