  // Wrap this in whatever conditional code you need if the
  // Konsole should only be available in certain contexts.

  var Konsole = Konsole || {};

  Konsole.console = Konsole.console || {

    consoleApi: ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'info', 'log', 'table', 'trace', 'warn'],

    timerApi: ['time', 'timeStamp', 'timeEnd'],
    
    profilerApi: ['profile', 'profileEnd'],
    
    groupApi: ['group', 'groupCollapsed', 'groupEnd'],

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

    register_api: function(api) {
      var i, len = this[api].length;
      for (i = 0; i < len; i++) {
        this.register_function(this[api][i]);
      }
      return this;

    },

    init: function() {
      this.register_api('consoleApi').register_api('timerApi').register_api('profilerApi').register_api('groupApi');
    }

  };

  Konsole.console.init();