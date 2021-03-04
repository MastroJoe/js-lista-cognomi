// INPUT
// creo array con lista di cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

// chiedo all'utente di inserire il cognome
var cognome = prompt("Inserisci il tuo cognome:");

// CONTROLLO
// se la parola inserita è un numero
if (!isNaN(cognome)) {
  // stampo messaggio di errore
  console.log('Attenzione! Non hai inserito una parola.');
  // altrimenti se la parola inserita ha la prima lettera maiuscola
} else if (cognome.charAt(0) === cognome.charAt(0).toUpperCase()) {
  // inserisco il cognome dell'utente nella lista
  listaCognomi.push(cognome);
  // altrimenti
} else {
  // stampo messaggio di errore
  console.log('Attenzione! La prima lettera deve essere Maiuscola.');
}

// ordino alfabeticamente la lista
listaCognomi.sort();

// stampo e controllo la lista
console.log(listaCognomi);

// stampo la posizione del cognome appena inserito
for (var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i] + " = posizione n. " + (i + 1));
}
