var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

var filteredFiles = [];


module.exports = function (callback) {
						      fs.readdir(directoryPath, function ( err, files ){
						        // if (err)
						        //   return callback(err) // early return

						        // ... no error, continue doing cool things with `data`
						        for ( var i = 0; i < files.length; i++ ) {
											if (path.extname(files[i]).replace(".", "") === fileExtension) {
													filteredFiles.push(console.log(files[i]));
											}
										}
						    		return filteredFiles;
						        // all went well, call callback with `null` for the error argument
						        // callback(null, files);
						      });
						    }


