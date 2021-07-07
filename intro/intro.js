var http = require('http');
var log = require('./log');


http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    if (request.url == "/admin") {
        response.write("Admin sayfası")
    } else if(request.url == '/customers'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify({name: 'KADRİ', surname : 'ÇABUK'}));
    }else {
        response.write('Ana Sayfa');
    } 
    response.end();
}).listen(8888);

log.information('oldu')