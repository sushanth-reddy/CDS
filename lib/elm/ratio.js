// Generated by CoffeeScript 1.9.2
(function() {
  var Exception, Expression, Quantity, Ratio, createRatio,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Exception = require('../datatypes/exception').Exception;

  Expression = require('./expression').Expression;

  Quantity = require('./quantity').Quantity;

  module.exports.Ratio = Ratio = (function(superClass) {
    extend(Ratio, superClass);

    function Ratio(json) {
      Ratio.__super__.constructor.apply(this, arguments);
      if (json.numerator == null) {
        throw new Error("Cannot create a ratio with an undefined numerator value");
      } else {
        this.numerator = new Quantity(json.numerator);
      }
      if (json.denominator == null) {
        throw new Error("Cannot create a ratio with an undefined denominator value");
      } else {
        this.denominator = new Quantity(json.denominator);
      }
    }

    Object.defineProperties(Ratio.prototype, {
      isRatio: {
        get: function() {
          return true;
        }
      }
    });

    Ratio.prototype.clone = function() {
      return new Ratio({
        numerator: this.numerator.clone(),
        denominator: this.denominator.clone()
      });
    };

    Ratio.prototype.exec = function(ctx) {
      return this;
    };

    Ratio.prototype.toString = function() {
      return (this.numerator.toString()) + " : " + (this.denominator.toString());
    };

    Ratio.prototype.equals = function(other) {
      var divided_other, divided_this;
      if (other instanceof Ratio) {
        divided_this = this.numerator.dividedBy(this.denominator);
        divided_other = other.numerator.dividedBy(other.denominator);
        return divided_this.equals(divided_other);
      } else {
        return false;
      }
    };

    Ratio.prototype.equivalent = function(other) {
      var equal;
      equal = this.equals(other);
      if (equal == null) {
        return false;
      }
      return equal;
    };

    return Ratio;

  })(Expression);

  module.exports.createRatio = createRatio = function(numerator, denominator) {
    return new Ratio({
      numerator: numerator,
      denominator: denominator
    });
  };

}).call(this);

//# sourceMappingURL=ratio.js.map
