var fs = require('fs');  
// var Es2 = function(){
//	var conta;
	var contaRighe = function(my_buffer){
		return (my_buffer.toString().split("\n").length);
	};

	var conta = function(){
		var filename;
		filename = process.argv[2] ;
		var my_buffer = fs.readFileSync(filename);
		if (my_buffer === undefined){
			return(filename + " : non trovato!");
		} else{
			// console.log(contaRighe(my_buffer));
			var num_righe = my_buffer.toString().split('\n').length;
			return(num_righe);
		}
	};	
	console.log(conta());
//	return {conta : conta};
// } ();