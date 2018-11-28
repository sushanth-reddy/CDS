// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ConceptMap, ConceptMapElementComponent, ConceptMapElementMapComponent, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, OtherElementComponent, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  @class OtherElementComponent
  @exports  OtherElementComponent as OtherElementComponent
   */

  OtherElementComponent = (function(superClass) {
    extend(OtherElementComponent, superClass);

    function OtherElementComponent(json) {
      this.json = json;
      OtherElementComponent.__super__.constructor.call(this, this.json);
    }


    /**
    A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
    @returns {Array} an array of {@link String} objects
     */

    OtherElementComponent.prototype.element = function() {
      return this.json['element'];
    };


    /**
    The code system of the dependency code (if the source/dependency is a value set that cross code systems).
    @returns {Array} an array of {@link String} objects
     */

    OtherElementComponent.prototype.codeSystem = function() {
      return this.json['codeSystem'];
    };


    /**
    Identity (code or path) or the element/item that the map depends on / refers to.
    @returns {Array} an array of {@link String} objects
     */

    OtherElementComponent.prototype.code = function() {
      return this.json['code'];
    };

    return OtherElementComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class ConceptMapElementMapComponent
  @exports  ConceptMapElementMapComponent as ConceptMapElementMapComponent
   */

  ConceptMapElementMapComponent = (function(superClass) {
    extend(ConceptMapElementMapComponent, superClass);

    function ConceptMapElementMapComponent(json) {
      this.json = json;
      ConceptMapElementMapComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The code system of the target code (if the target is a value set that cross code systems).
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementMapComponent.prototype.codeSystem = function() {
      return this.json['codeSystem'];
    };


    /**
    Identity (code or path) or the element/item that the map refers to.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementMapComponent.prototype.code = function() {
      return this.json['code'];
    };


    /**
    The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from source to target (e.g. the source is 'wider' than the target.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementMapComponent.prototype.equivalence = function() {
      return this.json['equivalence'];
    };


    /**
    A description of status/issues in mapping that conveys additional information not represented in  the structured data.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementMapComponent.prototype.comments = function() {
      return this.json['comments'];
    };


    /**
    A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
    @returns {Array} an array of {@link OtherElementComponent} objects
     */

    ConceptMapElementMapComponent.prototype.product = function() {
      var i, item, len, ref, results;
      if (this.json['product']) {
        ref = this.json['product'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new OtherElementComponent(item));
        }
        return results;
      }
    };

    return ConceptMapElementMapComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class ConceptMapElementComponent
  @exports  ConceptMapElementComponent as ConceptMapElementComponent
   */

  ConceptMapElementComponent = (function(superClass) {
    extend(ConceptMapElementComponent, superClass);

    function ConceptMapElementComponent(json) {
      this.json = json;
      ConceptMapElementComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Code System (if the source is a value value set that crosses more than one code system).
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementComponent.prototype.codeSystem = function() {
      return this.json['codeSystem'];
    };


    /**
    Identity (code or path) or the element/item being mapped.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMapElementComponent.prototype.code = function() {
      return this.json['code'];
    };


    /**
    A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
    @returns {Array} an array of {@link OtherElementComponent} objects
     */

    ConceptMapElementComponent.prototype.dependsOn = function() {
      var i, item, len, ref, results;
      if (this.json['dependsOn']) {
        ref = this.json['dependsOn'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new OtherElementComponent(item));
        }
        return results;
      }
    };


    /**
    A concept from the target value set that this concept maps to.
    @returns {Array} an array of {@link ConceptMapElementMapComponent} objects
     */

    ConceptMapElementComponent.prototype.map = function() {
      var i, item, len, ref, results;
      if (this.json['map']) {
        ref = this.json['map'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ConceptMapElementMapComponent(item));
        }
        return results;
      }
    };

    return ConceptMapElementComponent;

  })(BackboneElement);


  /**
  A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
  @class ConceptMap
  @exports ConceptMap as ConceptMap
   */

  ConceptMap = (function(superClass) {
    extend(ConceptMap, superClass);

    function ConceptMap(json) {
      this.json = json;
      ConceptMap.__super__.constructor.call(this, this.json);
    }


    /**
    The identifier that is used to identify this concept map when it is referenced in a specification, model, design or an instance (should be globally unique OID, UUID, or URI).
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.identifier = function() {
      return this.json['identifier'];
    };


    /**
    The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.version = function() {
      return this.json['version'];
    };


    /**
    A free text natural language name describing the concept map.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.name = function() {
      return this.json['name'];
    };


    /**
    The name of the individual or organization that published the concept map.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.publisher = function() {
      return this.json['publisher'];
    };


    /**
    Contacts of the publisher to assist a user in finding and communicating with the publisher.
    @returns {Array} an array of {@link ContactPoint} objects
     */

    ConceptMap.prototype.telecom = function() {
      var i, item, len, ref, results;
      if (this.json['telecom']) {
        ref = this.json['telecom'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ContactPoint(item));
        }
        return results;
      }
    };


    /**
    A free text natural language description of the use of the concept map - reason for definition, conditions of use, etc.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.description = function() {
      return this.json['description'];
    };


    /**
    A copyright statement relating to the concept map and/or its contents.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.copyright = function() {
      return this.json['copyright'];
    };


    /**
    The status of the concept map.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.status = function() {
      return this.json['status'];
    };


    /**
    This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
    @returns {Array} an array of {@link boolean} objects
     */

    ConceptMap.prototype.experimental = function() {
      return this.json['experimental'];
    };


    /**
    The date that the concept map status was last changed.
    @returns {Array} an array of {@link Date} objects
     */

    ConceptMap.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    The source value set that specifies the concepts that are being mapped.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.sourceUri = function() {
      return this.json['sourceUri'];
    };


    /**
    The source value set that specifies the concepts that are being mapped.
    @returns {Reference}
     */

    ConceptMap.prototype.sourceReference = function() {
      if (this.json['sourceReference']) {
        return new Reference(this.json['sourceReference']);
      }
    };


    /**
    The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
    @returns {Array} an array of {@link String} objects
     */

    ConceptMap.prototype.targetUri = function() {
      return this.json['targetUri'];
    };


    /**
    The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
    @returns {Reference}
     */

    ConceptMap.prototype.targetReference = function() {
      if (this.json['targetReference']) {
        return new Reference(this.json['targetReference']);
      }
    };


    /**
    Mappings for an individual concept in the source to one or more concepts in the target.
    @returns {Array} an array of {@link ConceptMapElementComponent} objects
     */

    ConceptMap.prototype.element = function() {
      var i, item, len, ref, results;
      if (this.json['element']) {
        ref = this.json['element'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ConceptMapElementComponent(item));
        }
        return results;
      }
    };

    return ConceptMap;

  })(DomainResource);

  module.exports.ConceptMap = ConceptMap;

}).call(this);

//# sourceMappingURL=conceptmap.js.map