// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore

// chiediamo con un prompt 2 volte un numero
var numero1 = parseInt(prompt('inserisci il primo numero'));
var numero2 = parseInt(prompt('inserisci il secondo numero'));

// essendo un valore booleano elimino l'else e dichiaro "stampa il numero2"
// ma SE IL NUMERO1 E' PIU GRANDE allora stampa il numero1
var messaggio = numero2;
if (numero1 > numero2){
  messaggio = numero1;
}

console.log(messaggio);