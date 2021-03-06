// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Substance, SubstanceIngredientComponent, SubstanceInstanceComponent, Timing,
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
  @class SubstanceInstanceComponent
  @exports  SubstanceInstanceComponent as SubstanceInstanceComponent
   */

  SubstanceInstanceComponent = (function(superClass) {
    extend(SubstanceInstanceComponent, superClass);

    function SubstanceInstanceComponent(json) {
      this.json = json;
      SubstanceInstanceComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Identifier associated with the package/container (usually a label affixed directly).
    @returns {Identifier}
     */

    SubstanceInstanceComponent.prototype.identifier = function() {
      if (this.json['identifier']) {
        return new Identifier(this.json['identifier']);
      }
    };


    /**
    When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
    @returns {Array} an array of {@link Date} objects
     */

    SubstanceInstanceComponent.prototype.expiry = function() {
      if (this.json['expiry']) {
        return DT.DateTime.parse(this.json['expiry']);
      }
    };


    /**
    The amount of the substance.
    @returns {Quantity}
     */

    SubstanceInstanceComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Quantity(this.json['quantity']);
      }
    };

    return SubstanceInstanceComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class SubstanceIngredientComponent
  @exports  SubstanceIngredientComponent as SubstanceIngredientComponent
   */

  SubstanceIngredientComponent = (function(superClass) {
    extend(SubstanceIngredientComponent, superClass);

    function SubstanceIngredientComponent(json) {
      this.json = json;
      SubstanceIngredientComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The amount of the ingredient in the substance - a concentration ratio.
    @returns {Ratio}
     */

    SubstanceIngredientComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Ratio(this.json['quantity']);
      }
    };


    /**
    Another substance that is a component of this substance.
    @returns {Reference}
     */

    SubstanceIngredientComponent.prototype.substance = function() {
      if (this.json['substance']) {
        return new Reference(this.json['substance']);
      }
    };

    return SubstanceIngredientComponent;

  })(BackboneElement);


  /**
  A homogeneous material with a definite composition.
  @class Substance
  @exports Substance as Substance
   */

  Substance = (function(superClass) {
    extend(Substance, superClass);

    function Substance(json) {
      this.json = json;
      Substance.__super__.constructor.call(this, this.json);
    }


    /**
    A code (or set of codes) that identify this substance.
    @returns {CodeableConcept}
     */

    Substance.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    A description of the substance - its appearance, handling requirements, and other usage notes.
    @returns {Array} an array of {@link String} objects
     */

    Substance.prototype.description = function() {
      return this.json['description'];
    };


    /**
    Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
    @returns {SubstanceInstanceComponent}
     */

    Substance.prototype.instance = function() {
      if (this.json['instance']) {
        return new SubstanceInstanceComponent(this.json['instance']);
      }
    };


    /**
    A substance can be composed of other substances.
    @returns {Array} an array of {@link SubstanceIngredientComponent} objects
     */

    Substance.prototype.ingredient = function() {
      var i, item, len, ref, results;
      if (this.json['ingredient']) {
        ref = this.json['ingredient'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new SubstanceIngredientComponent(item));
        }
        return results;
      }
    };

    return Substance;

  })(DomainResource);

  module.exports.Substance = Substance;

}).call(this);

//# sourceMappingURL=substance.js.map
