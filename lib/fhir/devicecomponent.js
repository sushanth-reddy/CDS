// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DeviceComponent, DeviceComponentProductionSpecificationComponent, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  @class DeviceComponentProductionSpecificationComponent
  @exports  DeviceComponentProductionSpecificationComponent as DeviceComponentProductionSpecificationComponent
   */

  DeviceComponentProductionSpecificationComponent = (function(superClass) {
    extend(DeviceComponentProductionSpecificationComponent, superClass);

    function DeviceComponentProductionSpecificationComponent(json) {
      this.json = json;
      DeviceComponentProductionSpecificationComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.
    @returns {CodeableConcept}
     */

    DeviceComponentProductionSpecificationComponent.prototype.specType = function() {
      if (this.json['specType']) {
        return new CodeableConcept(this.json['specType']);
      }
    };


    /**
    Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.
    @returns {Identifier}
     */

    DeviceComponentProductionSpecificationComponent.prototype.componentId = function() {
      if (this.json['componentId']) {
        return new Identifier(this.json['componentId']);
      }
    };


    /**
    Describes the printable string defining the component.
    @returns {Array} an array of {@link String} objects
     */

    DeviceComponentProductionSpecificationComponent.prototype.productionSpec = function() {
      return this.json['productionSpec'];
    };

    return DeviceComponentProductionSpecificationComponent;

  })(BackboneElement);


  /**
  Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.
  @class DeviceComponent
  @exports DeviceComponent as DeviceComponent
   */

  DeviceComponent = (function(superClass) {
    extend(DeviceComponent, superClass);

    function DeviceComponent(json) {
      this.json = json;
      DeviceComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Describes the specific component type as defined in the object-oriented or metric nomenclature partition.
    @returns {CodeableConcept}
     */

    DeviceComponent.prototype.type = function() {
      if (this.json['type']) {
        return new CodeableConcept(this.json['type']);
      }
    };


    /**
    Describes the local assigned unique identification by the software. For example: handle ID.
    @returns {Identifier}
     */

    DeviceComponent.prototype.identifier = function() {
      if (this.json['identifier']) {
        return new Identifier(this.json['identifier']);
      }
    };


    /**
    Describes the timestamp for the most recent system change which includes device configuration or setting change.
    @returns {Array} an array of {@link Date} objects
     */

    DeviceComponent.prototype.lastSystemChange = function() {
      if (this.json['lastSystemChange']) {
        return DT.DateTime.parse(this.json['lastSystemChange']);
      }
    };


    /**
    Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.
    @returns {Reference}
     */

    DeviceComponent.prototype.source = function() {
      if (this.json['source']) {
        return new Reference(this.json['source']);
      }
    };


    /**
    Describes the link to the parent resource. For example: Channel is linked to its VMD parent.
    @returns {Reference}
     */

    DeviceComponent.prototype.parent = function() {
      if (this.json['parent']) {
        return new Reference(this.json['parent']);
      }
    };


    /**
    Indicates current operational status of the device. For example: On, Off, Standby, etc.
    @returns {Array} an array of {@link CodeableConcept} objects
     */

    DeviceComponent.prototype.operationalStatus = function() {
      var i, item, len, ref, results;
      if (this.json['operationalStatus']) {
        ref = this.json['operationalStatus'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CodeableConcept(item));
        }
        return results;
      }
    };


    /**
    Describes the parameter group supported by the current device component that is based on some nomenclature, e.g., cardiovascular.
    @returns {CodeableConcept}
     */

    DeviceComponent.prototype.parameterGroup = function() {
      if (this.json['parameterGroup']) {
        return new CodeableConcept(this.json['parameterGroup']);
      }
    };


    /**
    Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
    @returns {Array} an array of {@link String} objects
     */

    DeviceComponent.prototype.measurementPrinciple = function() {
      return this.json['measurementPrinciple'];
    };


    /**
    Describes the production specification such as component revision, serial number, etc.
    @returns {Array} an array of {@link DeviceComponentProductionSpecificationComponent} objects
     */

    DeviceComponent.prototype.productionSpecification = function() {
      var i, item, len, ref, results;
      if (this.json['productionSpecification']) {
        ref = this.json['productionSpecification'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new DeviceComponentProductionSpecificationComponent(item));
        }
        return results;
      }
    };


    /**
    Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
    @returns {CodeableConcept}
     */

    DeviceComponent.prototype.languageCode = function() {
      if (this.json['languageCode']) {
        return new CodeableConcept(this.json['languageCode']);
      }
    };

    return DeviceComponent;

  })(DomainResource);

  module.exports.DeviceComponent = DeviceComponent;

}).call(this);

//# sourceMappingURL=devicecomponent.js.map
