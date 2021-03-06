// Generated by CoffeeScript 1.9.2
(function() {
  var Address, Attachment, BackboneElement, CORE, CodeableConcept, Coding, ContactPoint, CoverageComponent, DT, DetailComponent, DiagnosisComponent, DomainResource, Element, ElementDefinition, Extension, HumanName, Identifier, ItemsComponent, MissingTeethComponent, Narrative, OralHealthClaim, OrthodonticPlanComponent, Parameters, PayeeComponent, Period, ProsthesisComponent, Quantity, Range, Ratio, Reference, Resource, SampledData, SubDetailComponent, Timing,
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
  @class PayeeComponent
  @exports  PayeeComponent as PayeeComponent
   */

  PayeeComponent = (function(superClass) {
    extend(PayeeComponent, superClass);

    function PayeeComponent(json) {
      this.json = json;
      PayeeComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Party to be reimbursed: Subscriber, provider, other.
    @returns {Coding}
     */

    PayeeComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
    @returns {Reference}
     */

    PayeeComponent.prototype.provider = function() {
      if (this.json['provider']) {
        return new Reference(this.json['provider']);
      }
    };


    /**
    The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
    @returns {Reference}
     */

    PayeeComponent.prototype.organization = function() {
      if (this.json['organization']) {
        return new Reference(this.json['organization']);
      }
    };


    /**
    The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
    @returns {Reference}
     */

    PayeeComponent.prototype.person = function() {
      if (this.json['person']) {
        return new Reference(this.json['person']);
      }
    };

    return PayeeComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class DiagnosisComponent
  @exports  DiagnosisComponent as DiagnosisComponent
   */

  DiagnosisComponent = (function(superClass) {
    extend(DiagnosisComponent, superClass);

    function DiagnosisComponent(json) {
      this.json = json;
      DiagnosisComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Sequence of diagnosis.
    @returns {Array} an array of {@link Number} objects
     */

    DiagnosisComponent.prototype.sequence = function() {
      return this.json['sequence'];
    };


    /**
    The diagnosis.
    @returns {Coding}
     */

    DiagnosisComponent.prototype.diagnosis = function() {
      if (this.json['diagnosis']) {
        return new Coding(this.json['diagnosis']);
      }
    };

    return DiagnosisComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class CoverageComponent
  @exports  CoverageComponent as CoverageComponent
   */

  CoverageComponent = (function(superClass) {
    extend(CoverageComponent, superClass);

    function CoverageComponent(json) {
      this.json = json;
      CoverageComponent.__super__.constructor.call(this, this.json);
    }


    /**
    A service line item.
    @returns {Array} an array of {@link Number} objects
     */

    CoverageComponent.prototype.sequence = function() {
      return this.json['sequence'];
    };


    /**
    The instance number of the Coverage which is the focus for adjudication, that is the Coverage to which the claim is to be adjudicated against.
    @returns {Array} an array of {@link boolean} objects
     */

    CoverageComponent.prototype.focal = function() {
      return this.json['focal'];
    };


    /**
    Reference to the program or plan identification, underwriter or payor.
    @returns {Reference}
     */

    CoverageComponent.prototype.coverage = function() {
      if (this.json['coverage']) {
        return new Reference(this.json['coverage']);
      }
    };


    /**
    The contract number of a business agrement which describes the terms and conditions.
    @returns {Array} an array of {@link String} objects
     */

    CoverageComponent.prototype.businessArrangement = function() {
      return this.json['businessArrangement'];
    };


    /**
    The relationship of the patient to the subscriber.
    @returns {Coding}
     */

    CoverageComponent.prototype.relationship = function() {
      if (this.json['relationship']) {
        return new Coding(this.json['relationship']);
      }
    };


    /**
    A list of references from the Insurer to which these services pertain.
    @returns {Array} an array of {@link String} objects
     */

    CoverageComponent.prototype.preauthref = function() {
      return this.json['preauthref'];
    };


    /**
    The Coverages adjudication details.
    @returns {Reference}
     */

    CoverageComponent.prototype.claimResponse = function() {
      if (this.json['claimResponse']) {
        return new Reference(this.json['claimResponse']);
      }
    };


    /**
    The style (standard) and version of the original material which was converted into this resource.
    @returns {Coding}
     */

    CoverageComponent.prototype.originalRuleset = function() {
      if (this.json['originalRuleset']) {
        return new Coding(this.json['originalRuleset']);
      }
    };

    return CoverageComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class MissingTeethComponent
  @exports  MissingTeethComponent as MissingTeethComponent
   */

  MissingTeethComponent = (function(superClass) {
    extend(MissingTeethComponent, superClass);

    function MissingTeethComponent(json) {
      this.json = json;
      MissingTeethComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The code identifying which tooth is missing.
    @returns {Coding}
     */

    MissingTeethComponent.prototype.tooth = function() {
      if (this.json['tooth']) {
        return new Coding(this.json['tooth']);
      }
    };


    /**
    Missing reason may be: E-extraction, O-other.
    @returns {Coding}
     */

    MissingTeethComponent.prototype.reason = function() {
      if (this.json['reason']) {
        return new Coding(this.json['reason']);
      }
    };


    /**
    The date of the extraction either known from records or patient reported estimate.
    @returns {Array} an array of {@link Date} objects
     */

    MissingTeethComponent.prototype.extractiondate = function() {
      if (this.json['extractiondate']) {
        return DT.DateTime.parse(this.json['extractiondate']);
      }
    };

    return MissingTeethComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class OrthodonticPlanComponent
  @exports  OrthodonticPlanComponent as OrthodonticPlanComponent
   */

  OrthodonticPlanComponent = (function(superClass) {
    extend(OrthodonticPlanComponent, superClass);

    function OrthodonticPlanComponent(json) {
      this.json = json;
      OrthodonticPlanComponent.__super__.constructor.call(this, this.json);
    }


    /**
    The intended start date for service.
    @returns {Array} an array of {@link Date} objects
     */

    OrthodonticPlanComponent.prototype.start = function() {
      if (this.json['start']) {
        return DT.DateTime.parse(this.json['start']);
      }
    };


    /**
    The estimated first examination fee.
    @returns {Money}
     */

    OrthodonticPlanComponent.prototype.examFee = function() {
      if (this.json['examFee']) {
        return new Money(this.json['examFee']);
      }
    };


    /**
    The estimated diagnostic fee.
    @returns {Money}
     */

    OrthodonticPlanComponent.prototype.diagnosticFee = function() {
      if (this.json['diagnosticFee']) {
        return new Money(this.json['diagnosticFee']);
      }
    };


    /**
    The estimated initial payment.
    @returns {Money}
     */

    OrthodonticPlanComponent.prototype.initialPayment = function() {
      if (this.json['initialPayment']) {
        return new Money(this.json['initialPayment']);
      }
    };


    /**
    The estimated treatment duration in months.
    @returns {Array} an array of {@link Number} objects
     */

    OrthodonticPlanComponent.prototype.durationMonths = function() {
      return this.json['durationMonths'];
    };


    /**
    The anticipated number of payments.
    @returns {Array} an array of {@link Number} objects
     */

    OrthodonticPlanComponent.prototype.paymentCount = function() {
      return this.json['paymentCount'];
    };


    /**
    The anticipated payment amount.
    @returns {Money}
     */

    OrthodonticPlanComponent.prototype.periodicPayment = function() {
      if (this.json['periodicPayment']) {
        return new Money(this.json['periodicPayment']);
      }
    };

    return OrthodonticPlanComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class SubDetailComponent
  @exports  SubDetailComponent as SubDetailComponent
   */

  SubDetailComponent = (function(superClass) {
    extend(SubDetailComponent, superClass);

    function SubDetailComponent(json) {
      this.json = json;
      SubDetailComponent.__super__.constructor.call(this, this.json);
    }


    /**
    A service line number.
    @returns {Array} an array of {@link Number} objects
     */

    SubDetailComponent.prototype.sequence = function() {
      return this.json['sequence'];
    };


    /**
    The type of product or service.
    @returns {Coding}
     */

    SubDetailComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    The fee for an addtional service or product or charge.
    @returns {Coding}
     */

    SubDetailComponent.prototype.service = function() {
      if (this.json['service']) {
        return new Coding(this.json['service']);
      }
    };


    /**
    The number of repetitions of a service or product.
    @returns {Quantity}
     */

    SubDetailComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Quantity(this.json['quantity']);
      }
    };


    /**
    The fee for an addtional service or product or charge.
    @returns {Money}
     */

    SubDetailComponent.prototype.unitPrice = function() {
      if (this.json['unitPrice']) {
        return new Money(this.json['unitPrice']);
      }
    };


    /**
    A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
    @returns {Array} an array of {@link Number} objects
     */

    SubDetailComponent.prototype.factor = function() {
      return this.json['factor'];
    };


    /**
    An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
    @returns {Array} an array of {@link Number} objects
     */

    SubDetailComponent.prototype.points = function() {
      return this.json['points'];
    };


    /**
    The quantity times the unit price for an addtional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
    @returns {Money}
     */

    SubDetailComponent.prototype.net = function() {
      if (this.json['net']) {
        return new Money(this.json['net']);
      }
    };


    /**
    List of Unique Device Identifiers associated with this line item.
    @returns {Coding}
     */

    SubDetailComponent.prototype.udi = function() {
      if (this.json['udi']) {
        return new Coding(this.json['udi']);
      }
    };

    return SubDetailComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class DetailComponent
  @exports  DetailComponent as DetailComponent
   */

  DetailComponent = (function(superClass) {
    extend(DetailComponent, superClass);

    function DetailComponent(json) {
      this.json = json;
      DetailComponent.__super__.constructor.call(this, this.json);
    }


    /**
    A service line number.
    @returns {Array} an array of {@link Number} objects
     */

    DetailComponent.prototype.sequence = function() {
      return this.json['sequence'];
    };


    /**
    The type of product or service.
    @returns {Coding}
     */

    DetailComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
    @returns {Coding}
     */

    DetailComponent.prototype.service = function() {
      if (this.json['service']) {
        return new Coding(this.json['service']);
      }
    };


    /**
    The number of repetitions of a service or product.
    @returns {Quantity}
     */

    DetailComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Quantity(this.json['quantity']);
      }
    };


    /**
    If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
    @returns {Money}
     */

    DetailComponent.prototype.unitPrice = function() {
      if (this.json['unitPrice']) {
        return new Money(this.json['unitPrice']);
      }
    };


    /**
    A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
    @returns {Array} an array of {@link Number} objects
     */

    DetailComponent.prototype.factor = function() {
      return this.json['factor'];
    };


    /**
    An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
    @returns {Array} an array of {@link Number} objects
     */

    DetailComponent.prototype.points = function() {
      return this.json['points'];
    };


    /**
    The quantity times the unit price for an addtional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
    @returns {Money}
     */

    DetailComponent.prototype.net = function() {
      if (this.json['net']) {
        return new Money(this.json['net']);
      }
    };


    /**
    List of Unique Device Identifiers associated with this line item.
    @returns {Coding}
     */

    DetailComponent.prototype.udi = function() {
      if (this.json['udi']) {
        return new Coding(this.json['udi']);
      }
    };


    /**
    Third tier of goods and services.
    @returns {Array} an array of {@link SubDetailComponent} objects
     */

    DetailComponent.prototype.subDetail = function() {
      var i, item, len, ref, results;
      if (this.json['subDetail']) {
        ref = this.json['subDetail'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new SubDetailComponent(item));
        }
        return results;
      }
    };

    return DetailComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class ProsthesisComponent
  @exports  ProsthesisComponent as ProsthesisComponent
   */

  ProsthesisComponent = (function(superClass) {
    extend(ProsthesisComponent, superClass);

    function ProsthesisComponent(json) {
      this.json = json;
      ProsthesisComponent.__super__.constructor.call(this, this.json);
    }


    /**
    Is this the initial placement of a fixed prosthesis?.
    @returns {Array} an array of {@link boolean} objects
     */

    ProsthesisComponent.prototype.initial = function() {
      return this.json['initial'];
    };


    /**
    Date of the initial placement.
    @returns {Array} an array of {@link Date} objects
     */

    ProsthesisComponent.prototype.priorDate = function() {
      if (this.json['priorDate']) {
        return DT.DateTime.parse(this.json['priorDate']);
      }
    };


    /**
    Material of the prior denture or bridge prosthesis. (Oral).
    @returns {Coding}
     */

    ProsthesisComponent.prototype.priorMaterial = function() {
      if (this.json['priorMaterial']) {
        return new Coding(this.json['priorMaterial']);
      }
    };

    return ProsthesisComponent;

  })(BackboneElement);


  /** 
  Embedded class
  @class ItemsComponent
  @exports  ItemsComponent as ItemsComponent
   */

  ItemsComponent = (function(superClass) {
    extend(ItemsComponent, superClass);

    function ItemsComponent(json) {
      this.json = json;
      ItemsComponent.__super__.constructor.call(this, this.json);
    }


    /**
    A service line number.
    @returns {Array} an array of {@link Number} objects
     */

    ItemsComponent.prototype.sequence = function() {
      return this.json['sequence'];
    };


    /**
    The type of product or service.
    @returns {Coding}
     */

    ItemsComponent.prototype.type = function() {
      if (this.json['type']) {
        return new Coding(this.json['type']);
      }
    };


    /**
    The practitioner who is responsible for the services rendered to the patient.
    @returns {Reference}
     */

    ItemsComponent.prototype.provider = function() {
      if (this.json['provider']) {
        return new Reference(this.json['provider']);
      }
    };


    /**
    If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
    @returns {Coding}
     */

    ItemsComponent.prototype.service = function() {
      if (this.json['service']) {
        return new Coding(this.json['service']);
      }
    };


    /**
    The date when the enclosed suite of services were performed or completed.
    @returns {Array} an array of {@link Date} objects
     */

    ItemsComponent.prototype.serviceDate = function() {
      if (this.json['serviceDate']) {
        return DT.DateTime.parse(this.json['serviceDate']);
      }
    };


    /**
    The number of repetitions of a service or product.
    @returns {Quantity}
     */

    ItemsComponent.prototype.quantity = function() {
      if (this.json['quantity']) {
        return new Quantity(this.json['quantity']);
      }
    };


    /**
    If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
    @returns {Money}
     */

    ItemsComponent.prototype.unitPrice = function() {
      if (this.json['unitPrice']) {
        return new Money(this.json['unitPrice']);
      }
    };


    /**
    A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
    @returns {Array} an array of {@link Number} objects
     */

    ItemsComponent.prototype.factor = function() {
      return this.json['factor'];
    };


    /**
    An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
    @returns {Array} an array of {@link Number} objects
     */

    ItemsComponent.prototype.points = function() {
      return this.json['points'];
    };


    /**
    The quantity times the unit price for an addtional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
    @returns {Money}
     */

    ItemsComponent.prototype.net = function() {
      if (this.json['net']) {
        return new Money(this.json['net']);
      }
    };


    /**
    List of Unique Device Identifiers associated with this line item.
    @returns {Coding}
     */

    ItemsComponent.prototype.udi = function() {
      if (this.json['udi']) {
        return new Coding(this.json['udi']);
      }
    };


    /**
    Physical service site on the patient (limb, tooth, etc).
    @returns {Coding}
     */

    ItemsComponent.prototype.bodySite = function() {
      if (this.json['bodySite']) {
        return new Coding(this.json['bodySite']);
      }
    };


    /**
    A region or surface of the site, eg. limb region or tooth surface(s).
    @returns {Array} an array of {@link Coding} objects
     */

    ItemsComponent.prototype.subsite = function() {
      var i, item, len, ref, results;
      if (this.json['subsite']) {
        ref = this.json['subsite'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };


    /**
    Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or an appliance was lost or stolen.
    @returns {Array} an array of {@link Coding} objects
     */

    ItemsComponent.prototype.modifier = function() {
      var i, item, len, ref, results;
      if (this.json['modifier']) {
        ref = this.json['modifier'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };


    /**
    Second tier of goods and services.
    @returns {Array} an array of {@link DetailComponent} objects
     */

    ItemsComponent.prototype.detail = function() {
      var i, item, len, ref, results;
      if (this.json['detail']) {
        ref = this.json['detail'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new DetailComponent(item));
        }
        return results;
      }
    };


    /**
    The materials and placement date of prior fixed prosthesis.
    @returns {ProsthesisComponent}
     */

    ItemsComponent.prototype.prosthesis = function() {
      if (this.json['prosthesis']) {
        return new ProsthesisComponent(this.json['prosthesis']);
      }
    };

    return ItemsComponent;

  })(BackboneElement);


  /**
  A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
  @class OralHealthClaim
  @exports OralHealthClaim as OralHealthClaim
   */

  OralHealthClaim = (function(superClass) {
    extend(OralHealthClaim, superClass);

    function OralHealthClaim(json) {
      this.json = json;
      OralHealthClaim.__super__.constructor.call(this, this.json);
    }


    /**
    The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
    @returns {Array} an array of {@link Identifier} objects
     */

    OralHealthClaim.prototype.identifier = function() {
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
    The version of the specification on which this instance relies.
    @returns {Coding}
     */

    OralHealthClaim.prototype.ruleset = function() {
      if (this.json['ruleset']) {
        return new Coding(this.json['ruleset']);
      }
    };


    /**
    The version of the specification from which the original instance was created.
    @returns {Coding}
     */

    OralHealthClaim.prototype.originalRuleset = function() {
      if (this.json['originalRuleset']) {
        return new Coding(this.json['originalRuleset']);
      }
    };


    /**
    The date when the enclosed suite of services were performed or completed.
    @returns {Array} an array of {@link Date} objects
     */

    OralHealthClaim.prototype.date = function() {
      if (this.json['date']) {
        return DT.DateTime.parse(this.json['date']);
      }
    };


    /**
    Insurer Identifier, typical BIN number (6 digit).
    @returns {Reference}
     */

    OralHealthClaim.prototype.target = function() {
      if (this.json['target']) {
        return new Reference(this.json['target']);
      }
    };


    /**
    The provider which is responsible for the bill, claim pre-determination, pre-authorization.
    @returns {Reference}
     */

    OralHealthClaim.prototype.provider = function() {
      if (this.json['provider']) {
        return new Reference(this.json['provider']);
      }
    };


    /**
    The organization which is responsible for the bill, claim pre-determination, pre-authorization.
    @returns {Reference}
     */

    OralHealthClaim.prototype.organization = function() {
      if (this.json['organization']) {
        return new Reference(this.json['organization']);
      }
    };


    /**
    Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
    @returns {Array} an array of {@link String} objects
     */

    OralHealthClaim.prototype.use = function() {
      return this.json['use'];
    };


    /**
    Immediate (STAT), best effort (NORMAL), deferred (DEFER).
    @returns {Coding}
     */

    OralHealthClaim.prototype.priority = function() {
      if (this.json['priority']) {
        return new Coding(this.json['priority']);
      }
    };


    /**
    In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
    @returns {Coding}
     */

    OralHealthClaim.prototype.fundsReserve = function() {
      if (this.json['fundsReserve']) {
        return new Coding(this.json['fundsReserve']);
      }
    };


    /**
    Person who created the invoice/claim/pre-determination or pre-authorization.
    @returns {Reference}
     */

    OralHealthClaim.prototype.enterer = function() {
      if (this.json['enterer']) {
        return new Reference(this.json['enterer']);
      }
    };


    /**
    Facility where the services were provided.
    @returns {Reference}
     */

    OralHealthClaim.prototype.facility = function() {
      if (this.json['facility']) {
        return new Reference(this.json['facility']);
      }
    };


    /**
    Theparty to be reimbused for the services.
    @returns {PayeeComponent}
     */

    OralHealthClaim.prototype.payee = function() {
      if (this.json['payee']) {
        return new PayeeComponent(this.json['payee']);
      }
    };


    /**
    The referral resource which lists the date, practitioner, reason and other supporting information.
    @returns {Reference}
     */

    OralHealthClaim.prototype.referral = function() {
      if (this.json['referral']) {
        return new Reference(this.json['referral']);
      }
    };


    /**
    Ordered list of patient diagnosis for which care is sought.
    @returns {Array} an array of {@link DiagnosisComponent} objects
     */

    OralHealthClaim.prototype.diagnosis = function() {
      var i, item, len, ref, results;
      if (this.json['diagnosis']) {
        ref = this.json['diagnosis'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new DiagnosisComponent(item));
        }
        return results;
      }
    };


    /**
    List of patient conditions for which care is sought.
    @returns {Array} an array of {@link Coding} objects
     */

    OralHealthClaim.prototype.condition = function() {
      var i, item, len, ref, results;
      if (this.json['condition']) {
        ref = this.json['condition'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };


    /**
    Patient Resource.
    @returns {Reference}
     */

    OralHealthClaim.prototype.patient = function() {
      if (this.json['patient']) {
        return new Reference(this.json['patient']);
      }
    };


    /**
    Financial instrument by which payment information for health care.
    @returns {Array} an array of {@link CoverageComponent} objects
     */

    OralHealthClaim.prototype.coverage = function() {
      var i, item, len, ref, results;
      if (this.json['coverage']) {
        ref = this.json['coverage'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new CoverageComponent(item));
        }
        return results;
      }
    };


    /**
    Factors which may influence the applicability of coverage.
    @returns {Array} an array of {@link Coding} objects
     */

    OralHealthClaim.prototype.exception = function() {
      var i, item, len, ref, results;
      if (this.json['exception']) {
        ref = this.json['exception'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };


    /**
    Name of school for over-aged dependants.
    @returns {Array} an array of {@link String} objects
     */

    OralHealthClaim.prototype.school = function() {
      return this.json['school'];
    };


    /**
    Date of an accident which these services are addessing.
    @returns {Array} an array of {@link Date} objects
     */

    OralHealthClaim.prototype.accident = function() {
      if (this.json['accident']) {
        return DT.DateTime.parse(this.json['accident']);
      }
    };


    /**
    Type of accident: work, auto, etc.
    @returns {Coding}
     */

    OralHealthClaim.prototype.accidentType = function() {
      if (this.json['accidentType']) {
        return new Coding(this.json['accidentType']);
      }
    };


    /**
    A list of intervention and exception codes which may influence the adjudication of the claim.
    @returns {Array} an array of {@link Coding} objects
     */

    OralHealthClaim.prototype.interventionException = function() {
      var i, item, len, ref, results;
      if (this.json['interventionException']) {
        ref = this.json['interventionException'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };


    /**
    A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.
    @returns {Array} an array of {@link MissingTeethComponent} objects
     */

    OralHealthClaim.prototype.missingteeth = function() {
      var i, item, len, ref, results;
      if (this.json['missingteeth']) {
        ref = this.json['missingteeth'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new MissingTeethComponent(item));
        }
        return results;
      }
    };


    /**
    The highlevel detail sof an Orthodonic Treatment Plan.
    @returns {OrthodonticPlanComponent}
     */

    OralHealthClaim.prototype.orthoPlan = function() {
      if (this.json['orthoPlan']) {
        return new OrthodonticPlanComponent(this.json['orthoPlan']);
      }
    };


    /**
    First tier of goods and services.
    @returns {Array} an array of {@link ItemsComponent} objects
     */

    OralHealthClaim.prototype.item = function() {
      var i, item, len, ref, results;
      if (this.json['item']) {
        ref = this.json['item'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new ItemsComponent(item));
        }
        return results;
      }
    };


    /**
    Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
    @returns {Array} an array of {@link Coding} objects
     */

    OralHealthClaim.prototype.additionalMaterials = function() {
      var i, item, len, ref, results;
      if (this.json['additionalMaterials']) {
        ref = this.json['additionalMaterials'];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(new Coding(item));
        }
        return results;
      }
    };

    return OralHealthClaim;

  })(DomainResource);

  module.exports.OralHealthClaim = OralHealthClaim;

}).call(this);

//# sourceMappingURL=oralhealthclaim.js.map
