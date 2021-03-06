// Generated by CoffeeScript 1.9.2
(function() {
  var data, p1, setup, should, vsets;

  should = require('should');

  setup = require('../../setup');

  data = require('./data');

  vsets = require('./valuesets');

  p1 = require('./patients').p1;

  describe('Retrieve', function() {
    this.beforeEach(function() {
      return setup(this, data, [p1], vsets);
    });
    it('should find conditions', function() {
      var c;
      c = this.conditions.exec(this.ctx);
      c.should.have.length(2);
      c[0].id().should.equal('http://cqframework.org/3/2');
      return c[1].id().should.equal('http://cqframework.org/3/4');
    });
    it('should find encounter performances', function() {
      var e;
      e = this.encounters.exec(this.ctx);
      e.should.have.length(3);
      e[0].id().should.equal('http://cqframework.org/3/1');
      e[1].id().should.equal('http://cqframework.org/3/3');
      return e[2].id().should.equal('http://cqframework.org/3/5');
    });
    it('should find observations with a value set', function() {
      var p;
      p = this.pharyngitisConditions.exec(this.ctx);
      p.should.have.length(1);
      return p[0].id().should.equal('http://cqframework.org/3/2');
    });
    it('should find encounter performances with a value set', function() {
      var a;
      a = this.ambulatoryEncounters.exec(this.ctx);
      a.should.have.length(3);
      a[0].id().should.equal('http://cqframework.org/3/1');
      a[1].id().should.equal('http://cqframework.org/3/3');
      return a[2].id().should.equal('http://cqframework.org/3/5');
    });
    it('should find encounter performances by service type', function() {
      var e;
      e = this.encountersByServiceType.exec(this.ctx);
      e.should.have.length(3);
      e[0].id().should.equal('http://cqframework.org/3/1');
      e[1].id().should.equal('http://cqframework.org/3/3');
      return e[2].id().should.equal('http://cqframework.org/3/5');
    });
    it('should not find conditions with wrong valueset', function() {
      var e;
      e = this.wrongValueSet.exec(this.ctx);
      return e.should.be.empty;
    });
    it('should not find encounter performances using wrong codeProperty', function() {
      var e;
      e = this.wrongCodeProperty.exec(this.ctx);
      return e.should.be.empty;
    });
    it('should find conditions by specific pharyngitis code', function() {
      var e;
      e = this.conditionsByCode.exec(this.ctx);
      e.should.have.length(1);
      return e[0].id().should.equal('http://cqframework.org/3/2');
    });
    return it('should find conditions by specific pharyngitis concept', function() {
      var e;
      e = this.conditionsByConcept.exec(this.ctx);
      e.should.have.length(1);
      return e[0].id().should.equal('http://cqframework.org/3/2');
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
