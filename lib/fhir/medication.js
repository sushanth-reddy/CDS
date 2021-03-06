// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, DT, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, Medication, MedicationPackageComponent, MedicationPackageContentComponent, MedicationProductComponent, MedicationProductIngredientComponent, Narrative, Parameters, Period, Quantity, Range, Ratio, Reference, Resource, SampledData, Timing,
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
  @class MedicationProductIngredientComponent
  @exports  MedicationProductIngredientComponent as MedicationProductIngredientComponent
   */

  MedicationProductIngredientComponent = (function(superClass) {
    extend(MedicationProductIngredientComponent, superClass);

    function MedicationProductIngredientComponent(json) {
      this.json = json;
      MedicationProductIngredientComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The actual ingredient - either a substance (simple ingredient) or another medication.
    @returns {Reference}
     */

    MedicationProductIngredientComponent.prototype.item = function() {
      if (this.json['item']) {
        return new Reference(this.json['item']);
      }
    };


    /**
    Specifies how many (or how much) of the items there are in this Medication.  E.g. 250 mg per tablet.
    @returns {Ratio}
     */

    MedicationProductIngredientComponent.prototype.amount = function() {
      if (this.json['amount']) {
        return new Ratio(this.json['amount']);
      }
    };

    return MedicationProductIngredientComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class MedicationProductComponent
  @exports  MedicationProductComponent as MedicationProductComponent
   */

  MedicationProductComponent = (function(superClass) {
    extend(MedicationProductComponent, superClass);

    function MedicationProductComponent(json) {
      this.json = json;
      MedicationProductComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Describes the form of the item.  Powder; tables; carton.
    @returns {CodeableConcept}
     */

    MedicationProductComponent.prototype.form = function() {
      if (this.json['form']) {
        return new CodeableConcept(this.json['form']);
      }
    };


    /**
    Identifies a particular constituent of interest in the product.
    @returns {Array} an array of {@link MedicationProductIngredientComponent} objects
     */

    MedicationProductComponent.prototype.ingredient = function() {
      var i, item, len, ref, results;
      if (this.json['ingredient']) {
        ref = this.json['ingredient'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new MedicationProductIngredientComponent(item));
        }
        return results;
      }
    };

    return MedicationProductComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class MedicationPackageContentComponent
  @exports  MedicationPackageContentComponent as MedicationPackageContentComponent
   */

  MedicationPackageContentComponent = (function(superClass) {
    extend(MedicationPackageContentComponent, superClass);

    function MedicationPackageContentComponent(json) {
      this.json = json;
      MedicationPackageContentComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Identifies one of the items in the package.
    @returns {Reference}
     */

    MedicationPackageContentComponent.prototype.item = function() {
      if (this.json['item']) {
        return new Reference(this.json['item']);
      }
    };


    /**
    The amount of the product that is in the package.
    @returns {Quantity}
     */

    MedicationPackageContentComponent.prototype.amount = function() {
      if (this.json['amount']) {
        return new Quantity(this.json['amount']);
      }
    };

    return MedicationPackageContentComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class MedicationPackageComponent
  @exports  MedicationPackageComponent as MedicationPackageComponent
   */

  MedicationPackageComponent = (function(superClass) {
    extend(MedicationPackageComponent, superClass);

    function MedicationPackageComponent(json) {
      this.json = json;
      MedicationPackageComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The kind of container that this package comes as.
    @returns {CodeableConcept}
     */

    MedicationPackageComponent.prototype.container = function() {
      if (this.json['container']) {
        return new CodeableConcept(this.json['container']);
      }
    };


    /**
    A set of components that go to make up the described item.
    @returns {Array} an array of {@link MedicationPackageContentComponent} objects
     */

    MedicationPackageComponent.prototype.content = function() {
      var i, item, len, ref, results;
      if (this.json['content']) {
        ref = this.json['content'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new MedicationPackageContentComponent(item));
        }
        return results;
      }
    };

    return MedicationPackageComponent;

  })(BackboneElement);


  /**
  Primarily used for identification and definition of Medication, but also covers ingredients and packaging.
  @class Medication
  @exports Medication as Medication
   */

  Medication = (function(superClass) {
    extend(Medication, superClass);

    function Medication(json) {
      this.json = json;
      Medication.__super__.constructor.call(this, this.json);
    }


    /**
    The common/commercial name of the medication absent information such as strength, form, etc.  E.g. Acetaminophen, Tylenol 3, etc.  The fully coordinated name is communicated as the display of Medication.code.
    @returns {Array} an array of {@link String} objects
     */

    Medication.prototype.name = function() {
      return this.json['name'];
    };


    /**
    A code (or set of codes) that identify this medication.   Usage note: This could be a standard drug code such as a drug regulator code, RxNorm code, SNOMED CT code, etc. It could also be a local formulary code, optionally with translations to the standard drug codes.
    @returns {CodeableConcept}
     */

    Medication.prototype.code = function() {
      if (this.json['code']) {
        return new CodeableConcept(this.json['code']);
      }
    };


    /**
    Set to true if the item is attributable to a specific manufacturer (even if we don't know who that is).
    @returns {Array} an array of {@link boolean} objects
     */

    Medication.prototype.isBrand = function() {
      return this.json['isBrand'];
    };


    /**
    Describes the details of the manufacturer.
    @returns {Reference}
     */

    Medication.prototype.manufacturer = function() {
      if (this.json['manufacturer']) {
        return new Reference(this.json['manufacturer']);
      }
    };


    /**
    Medications are either a single administrable product or a package that contains one or more products.
    @returns {Array} an array of {@link String} objects
     */

    Medication.prototype.kind = function() {
      return this.json['kind'];
    };


    /**
    Information that only applies to products (not packages).
    @returns {MedicationProductComponent}
     */

    Medication.prototype.product = function() {
      if (this.json['product']) {
        return new MedicationProductComponent(this.json['product']);
      }
    };


    /**
    Information that only applies to packages (not products).
    @returns {MedicationPackageComponent}
     */

    Medication.prototype["package"] = function() {
      if (this.json['package']) {
        return new MedicationPackageComponent(this.json['package']);
      }
    };

    return Medication;

  })(DomainResource);

  module.exports.Medication = Medication;

}).call(this);

//# sourceMappingURL=medication.js.map
