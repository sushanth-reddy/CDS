// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, OperationOutcome, OperationOutcomeIssueComponent, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  DT = require('../cql-datatypes');

  CORE = require('./core');

  Element = CORE.Element;

  Resource = CORE.Resource;

  Timing = CORE.Timing;

  Period = CORE.Period;

  Parameters = CORE.Parameters;

  Coding = CORE.Coding;

  Resource = CORE.Resource;

  Range = CORE.Range;

  Quantity = CORE.Quantity;

  Attachment = CORE.Attachment;

  BackboneElement = CORE.BackboneElement;

  DomainResource = CORE.DomainResource;

  ContactPoint = CORE.ContactPoint;

  ElementDefinition = CORE.ElementDefinition;

  Extension = CORE.Extension;

  HumanName = CORE.HumanName;

  Address = CORE.Address;

  Ratio = CORE.Ratio;

  SampledData = CORE.SampledData;

  Reference = CORE.Reference;

  CodeableConcept = CORE.CodeableConcept;

  Identifier = CORE.Identifier;

  Narrative = CORE.Narrative;

  Element = CORE.Element;


  /** 
  Embedded class
  @class OperationOutcomeIssueComponent
  @exports  OperationOutcomeIssueComponent as OperationOutcomeIssueComponent
   */

  OperationOutcomeIssueComponent = (function(superClass) {
    extend(OperationOutcomeIssueComponent, superClass);

    function OperationOutcomeIssueComponent(json) {
      this.json = json;
      OperationOutcomeIssueComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Indicates whether the issue indicates a variation from successful processing.
    @returns {Array} an array of {@link String} objects
     */

    OperationOutcomeIssueComponent.prototype.severity = function() {
      return this.json['severity'];
    };


    /**
    A code indicating the type of error, warning or information message.
    @returns {Coding}
     */

    OperationOutcomeIssueComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    Additional description of the issue.
    @returns {Array} an array of {@link String} objects
     */

    OperationOutcomeIssueComponent.prototype.details = function() {
      return this.json['details'];
    };


    /**
    A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.
    @returns {Array} an array of {@link String} objects
     */

    OperationOutcomeIssueComponent.prototype.location = function() {
      return this.json['location'];
    };

    return OperationOutcomeIssueComponent;

  })(BackboneElement);


  /**
  A collection of error, warning or information messages that result from a system action.
  @class OperationOutcome
  @exports OperationOutcome as OperationOutcome
   */

  OperationOutcome = (function(superClass) {
    extend(OperationOutcome, superClass);

    function OperationOutcome(json) {
      this.json = json;
      OperationOutcome.__super__.constructor.call(this, this.json);
    }


    /**
    An error, warning or information message that results from a system action.
    @returns {Array} an array of {@link OperationOutcomeIssueComponent} objects
     */

    OperationOutcome.prototype.issue = function() {
      var i, item, len, ref, results;
      if (this.json['issue']) {
        ref = this.json['issue'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new OperationOutcomeIssueComponent(item));
        }
        return results;
      }
    };

    return OperationOutcome;

  })(DomainResource);

  module.exports.OperationOutcome = OperationOutcome;

}).call(this);

//# sourceMappingURL=operationoutcome.js.map