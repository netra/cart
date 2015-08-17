(function ($) {

  // constructor
  var CartApp = function () {
    console.log(" exeucting constructor..");
    
  };

  CartApp.prototype = {
    constructor: CartApp,

    init: function() {
      this.setup();
    },

    setup: function() {
      // execute the code when DOM Ready event is fired
      $(document).ready(function() {
         $('body').on('change', '#sel1', function() {
            var cost = 250.99;
            var price = parseInt($("#sel1").val());
            console.log(" price value....", price);
            $("#cart-price").text("$"+ price * cost);
         });
      });
    }

  };

  var execute = new CartApp();
  execute.init();
  
})(window.jQuery);