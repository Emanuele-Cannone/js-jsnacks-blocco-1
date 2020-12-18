// Secondo snack
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array (modificato) 


var numeri = [];

for (i = 0; i < 5; i++){
  numeroDigitato = parseInt(prompt('inserisci un numero'));
  if(numeroDigitato%2 !=0){
    numeri.push(numeroDigitato);
  }
}

console.log(numeri);



