// INPUT
// creo array con lista di cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

// chiedo all'utente di inserire il cognome
var cognome = prompt("Inserisci il tuo cognome:");

// CONTROLLO
// se la parola inserita ha la prima lettera maiuscola
if (cognome.charAt(0) === cognome.charAt(0).toUpperCase()) {
  // inserisco il cognome dell'utente nella lista
  listaCognomi.push(cognome);
} else {
  // stampo messaggio di errore
  console.log('Attenzione! La prima lettera deve essere Maiuscola.');
}

// ordino alfabeticamente la lista
listaCognomi.sort();

// stampo e controllo la lista
console.log(listaCognomi);
