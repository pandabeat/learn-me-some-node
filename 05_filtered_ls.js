var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(directoryPath, function ( err, files ){
	for ( var i = 0; i < files.length; i++ ) {
		if (path.extname(files[i]).replace(".", "") === fileExtension) {
			console.log(files[i]);
		}
	}
});

	//********* official solution with each loop ******* 
    // var fs = require('fs')
    // var path = require('path')
    
    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })
