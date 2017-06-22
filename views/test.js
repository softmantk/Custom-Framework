/**
 * Created by SOFTMAN on 21-06-2017.
 */

var fs = require('fs');
var array = fs.readFileSync('index').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}