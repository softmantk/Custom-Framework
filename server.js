var http_port = 3000,
    http = require('http'),
    colors = require('colors'),
    start = function(){
      server = http.createServer(function (req, res) {
        middleware(req, res);
        require('./router').get(req, res);
      });
      server.listen(http_port);
      console.log('listening to http://localhost:' + http_port);
    };// end start()



function middleware(req, res) {
    switch(req.method) {
        case 'GET'      :   console.log(req.method.green+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        case 'POST'     :   console.log(req.method.yellow+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        case 'PUT'      :   console.log(req.method.blue+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        case 'DELETE'   :   console.log(req.method.magenta+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        case 'OPTIONS'  :   console.log(req.method.cyan+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        case 'CONNECT'  :   console.log(req.method.yellow+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
            break;
        default         : console.log(req.method.red+"\t  "+req.url.grey+"\t "+(new Date().toLocaleTimeString()));
    }
    req.status = {
        method : req.method,
        time : new Date().toLocaleTimeString()
    };
    //console.log("I got called");
}
exports.start = start;
