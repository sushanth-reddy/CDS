// Generated by CoffeeScript 1.9.2
(function() {
  var Expression, IncludeDef, UnimplementedExpression, UsingDef, VersionedIdentifier, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require('./expression'), Expression = ref.Expression, UnimplementedExpression = ref.UnimplementedExpression;

  module.exports.UsingDef = UsingDef = (function(superClass) {
    extend(UsingDef, superClass);

    function UsingDef() {
      return UsingDef.__super__.constructor.apply(this, arguments);
    }

    return UsingDef;

  })(UnimplementedExpression);

  module.exports.IncludeDef = IncludeDef = (function(superClass) {
    extend(IncludeDef, superClass);

    function IncludeDef() {
      return IncludeDef.__super__.constructor.apply(this, arguments);
    }

    return IncludeDef;

  })(UnimplementedExpression);

  module.exports.VersionedIdentifier = VersionedIdentifier = (function(superClass) {
    extend(VersionedIdentifier, superClass);

    function VersionedIdentifier() {
      return VersionedIdentifier.__super__.constructor.apply(this, arguments);
    }

    return VersionedIdentifier;

  })(UnimplementedExpression);

}).call(this);

//# sourceMappingURL=declaration.js.map
