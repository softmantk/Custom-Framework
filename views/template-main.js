var fs = require('fs');

//console.log("Time: "+req.status.time);

exports.build = function(page,data) {
    var array = fs.readFileSync('views/'+page).toString().split("\n"),
        lines = array.join('\n');
    for (var property in data) {
        if (data.hasOwnProperty(property)) {
            var prop = property.toString();
            var value = data[property];
            var exp = "{{"+prop+"}}",
                re = new RegExp(exp, "g");
            console.log("re"+re);
            lines = lines.replace(re, data[property]);
        }
    }
    return lines;
};
