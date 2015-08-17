/**
 * Controller for Cart App
 * 
 */
var model = require('../model/index');

var CartController = {

  execute: function() {
    return model.getData();
  }
  
};

module.exports = CartController;
