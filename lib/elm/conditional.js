// Generated by CoffeeScript 1.9.2
(function() {
  var Case, CaseItem, Expression, If, build, equals,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Expression = require('./expression').Expression;

  build = require('./builder').build;

  equals = require('../util/comparison').equals;

  module.exports.If = If = (function(superClass) {
    extend(If, superClass);

    function If(json) {
      If.__super__.constructor.apply(this, arguments);
      this.condition = build(json.condition);
      this.th = build(json.then);
      this.els = build(json["else"]);
    }

    If.prototype.exec = function(ctx) {
      if (this.condition.execute(ctx)) {
        return this.th.execute(ctx);
      } else {
        return this.els.execute(ctx);
      }
    };

    return If;

  })(Expression);

  module.exports.CaseItem = CaseItem = CaseItem = (function() {
    function CaseItem(json) {
      this.when = build(json.when);
      this.then = build(json.then);
    }

    return CaseItem;

  })();

  module.exports.Case = Case = (function(superClass) {
    extend(Case, superClass);

    function Case(json) {
      var ci;
      Case.__super__.constructor.apply(this, arguments);
      this.comparand = build(json.comparand);
      this.caseItems = (function() {
        var i, len, ref, results;
        ref = json.caseItem;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          ci = ref[i];
          results.push(new CaseItem(ci));
        }
        return results;
      })();
      this.els = build(json["else"]);
    }

    Case.prototype.exec = function(ctx) {
      if (this.comparand) {
        return this.exec_selected(ctx);
      } else {
        return this.exec_standard(ctx);
      }
    };

    Case.prototype.exec_selected = function(ctx) {
      var ci, i, len, ref, val;
      val = this.comparand.execute(ctx);
      ref = this.caseItems;
      for (i = 0, len = ref.length; i < len; i++) {
        ci = ref[i];
        if (equals(ci.when.execute(ctx), val)) {
          return ci.then.execute(ctx);
        }
      }
      return this.els.execute(ctx);
    };

    Case.prototype.exec_standard = function(ctx) {
      var ci, i, len, ref;
      ref = this.caseItems;
      for (i = 0, len = ref.length; i < len; i++) {
        ci = ref[i];
        if (ci.when.execute(ctx)) {
          return ci.then.execute(ctx);
        }
      }
      return this.els.execute(ctx);
    };

    return Case;

  })(Expression);

}).call(this);

//# sourceMappingURL=conditional.js.map