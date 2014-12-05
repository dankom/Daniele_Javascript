 var fileUtils = require ('./fileUtils'),

 	dir = process.argv[2],  
    filtro = process.argv[3];  

    var call_me = function (err, listaFiles) { 
     	if(err) 
     		return console.error('Errore: ', err); 
        listaFiles.forEach(function (file) {  
              console.log(file);  
        });    
     }; 

     fileUtils.filtra(dir, filtro, call_me);

