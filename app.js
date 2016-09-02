
/**
Escriba una función que reciba un número (n) y 
genere la sucesión de números pares que estén entre 1 y n.
*/

function sucesionPares(n){

	for (var i = 2; i<=n; i+=2) {
		console.log(i);
		document.write(i);
	}
}

/**
Escriba una función que reciba un número (n) y genere la 
sucesión de números impares que estén entre 1 y n.
*/

function sucesionImpares(n){

	for (var i = 1; i <=n ; i+=2) {
		document.write(i);
	}
}

/**
Escriba una función que reciba un número (n) 
y genere la sucesión de fibonacci (póker planning). (Leer sobre fibonacci)
*/
function sucesionFibonacci(n){

	var nomInicial = "0 1";
	document.write(nomInicial);
	var penultimoNumero = 0;
	var ultimoNumero = 1;
	for (var i = 3; i <= n; i++) {
		var numeroCalculado = ultimoNumero + penultimoNumero;
		document.write(" "+numeroCalculado);
		penultimoNumero = ultimoNumero;
		ultimoNumero = numeroCalculado;

	}
}

/**
Escriba una función que reciba como parámetro
 el número de líneas (n) y genere la siguiente salida:
*/

function sucesionLineas(n){

	for (var i = 1; i <=n; i++) {
		
		//formo los asteriscos
		for (var x = 1; x <=i ; x++) {
			document.write("*");
		}
		
		//escribo un salto de linea
		document.write("<br>");
	}
}

/**
Escribir una función que reciba como parámetro
 el número de líneas  (n) y genere la siguiente salida:

*/

function sucesionLineasMenos(n){

	for (var i = n; i <=1; i--) {
		
		//formo los asteriscos
		for (var x = 1; x <=i ; x++) {
			document.write("*");
		}
		
		//escribo un salto de linea
		document.write("<br>");
	}
}

/**
Escribir una función que reciba como parámetro
 el número de líneas (n) y genere la siguiente salida:
*/
function sucesionLineasEspacio(n){

	for (var i = 1; i <=n; i++) {
		var numEspacios = n -i;
		//formo los espacios
		for (var m = 1; m <= numEspacios ; m++) {
			document.write("&nbsp;&nbsp;");
		}

		//formo los asteriscos
		for (var x = 1; x <=i ; x++) {
			document.write("*");
		}
		
		//escribo un salto de linea
		document.write("<br>");
	}
}

/**
Escribir una función que reciba como parámetro 
el número de líneas (n) y genere la siguiente salida:
*/
function sucesionLineasMenosEspacio(n){

	for (var i = n; i >= 1; i--) {

		var numEspacios = n -i;
		//formo los espacios
		for (var m = 1; m <= numEspacios ; m++) {
			document.write("&nbsp;&nbsp;");
		}

		//formo los asteriscos
		for (var x = 1; x <=i ; x++) {
			document.write("*");
		}
		
		//escribo un salto de linea
		document.write("<br>");
	}
}