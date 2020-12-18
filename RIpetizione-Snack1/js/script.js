// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while


// dichiaro una variabile che deve contenere un numero
var numero = 0;
var somma = 0;

// il numero deve essere chiesto all'utente per 5 volte

for( i = 0; i < 5; i++){
  numero = parseInt(prompt('inserisci il numero'));
  somma += numero;
}

console.log(somma);