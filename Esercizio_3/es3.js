var fs = require('fs');
var myFile = process.argv[2];
var numeroLinee;
var call_me = function(err, data){
	 if (!err) {  
        numeroLinee = data.toString().split('\n').length;  
        console.log(numeroLinee);  
    } else {  
        console.log("Problemi in lettura " + myFile);  
    }  
};


fs.readFile(myFile, call_me);