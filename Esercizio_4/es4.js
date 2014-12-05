 var fs = require('fs'),  
     path = require('path');
     var call_me = function (err, listaFiles) {  
        listaFiles.forEach(function (file) {  
           if (path.extname(file) === '.' + process.argv[3])  
              console.log(file);  
        });    
     }; 
   
     fs.readdir(process.argv[2], call_me);
 
