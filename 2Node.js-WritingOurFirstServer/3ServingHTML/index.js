const http = require('http');
const port = 8001;

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'cotent-type':'text/html'});
    res.end('<h1>Gotcha!</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("Server is up and running on port:", port);
});