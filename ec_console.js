if (Econ.debug()) {

  Econ.console = Econ.console || {

    console_api: ['log', 'dir', 'trace'],

    register_function: function(fn) {
      if (typeof console === "undefined") {
        console = {};
      }
      if (typeof console[fn] === "undefined") {
        console[fn] = function() {};
      }
      if (typeof console !== "undefined" && typeof console[fn] === "function") {
        this[fn] = function() {
          return console[fn].apply(console, arguments);
        };
      }
    },

    init: function() {
      var i, len = this.console_api.length;
      for (i = 0; i < len; i++) {
        this.register_function(this.console_api[i]);
      }
    }

  };

  Econ.console.init();
}
