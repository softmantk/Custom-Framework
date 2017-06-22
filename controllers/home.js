var template = require('../views/template-main');
var LoginPageData = require('../model/test-data');
var data = LoginPageData.data();
exports.get = function(req, res) {
    // checking middleware functionality
    data.time = req.status.time;
  //  console.log("time: "+data.time);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        template.build('index',data));
        console.log(data);
    res.end();
};
