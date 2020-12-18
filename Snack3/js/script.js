// terzo snack
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var listaInvitati = ['davide' , 'cristiano' , 'yuri'];

var invitato = prompt('inserisci il tuo nome');
var messaggio = 'non puoi partecipare!';

for (var i = 0; i < listaInvitati.length; i++){
  if (invitato == listaInvitati[i]){
    messaggio = 'benvenuto!';
  }
}



console.log(invitato);
console.log(i);
console.log(listaInvitati);
console.log(messaggio);