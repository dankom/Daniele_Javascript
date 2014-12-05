//biblioteca.js
var xml = require('xml');  
module.exports = (function() {  
      var libri = [],  
          inserisciLibro = function(libro) {  
             libri.push(libro);  
          },  
          elaboraLibri = function(callback) {  
             if (libri.length === 0)  
                callback({messaggio: 'biblioteca vuota'}, null);  
             else  
                callback(null, libri);       
          }; 

          elaboraLibriXML = function(callback) {  
             if (libri.length === 0)  
                callback({messaggio: 'biblioteca vuota'}, null);  
             else  
                callback(null, loopXML());     
                // callback(null, xml(libri));  
          }; 

          loopXML = function(){
          	var result = "";
          	libri.forEach( function(libro){
          		// result += xml({  libro: [{Titolo: libro.titolo}] [{Autore: libro.autore}] })  ;
              // result += xml({  libro: libro })  ;
              result += xml({  libro:
                [  
                     {titolo : libro.titolo},   
                     {autore : libro.autore}  
                ] 
              }, true);

   			});
          	// result += (" ] }");
      		return xml(result);
          };
          
          return {  
             inserisciLibro : inserisciLibro,  
             elaboraLibri : elaboraLibri, 
             elaboraLibriXML :  elaboraLibriXML
          };  
 })();  