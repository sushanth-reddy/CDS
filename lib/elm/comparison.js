// Generated by CoffeeScript 1.9.2
(function() {
  var Expression, Greater, GreaterOrEqual, Less, LessOrEqual, Uncertainty,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Expression = require('./expression').Expression;

  Uncertainty = require('../datatypes/datatypes').Uncertainty;

  module.exports.Less = Less = (function(superClass) {
    extend(Less, superClass);

    function Less(json) {
      Less.__super__.constructor.apply(this, arguments);
    }

    Less.prototype.exec = function(ctx) {
      var args;
      args = this.execArgs(ctx).map(function(x) {
        return Uncertainty.from(x);
      });
      if (!((args[0] != null) && (args[1] != null))) {
        return null;
      }
      return args[0].lessThan(args[1]);
    };

    return Less;

  })(Expression);

  module.exports.LessOrEqual = LessOrEqual = (function(superClass) {
    extend(LessOrEqual, superClass);

    function LessOrEqual(json) {
      LessOrEqual.__super__.constructor.apply(this, arguments);
    }

    LessOrEqual.prototype.exec = function(ctx) {
      var args;
      args = this.execArgs(ctx).map(function(x) {
        return Uncertainty.from(x);
      });
      if (!((args[0] != null) && (args[1] != null))) {
        return null;
      }
      return args[0].lessThanOrEquals(args[1]);
    };

    return LessOrEqual;

  })(Expression);

  module.exports.Greater = Greater = (function(superClass) {
    extend(Greater, superClass);

    function Greater(json) {
      Greater.__super__.constructor.apply(this, arguments);
    }

    Greater.prototype.exec = function(ctx) {
      var args;
      args = this.execArgs(ctx).map(function(x) {
        return Uncertainty.from(x);
      });
      if (!((args[0] != null) && (args[1] != null))) {
        return null;
      }
      return args[0].greaterThan(args[1]);
    };

    return Greater;

  })(Expression);

  module.exports.GreaterOrEqual = GreaterOrEqual = (function(superClass) {
    extend(GreaterOrEqual, superClass);

    function GreaterOrEqual(json) {
      GreaterOrEqual.__super__.constructor.apply(this, arguments);
    }

    GreaterOrEqual.prototype.exec = function(ctx) {
      var args;
      args = this.execArgs(ctx).map(function(x) {
        return Uncertainty.from(x);
      });
      if (!((args[0] != null) && (args[1] != null))) {
        return null;
      }
      return args[0].greaterThanOrEquals(args[1]);
    };

    return GreaterOrEqual;

  })(Expression);

}).call(this);

//# sourceMappingURL=comparison.js.map
