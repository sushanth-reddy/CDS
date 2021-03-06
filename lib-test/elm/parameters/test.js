// Generated by CoffeeScript 1.9.2
(function() {
  var Code, Concept, Date, DateTime, Interval, Quantity, data, ref, ref1, setup, should;

  should = require('should');

  setup = require('../../setup');

  data = require('./data');

  ref = require('../../../lib/datatypes/clinical'), Code = ref.Code, Concept = ref.Concept;

  ref1 = require('../../../lib/datatypes/datetime'), DateTime = ref1.DateTime, Date = ref1.Date;

  Interval = require('../../../lib/datatypes/interval').Interval;

  Quantity = require('../../../lib/elm/quantity').Quantity;

  describe('ParameterDef', function() {
    this.beforeEach(function() {
      setup(this, data);
      return this.param = this.lib.parameters.MeasureYear;
    });
    it('should have a name', function() {
      return this.param.name.should.equal('MeasureYear');
    });
    it('should execute to default value', function() {
      return this.param.exec(this.ctx).should.equal(2012);
    });
    it('should execute to provided value', function() {
      return this.param.exec(this.ctx.withParameters({
        MeasureYear: 2013
      })).should.equal(2013);
    });
    it('should work with typed int parameters', function() {
      var intParam;
      intParam = this.lib.parameters.IntParameter;
      return intParam.exec(this.ctx.withParameters({
        IntParameter: 17
      })).should.equal(17);
    });
    it('should work with typed list parameters', function() {
      var listParam;
      listParam = this.lib.parameters.ListParameter;
      return listParam.exec(this.ctx.withParameters({
        ListParameter: ['a', 'b', 'c']
      })).should.eql(['a', 'b', 'c']);
    });
    return it('should work with typed tuple parameters', function() {
      var tupleParam, v;
      tupleParam = this.lib.parameters.TupleParameter;
      v = {
        a: 1,
        b: 'bee',
        c: true,
        d: [10, 9, 8],
        e: {
          f: 'eff',
          g: false
        }
      };
      return tupleParam.exec(this.ctx.withParameters({
        TupleParameter: v
      })).should.eql(v);
    });
  });

  describe('ParameterRef', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should have a name', function() {
      return this.foo.name.should.equal('FooP');
    });
    it('should execute to default value', function() {
      return this.foo.exec(this.ctx).should.equal('Bar');
    });
    it('should execute to provided value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: 'Bah'
      })).should.equal('Bah');
    });
    return it('should fail when provided value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: 12
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('BooleanParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: true
      })).should.equal(true);
    });
    it('should throw when provided value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: 12
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.equal(true);
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: false
      })).should.equal(false);
    });
    return it('should throw when overriding value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooDP: 12
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('DecimalParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: 3.0
      })).should.equal(3.0);
    });
    it('should throw when provided value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: '3'
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.equal(1.5);
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: 3.0
      })).should.equal(3.0);
    });
    return it('should throw when overriding value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooDP: '3'
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('IntegerParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: 3
      })).should.equal(3);
    });
    it('should throw when provided value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: 3.5
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.equal(2);
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: 3
      })).should.equal(3);
    });
    return it('should throw when overriding value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooDP: 3.5
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('StringParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: 'Hello World'
      })).should.equal('Hello World');
    });
    it('should throw when provided value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: 42
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.equal('Hello');
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: 'Hello World'
      })).should.equal('Hello World');
    });
    return it('should throw when overriding value is wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooDP: 42
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('ConceptParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var c;
      c = new Concept([new Code("foo", "http://foo.org")], "Foo");
      return this.foo.exec(this.ctx.withParameters({
        FooP: c
      })).should.equal(c);
    });
    it('should throw when provided value is wrong type', function() {
      var c;
      c = new Code("foo", "http://foo.org");
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: c
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(new Concept([new Code("FooTest", "http://footest.org")], "Foo Test"));
    });
    it('should execute to overriding valid value', function() {
      var c;
      c = new Concept([new Code("foo", "http://foo.org")], "Foo");
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: c
      })).should.equal(c);
    });
    return it('should throw when overriding value is wrong type', function() {
      var c;
      c = new Code("foo", "http://foo.org");
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooDP: c
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('DateTimeParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var d;
      d = DateTime.parse('2012-10-25T12:55:14.456+00');
      return this.foo.exec(this.ctx.withParameters({
        FooP: d
      })).should.equal(d);
    });
    it('should throw when provided value is wrong type', function() {
      var d;
      d = "2012-10-25T12:55:14.456+00";
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: d
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(DateTime.parse('2012-04-01T12:11:10'));
    });
    it('should execute to overriding valid value', function() {
      var d;
      d = DateTime.parse('2012-10-25T12:55:14.456+00');
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: d
      })).should.equal(d);
    });
    return it('should throw when overriding value is wrong type', function() {
      var d;
      d = "2012-10-25T12:55:14.456+00";
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: d
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('DateParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var d;
      d = Date.parse('2012-10-25');
      return this.foo.exec(this.ctx.withParameters({
        FooP: d
      })).should.equal(d);
    });
    it('should throw when provided value is wrong type', function() {
      var d;
      d = "2012-10-25";
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: d
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(Date.parse('2012-04-01'));
    });
    it('should execute to overriding valid value', function() {
      var d;
      d = Date.parse('2012-10-25');
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: d
      })).should.equal(d);
    });
    return it('should throw when overriding value is wrong type', function() {
      var d;
      d = "2012-10-25";
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: d
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('QuantityParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var q;
      q = new Quantity({
        value: 5,
        unit: "mg"
      });
      return this.foo.exec(this.ctx.withParameters({
        FooP: q
      })).should.equal(q);
    });
    it('should throw when provided value is wrong type', function() {
      var q;
      q = 5;
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: q
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(new Quantity({
        localId: '4',
        value: 10,
        unit: "dL"
      }));
    });
    it('should execute to overriding valid value', function() {
      var q;
      q = new Quantity({
        value: 5,
        unit: "mg"
      });
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: q
      })).should.equal(q);
    });
    return it('should throw when overriding value is wrong type', function() {
      var q;
      q = 5;
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: q
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('TimeParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var t;
      t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
      return this.foo.exec(this.ctx.withParameters({
        FooP: t
      })).should.equal(t);
    });
    it('should throw when provided value is wrong type', function() {
      var t;
      t = DateTime.parse('2012-10-25T12:55:14.456+00');
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: t
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(DateTime.parse('2012-10-25T12:00:00').getTime());
    });
    it('should execute to overriding valid value', function() {
      var t;
      t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: t
      })).should.equal(t);
    });
    return it('should throw when overriding value is wrong type', function() {
      var t;
      t = DateTime.parse('2012-10-25T12:55:14.456+00');
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: t
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('ListParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: ["Hello", "World"]
      })).should.eql(["Hello", "World"]);
    });
    it('should throw when provided value is not a list', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: "Hello World"
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should throw when list contains a wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: ["Hello", 2468]
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(['a', 'b', 'c']);
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: ["Hello", "World"]
      })).should.eql(["Hello", "World"]);
    });
    it('should throw when overriding value is not a list', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: "Hello World"
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    return it('should throw when overriding list contains a wrong type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: ["Hello", 2468]
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('IntervalParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      return this.foo.exec(this.ctx.withParameters({
        FooP: new Interval(1, 5)
      })).should.eql(new Interval(1, 5));
    });
    it('should throw when provided value is not an interval', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: [1, 5]
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should throw when interval contains a wrong point type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: new Interval(1.5, 5.5)
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql(new Interval(2, 6));
    });
    it('should execute to overriding valid value', function() {
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: new Interval(1, 5)
      })).should.eql(new Interval(1, 5));
    });
    it('should throw when overriding value is not an interval', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: [1, 5]
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    return it('should throw when overriding interval contains a wrong point type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: new Interval(1.5, 5.5)
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('TupleParameterTypes', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute to provided valid value', function() {
      var t;
      t = {
        Hello: "World",
        MeaningOfLife: 42
      };
      return this.foo.exec(this.ctx.withParameters({
        FooP: t
      })).should.eql(t);
    });
    it('should allow missing tuple properties', function() {
      var t;
      t = {
        MeaningOfLife: 42
      };
      return this.foo.exec(this.ctx.withParameters({
        FooP: t
      })).should.eql(t);
    });
    it('should throw when provided value is not a tuple', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: "Hello World"
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should throw when tuple contains a wrong property type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo.exec(_this.ctx.withParameters({
            FooP: {
              Hello: "World",
              MeaningOfLife: "Forty-Two"
            }
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    it('should execute to default value', function() {
      return this.foo2.exec(this.ctx).should.eql({
        Hello: "Universe",
        MeaningOfLife: 24
      });
    });
    it('should execute to overriding valid value', function() {
      var t;
      t = {
        Hello: "World",
        MeaningOfLife: 42
      };
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: t
      })).should.eql(t);
    });
    it('should allow missing tuple properties in overriding tuple', function() {
      var t;
      t = {
        MeaningOfLife: 42
      };
      return this.foo2.exec(this.ctx.withParameters({
        FooDP: t
      })).should.eql(t);
    });
    it('should throw when overriding value is not a tuple', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: "Hello World"
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
    return it('should throw when overriding tuple contains a wrong property type', function() {
      return should((function(_this) {
        return function() {
          return _this.foo2.exec(_this.ctx.withParameters({
            FooP: {
              Hello: "World",
              MeaningOfLife: "Forty-Two"
            }
          }));
        };
      })(this))["throw"](/.*wrong type.*/);
    });
  });

  describe('DefaultAndNoDefault', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    return it('should be able to retrieve a provided value and a default value', function() {
      this.foo.exec(this.ctx.withParameters({
        FooWithNoDefault: 1
      })).should.eql(1);
      return this.foo2.exec(this.ctx.withParameters({
        FooWithNoDefault: 1
      })).should.eql(5);
    });
  });

  describe('MeasurementPeriodParameter', function() {
    this.beforeEach(function() {
      return setup(this, data);
    });
    it('should execute expression with a passed in measurement period in a child context', function() {
      var rctx;
      this.ctx = this.ctx.withParameters({
        "Measurement Period": new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2013, 1, 1, 0, 0, 0, 0))
      });
      rctx = this.ctx.childContext();
      return this.measurementPeriod.exec(rctx).should.equal(true);
    });
    return it('should execute expression with a passed in measurement period in a child context', function() {
      var r1ctx, r2ctx, r3ctx;
      this.ctx = this.ctx.withParameters({
        "Measurement Period": new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2013, 1, 1, 0, 0, 0, 0))
      });
      r1ctx = this.ctx.childContext();
      r2ctx = r1ctx.childContext();
      r3ctx = r2ctx.childContext();
      return this.measurementPeriod.exec(r3ctx).should.equal(true);
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
