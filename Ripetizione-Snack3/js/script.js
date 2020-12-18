// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ['emanuele', 'simone', 'danilo', 'priscilla'];
var invitato = prompt('inserisci il tuo nome');
var message = 'non puoi entrare'

for( i = 0; i < invitati.length; i++){
  if (invitato == invitati[i]){
    message = 'benvenuto';
  }
}

console.log(message);