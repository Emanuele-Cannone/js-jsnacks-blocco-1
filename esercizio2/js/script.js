// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.


var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');

var message = parola2 + ' è più grande di ' + parola1;

if(parola1.length > parola2.length){
  message = parola1 + ' è più grande di ' + parola2;
} 

console.log(message);