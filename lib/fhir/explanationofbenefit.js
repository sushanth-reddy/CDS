// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, ExplanationOfBenefit, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information , for informing the subscriber of the benefits provided.
  @class ExplanationOfBenefit
  @exports ExplanationOfBenefit as ExplanationOfBenefit
   */

  ExplanationOfBenefit = (function(superClass) {
    extend(ExplanationOfBenefit, superClass);

    function ExplanationOfBenefit(json) {
      this.json = json;
      ExplanationOfBenefit.__super__.constructor.call(this, this.json);
    }


    /**
    The Response Business Identifier.
    @returns {Array} an array of {@link Identifier} objects
     */

    ExplanationOfBenefit.prototype.identifier = function() {
      var i, item, len, ref, results;
      if (this.json['identifier']) {
        ref = this.json['identifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Identifier(item));
        }
        return results;
      }
    };


    /**
    Original request resource referrence.
    @returns {Reference}
     */

    ExplanationOfBenefit.prototype.request = function() {
      if (this.json['request']) {
        return new Reference(this.json['request']);
      }
    };


    /**
    Transaction status: error, complete.
    @returns {Array} an array of {@link String} objects
     */

    ExplanationOfBenefit.prototype.outcome = function() {
      return this.json['outcome'];
    };


    /**
    A description of the status of the adjudication.
    @returns {Array} an array of {@link String} objects
     */

    ExplanationOfBenefit.prototype.disposition = function() {
      return this.json['disposition'];
    };


    /**
    The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
    @returns {Coding}
     */

    ExplanationOfBenefit.prototype.ruleset = function() {
      if (this.json['ruleset']) {
        return new Coding(this.json['ruleset']);
      }
    };


    /**
    The style (standard) and version of the original material which was converted into this resource.
    @returns {Coding}
     */

    ExplanationOfBenefit.prototype.originalRuleset = function() {
      if (this.json['originalRuleset']) {
        return new Coding(this.json['originalRuleset']);
      }
    };


    /**
    The date when the enclosed suite of services were performed or completed.
    @returns {Array} an array of {@link Date} objects
     */

    ExplanationOfBenefit.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    The Insurer who produced this adjudicated response.
    @returns {Reference}
     */

    ExplanationOfBenefit.prototype.organization = function() {
      if (this.json['organization']) {
        return new Reference(this.json['organization']);
      }
    };


    /**
    The practitioner who is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    ExplanationOfBenefit.prototype.requestProvider = function() {
      if (this.json['requestProvider']) {
        return new Reference(this.json['requestProvider']);
      }
    };


    /**
    The organization which is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    ExplanationOfBenefit.prototype.requestOrganization = function() {
      if (this.json['requestOrganization']) {
        return new Reference(this.json['requestOrganization']);
      }
    };

    return ExplanationOfBenefit;

  })(DomainResource);

  module.exports.ExplanationOfBenefit = ExplanationOfBenefit;

}).call(this);

//# sourceMappingURL=explanationofbenefit.js.map
