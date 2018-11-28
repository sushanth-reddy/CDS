// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, Availability, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  (informative) A container for slot(s) of time that may be available for booking appointments.
  @class Availability
  @exports Availability as Availability
   */

  Availability = (function(superClass) {
    extend(Availability, superClass);

    function Availability(json) {
      this.json = json;
      Availability.__super__.constructor.call(this, this.json);
    }


    /**
    External Ids for this item.
    @returns {Array} an array of {@link Identifier} objects
     */

    Availability.prototype.identifier = function() {
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
    The schedule type can be used for the categorization of healthcare services or other appointment types.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    Availability.prototype.type = function() {
      var i, item, len, ref, results;
      if (this.json['type']) {
        ref = this.json['type'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    The resource this availability resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
    @returns {Reference}
     */

    Availability.prototype.actor = function() {
      if (this.json['actor']) {
        return new Reference(this.json['actor']);
      }
    };


    /**
    The period of time that the slots that are attached to this availability resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
    @returns {Period}
     */

    Availability.prototype.planningHorizon = function() {
      if (this.json['planningHorizon']) {
        return new Period(this.json['planningHorizon']);
      }
    };


    /**
    Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
    @returns {Array} an array of {@link String} objects
     */

    Availability.prototype.comment = function() {
      return this.json['comment'];
    };


    /**
    When this availability was created, or last revised.
    @returns {Array} an array of {@link Date} objects
     */

    Availability.prototype.lastModified = function() {
      if (this.json['lastModified']) {
        return DT.DateTime.parse(this.json['lastModified']);
      }
    };

    return Availability;

  })(DomainResource);

  module.exports.Availability = Availability;

}).call(this);

//# sourceMappingURL=availability.js.map