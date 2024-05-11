const hhtp = require('http');
const port = 8001;


const server = http.createServer();

server.listen(port, function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("Server is up and running on port:", port);
});