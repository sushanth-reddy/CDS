// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, StatusResponse, StatusResponseNotesComponent, Timing,
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
  @class StatusResponseNotesComponent
  @exports  StatusResponseNotesComponent as StatusResponseNotesComponent
   */

  StatusResponseNotesComponent = (function(superClass) {
    extend(StatusResponseNotesComponent, superClass);

    function StatusResponseNotesComponent(json) {
      this.json = json;
      StatusResponseNotesComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The note purpose: Print/Display.
    @returns {Coding}
     */

    StatusResponseNotesComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    The note text.
    @returns {Array} an array of {@link String} objects
     */

    StatusResponseNotesComponent.prototype.text = function() {
      return this.json['text'];
    };

    return StatusResponseNotesComponent;

  })(BackboneElement);


  /**
  This resource provides processing status, errors and notes from the processing of a resource.
  @class StatusResponse
  @exports StatusResponse as StatusResponse
   */

  StatusResponse = (function(superClass) {
    extend(StatusResponse, superClass);

    function StatusResponse(json) {
      this.json = json;
      StatusResponse.__super__.constructor.call(this, this.json);
    }


    /**
    The Response Business Identifier.
    @returns {Array} an array of {@link Identifier} objects
     */

    StatusResponse.prototype.identifier = function() {
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

    StatusResponse.prototype.request = function() {
      if (this.json['request']) {
        return new Reference(this.json['request']);
      }
    };


    /**
    Transaction status: error, complete, held.
    @returns {Coding}
     */

    StatusResponse.prototype.outcome = function() {
      if (this.json['outcome']) {
        return new Coding(this.json['outcome']);
      }
    };


    /**
    A description of the status of the adjudication or processing.
    @returns {Array} an array of {@link String} objects
     */

    StatusResponse.prototype.disposition = function() {
      return this.json['disposition'];
    };


    /**
    The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
    @returns {Coding}
     */

    StatusResponse.prototype.ruleset = function() {
      if (this.json['ruleset']) {
        return new Coding(this.json['ruleset']);
      }
    };


    /**
    The style (standard) and version of the original material which was converted into this resource.
    @returns {Coding}
     */

    StatusResponse.prototype.originalRuleset = function() {
      if (this.json['originalRuleset']) {
        return new Coding(this.json['originalRuleset']);
      }
    };


    /**
    The date when the enclosed suite of services were performed or completed.
    @returns {Array} an array of {@link Date} objects
     */

    StatusResponse.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    The Insurer who produced this adjudicated response.
    @returns {Reference}
     */

    StatusResponse.prototype.organization = function() {
      if (this.json['organization']) {
        return new Reference(this.json['organization']);
      }
    };


    /**
    The practitioner who is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    StatusResponse.prototype.requestProvider = function() {
      if (this.json['requestProvider']) {
        return new Reference(this.json['requestProvider']);
      }
    };


    /**
    The organization which is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    StatusResponse.prototype.requestOrganization = function() {
      if (this.json['requestOrganization']) {
        return new Reference(this.json['requestOrganization']);
      }
    };


    /**
    The form to be used for printing the content.
    @returns {Coding}
     */

    StatusResponse.prototype.form = function() {
      if (this.json['form']) {
        return new Coding(this.json['form']);
      }
    };


    /**
    Suite of processing note or additional requirements is the processing has been held.
    @returns {Array} an array of {@link StatusResponseNotesComponent} objects
     */

    StatusResponse.prototype.notes = function() {
      var i, item, len, ref, results;
      if (this.json['notes']) {
        ref = this.json['notes'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new StatusResponseNotesComponent(item));
        }
        return results;
      }
    };


    /**
    Processing errors.
    @returns {Array} an array of {@link Coding} objects
     */

    StatusResponse.prototype.error = function() {
      var i, item, len, ref, results;
      if (this.json['error']) {
        ref = this.json['error'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };

    return StatusResponse;

  })(DomainResource);

  module.exports.StatusResponse = StatusResponse;

}).call(this);

//# sourceMappingURL=statusresponse.js.map
