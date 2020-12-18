// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.


var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');

var valoreParola1 = parola1.length;
var valoreParola2 = parola2.length;

console.log(valoreParola1, valoreParola2);

if(valoreParola1 > valoreParola2){
  var message = parola1 + ' ' + parola2;
} else {
  var message = parola2 + ' ' + parola1;
}

console.log(message);