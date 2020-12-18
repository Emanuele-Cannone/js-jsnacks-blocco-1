// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array (modificato) 

// crea un array vuoto
var number =[];

for (i = 0; i < 6; i++){
 var verifica = parseInt(prompt('inserisci un numero'));
 if (verifica %2 != 0){
   number.push(verifica);
 }
}

console.log(number);