var somma = 0;
process.argv.forEach(function(val, index, array) {
//	console.log(index + ' : ' + val);
	if (index > 1 ){  // elimina gli argomenti 0 e 1
		somma += parseInt(val); }
});
console.log(somma);