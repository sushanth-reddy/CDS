module.exports = {
   "library" : {
      "identifier" : {
         "id" : "ChlamydiaScreening_Common",
         "version" : "2"
      },
      "schemaIdentifier" : {
         "id" : "urn:hl7-org:elm",
         "version" : "r1"
      },
      "usings" : {
         "def" : [ {
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localIdentifier" : "QDM",
            "uri" : "urn:healthit-gov:qdm:v5_3",
            "version" : "5.3"
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "name" : "SNOMEDCT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public"
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "name" : "Pregnancy",
            "id" : "2.16.840.1.113883.3.526.3.378",
            "accessLevel" : "Public"
         }, {
            "name" : "Victim of rape (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Simulation of physical illness (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Physician (occupation)",
            "id" : "2.16.840.1.113762.1.4.1096.129",
            "accessLevel" : "Public"
         }, {
            "name" : "Miscarriage (disorder)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Physical health problems (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Physical injury due to physical abuse (disorder)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Finding related to risk factor in pregnancy (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         }, {
            "name" : "Incestuous concubinage with girls (finding)",
            "id" : "2.16.840.1.113883.3.88.12.3221.7.4",
            "accessLevel" : "Public"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{urn:healthit-gov:qdm:v5_3}Patient",
                  "templateId" : "Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "name" : "Conditions Covered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "Or",
               "operand" : [ {
                  "type" : "Or",
                  "operand" : [ {
                     "type" : "Or",
                     "operand" : [ {
                        "type" : "Or",
                        "operand" : [ {
                           "type" : "Exists",
                           "operand" : {
                              "type" : "Union",
                              "operand" : [ {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Pregnancy",
                                    "type" : "ValueSetRef"
                                 }
                              }, {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Victim of rape (finding)",
                                    "type" : "ValueSetRef"
                                 }
                              } ]
                           }
                        }, {
                           "type" : "Exists",
                           "operand" : {
                              "type" : "Union",
                              "operand" : [ {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Pregnancy",
                                    "type" : "ValueSetRef"
                                 }
                              }, {
                                 "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                                 "codeProperty" : "code",
                                 "type" : "Retrieve",
                                 "codes" : {
                                    "name" : "Incestuous concubinage with girls (finding)",
                                    "type" : "ValueSetRef"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "type" : "Exists",
                        "operand" : {
                           "type" : "Union",
                           "operand" : [ {
                              "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                              "codeProperty" : "code",
                              "type" : "Retrieve",
                              "codes" : {
                                 "name" : "Pregnancy",
                                 "type" : "ValueSetRef"
                              }
                           }, {
                              "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                              "codeProperty" : "code",
                              "type" : "Retrieve",
                              "codes" : {
                                 "name" : "Physical health problems (finding)",
                                 "type" : "ValueSetRef"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "type" : "Exists",
                     "operand" : {
                        "type" : "Union",
                        "operand" : [ {
                           "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                           "codeProperty" : "code",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Pregnancy",
                              "type" : "ValueSetRef"
                           }
                        }, {
                           "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                           "codeProperty" : "code",
                           "type" : "Retrieve",
                           "codes" : {
                              "name" : "Physical injury due to physical abuse (disorder)",
                              "type" : "ValueSetRef"
                           }
                        } ]
                     }
                  } ]
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "dataType" : "{urn:healthit-gov:qdm:v5_3}Diagnosis",
                     "codeProperty" : "code",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Finding related to risk factor in pregnancy (finding)",
                        "type" : "ValueSetRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "Covered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "Conditions Covered",
                  "type" : "ExpressionRef"
               }, {
                  "type" : "Exists",
                  "operand" : {
                     "dataType" : "{urn:healthit-gov:qdm:v5_3}PositiveProcedurePerformed",
                     "templateId" : "PositiveProcedurePerformed",
                     "codeProperty" : "code",
                     "type" : "Retrieve",
                     "codes" : {
                        "name" : "Miscarriage (disorder)",
                        "type" : "ValueSetRef"
                     }
                  }
               } ]
            }
         }, {
            "name" : "Coverage",
            "context" : "Patient",
            "accessLevel" : "Public",
            "expression" : {
               "type" : "And",
               "operand" : [ {
                  "name" : "Conditions Covered",
                  "type" : "ExpressionRef"
               }, {
                  "name" : "Covered",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

