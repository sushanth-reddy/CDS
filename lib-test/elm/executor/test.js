// Generated by CoffeeScript 1.9.2
(function() {
  var data, p1, p2, ref, setup, should;

  should = require('should');

  setup = require('../../setup');

  data = require('./data');

  ref = require('./patients'), p1 = ref.p1, p2 = ref.p2;

  describe('Age', function() {
    this.beforeEach(function() {
      setup(this, data, [p1, p2]);
      return this.results = this.executor.withLibrary(this.lib).exec(this.patientSource);
    });
    it('should have correct patient results', function() {
      this.results.patientResults['1'].Age.should.equal(32);
      return this.results.patientResults['2'].Age.should.equal(5);
    });
    it('should have the correct population results', function() {
      return this.results.populationResults.AgeSum.should.equal(37);
    });
    return it('should be able to reference other population context expressions', function() {
      return this.results.populationResults.AgeSumRef.should.equal(37);
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
