// Generated by CoffeeScript 1.9.2
(function() {
  module.exports.p1 = {
    "resourceType": "Bundle",
    "id": "example1",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2014-08-18T01:43:30Z"
    },
    "base": "http://example.com/base",
    "entry": [
      {
        "resource": {
          "id": "1",
          "meta": {
            "profile": ["patient-qicore-qicore-patient"]
          },
          "resourceType": "Patient",
          "identifier": [
            {
              "value": "1"
            }
          ],
          "name": [
            {
              "given": ["John"],
              "family": ["Smith"]
            }
          ],
          "gender": "M",
          "birthDate": "1980-02-17T06:15"
        }
      }
    ]
  };

  module.exports.p2 = {
    "resourceType": "Bundle",
    "id": "example1",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2014-08-18T01:43:30Z"
    },
    "base": "http://example.com/base",
    "entry": [
      {
        "resource": {
          "resourceType": "Patient",
          "meta": {
            "profile": ["patient-qicore-qicore-patient"]
          },
          "id": "2",
          "identifier": [
            {
              "value": "2"
            }
          ],
          "name": [
            {
              "given": ["Sally"],
              "family": ["Smith"]
            }
          ],
          "gender": "F",
          "birthDate": "2007-08-02T11:47"
        }
      }
    ]
  };

}).call(this);

//# sourceMappingURL=patients.js.map
