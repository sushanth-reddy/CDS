const url = require('url');
const fs = require('fs');
var exec = require('child_process').exec;

// module.exports.Library = require ('./elm/library.coffee').Library;
// cql = require ('./cql.coffee');

exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = {
        "text": "Hello " + name
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.testRequest = function (req, res,json ) {
    var temp = null;
    var resultNew = null;
    body = json ;
    req.on('data', function (chunk) {
        body += chunk;
        console.log(chunk,'------');
    });
    exec('cake build', (err, stdout, stderr) => {
        console.log(stdout,'hereeeree');
    })

    req.on('end', function () {
        console.log(body , 'rrrr');
        postBody = JSON.parse(body);
        console.log(postBody.psource,'aaaaaaaa');
        cql = "cql = require ('./cql')";
        measure = "measure = require ('./"+postBody.name+"')"
        lib = "lib = new cql.Library(measure)";
        executor= "executor = new cql.Executor(lib)";
        psource="psource = new cql.PatientSource ["+JSON.stringify(postBody.psource)+"]";
        result= "result = executor.exec(psource)";
        output  = "console.log JSON.stringify(result, undefined, 2)" 

        console.log(psource);
        fs.writeFileSync(postBody.name+"-exec.coffee",cql);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",measure);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",lib);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",executor);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",psource);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",result);
        fs.appendFileSync(postBody.name+"-exec.coffee","\n");
        fs.appendFileSync(postBody.name+"-exec.coffee",output);






        // fs.writeFileSync(postBody.name+"-exec.coffee",measure);
        
        // run = function (cmd, callback) {
        //     var command = exec(cmd);
        
        //     var result = '';
          
        //     command.stdout.on('data', function (data) {
        //         result += data.toString();
        //     });
        
        //     command.on('exit', function () {
        //         callback(result);
        //     });
        // }
        
        // execQuery = function (cmd) {
        //     var result = {
        //         errnum: 0,
        //         error: 'No errors.',
        //         body: ''
        //     };
        
        //     run(cmd, function (message) {
        //         result.body = message;
        //         console.log(message,'\n',result);
        //     });
        
        //     return result;
        // }
        execCql = function( cmd, execResult){
            return_var = -1;
            var command = exec(cmd);
            var result = {
                errnum: 0,
                error: 'No errors.',
                body: ''
            };

            // console.log(cmd,'are you hree??',command);
            // console.log(stdout,'this isthe output');
            command.stdout.on('data', function (data) {
                console.log(data,'heres the data');
                var message = JSON.parse(data);
                console.log(message,'is this the output');
                command.on('exit', function () {
                    result.body = message
                    execResult(result);
                });
            

            });  
            command.stderr.on('data', function (data) {
                console.log(data,'heres the data');
                var errorMessage = data;
                console.log(errorMessage,'is this the output');
                command.on('exit', function () {
                    result.body = errorMessage
                    execResult(result);
                });
            

            });         
        }
        
        execCql('node /home/rutika/cql-execution/lib/'+postBody.name+"-exec",function(result){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            console.log(result,'whast ythe results');
            res.end(JSON.stringify(result) + '\n');
        });
    });
};

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
};