var fs = require('fs'),  
     path = require('path');

 module.exports = (function () {  
	var filtra = function(dir, filtro, callback) {  
       	fs.readdir(dir, function (err, list) {  
			if (err)  
				return callback(err); 
			if (filtro != '*') {
				list = list.filter(function (file) {  
					return path.extname(file) === '.' + filtro;  
				});  
			}
			callback(null, list);  
       });  
  	};  
	   
	return {  
	   	filtra : filtra  
	};  
 })();     