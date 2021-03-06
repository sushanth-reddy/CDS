cql = require ('../cql')
measure = require ('../coffee-script/24HourpHMonitoring')
lib = new cql.Library(measure)
executor = new cql.Executor(lib)
psource = new cql.PatientSource [{"resourceType":"Bundle","id":"example1","meta":{"versionId":"1","lastUpdated":"2014-08-18T01:43:30Z"},"base":"http://example.com/base","entry":{"resource":{"id":"1","meta":{"profile":["patient-qicore-qicore-patient"]},"resourceType":"Patient","identifier":[{"value":"1"}],"name":{"given":["John"],"family":["Smith"]},"gender":"M","birthDate":"1980-02-17T06:15"}}}]
result = executor.exec(psource)
console.log JSON.stringify(result, undefined, 2)