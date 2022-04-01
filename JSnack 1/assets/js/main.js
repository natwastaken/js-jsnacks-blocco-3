// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// fino a quando la somma degli elementi è minore di 50.

// creo array vuota
let array = [];
console.log(array);

// creo la variabile somma vuota a zero
let sum = 0;
console.log(sum);

// ciclo while che funziona fino a che la somma è inferiore a 50
while (sum < 50) {
    
    // prompt per chiedere all' utente di inserire il numero
    let UserNumber = parseInt(prompt("inserisci un numero"));
    console.log(UserNumber);

    // aggiungo il numero chiesto nell array
    array.push(UserNumber);
    console.log(array);
    
    // sommo tutti i numeri chiesti fino a superare il valore 50
    sum += UserNumber;

}

// stampa del valore
console.log(sum);
