var http = require('http');
var fs = require("fs")
var port = 8080;
var unoconv = require('unoconv2');

//var listener = unoconv.listen({ port: 2002 });

//listener.stderr.on('data', function (data) {
//    console.log('stderr: ' + data.toString('utf8'));
//});
unoconv.convert('https://cdn.filestackcontent.com/loKacJRQ3u1oVI8UpgnG', 'pdf', function (err, result) {
    // result is returned as a Buffer
    if (err)
        console.log(err);
    else {
        console.log(result);
        fs.writeFile('converted3.pdf', result);
    }
    
});
//var office2pdf = require(office2pdf),
//    generatePdf = office2pdf.generatePdf;

//generatePdf('document.docx', function (err, result) {
//    console.log(result);
//});
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);