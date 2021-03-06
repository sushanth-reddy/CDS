// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, ReferralRequest, Resource, SampledData, Timing,
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
  Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organisation.
  @class ReferralRequest
  @exports ReferralRequest as ReferralRequest
   */

  ReferralRequest = (function(superClass) {
    extend(ReferralRequest, superClass);

    function ReferralRequest(json) {
      this.json = json;
      ReferralRequest.__super__.constructor.call(this, this.json);
    }


    /**
    The workflow status of the referral or transfer of care request.
    @returns {Array} an array of {@link String} objects
     */

    ReferralRequest.prototype.status = function() {
      return this.json['status'];
    };


    /**
    Business Id that uniquely identifies the referral/care transfer request instance.
    @returns {Array} an array of {@link Identifier} objects
     */

    ReferralRequest.prototype.identifier = function() {
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
    An indication of the type of referral (or where applicable the type of transfer of care) request.
    @returns {CodeableConcept}
     */

    ReferralRequest.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.
    @returns {CodeableConcept}
     */

    ReferralRequest.prototype.specialty = function() {
      if (this.json['specialty']) {
        return new CodeableConcept(this.json['specialty']);
      }
    };


    /**
    An indication of the urgency of referral (or where applicable the type of transfer of care) request.
    @returns {CodeableConcept}
     */

    ReferralRequest.prototype.priority = function() {
      if (this.json['priority']) {
        return new CodeableConcept(this.json['priority']);
      }
    };


    /**
    The patient who is the subject of a referral or transfer of care request.
    @returns {Reference}
     */

    ReferralRequest.prototype.patient = function() {
      if (this.json['patient']) {
        return new Reference(this.json['patient']);
      }
    };


    /**
    The healthcare provider or provider organization who/which initaited the referral/transfer of care request. Can also be  Patient (a self referral).
    @returns {Reference}
     */

    ReferralRequest.prototype.requester = function() {
      if (this.json['requester']) {
        return new Reference(this.json['requester']);
      }
    };


    /**
    The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
    @returns {Array} an array of {@link Reference} objects
     */

    ReferralRequest.prototype.recipient = function() {
      var i, item, len, ref, results;
      if (this.json['recipient']) {
        ref = this.json['recipient'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Reference(item));
        }
        return results;
      }
    };


    /**
    The encounter at which the request for referral or transfer of care is initiated.
    @returns {Reference}
     */

    ReferralRequest.prototype.encounter = function() {
      if (this.json['encounter']) {
        return new Reference(this.json['encounter']);
      }
    };


    /**
    Date/DateTime the request for referral or transfer of care is sent by the author.
    @returns {Array} an array of {@link Date} objects
     */

    ReferralRequest.prototype.dateSent = function() {
      if (this.json['dateSent']) {
        return DT.DateTime.parse(this.json['dateSent']);
      }
    };


    /**
    Description of clinical condition indicating why referral/transfer of care is requested.
    @returns {CodeableConcept}
     */

    ReferralRequest.prototype.reason = function() {
      if (this.json['reason']) {
        return new CodeableConcept(this.json['reason']);
      }
    };


    /**
    The reason gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
    @returns {Array} an array of {@link String} objects
     */

    ReferralRequest.prototype.description = function() {
      return this.json['description'];
    };


    /**
    The service(s) that is/are requested to be provided to the patient.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    ReferralRequest.prototype.serviceRequested = function() {
      var i, item, len, ref, results;
      if (this.json['serviceRequested']) {
        ref = this.json['serviceRequested'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.
    @returns {Array} an array of {@link Reference} objects
     */

    ReferralRequest.prototype.supportingInformation = function() {
      var i, item, len, ref, results;
      if (this.json['supportingInformation']) {
        ref = this.json['supportingInformation'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Reference(item));
        }
        return results;
      }
    };


    /**
    The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
    @returns {Period}
     */

    ReferralRequest.prototype.fulfillmentTime = function() {
      if (this.json['fulfillmentTime']) {
        return new Period(this.json['fulfillmentTime']);
      }
    };

    return ReferralRequest;

  })(DomainResource);

  module.exports.ReferralRequest = ReferralRequest;

}).call(this);

//# sourceMappingURL=referralrequest.js.map
