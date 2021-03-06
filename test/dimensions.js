var BitmapJS = require("../index");
var Bitmap = BitmapJS.Bitmap;

var filename = process.argv[2];
var width = parseInt(process.argv[3]);
var height = parseInt(process.argv[4]);

var bm = new Bitmap();
bm.readFile(filename)
    .then(function() {
        console.log(JSON.stringify({width: bm.width, height: bm.height}));
    })
    .catch(function(error) {
        console.log(error.message);
    });