var template = require('../views/template-main');
exports.get = function(req, res) {
 res.writeHead(404, {'Content-Type': 'text/html'});
 data = req.status;
 res.write(
    template.build("404",data));
 res.end();
}
