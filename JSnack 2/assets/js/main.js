// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// creo la costante N e chiedo il nuemro all'utente
let N = parseInt(prompt("inserisci un numero"));

// creo un array vuoto che deve contenere N array
let NArray = [];

// creo un ciclo che funziona fino a quando i < N ed a ogni ciclo incremento la variabile di 1
for ( i = 0; i < N ; i++ ) {
    
    // ad ogni ciclo creo una array vuoto
    let TypeArray = [];
    
    //  creo un ciclo while che funziona fino a quando l'array tipo ha dentro numeri < 10
    while ( TypeArray.length < 10 ) {

        // generatore di numeri random da 1 a 100
        TypeArray.push(Math.floor(Math.random() * 100) + 1 );

    }
    
    // stampa degli array tipo singoli
    console.log(TypeArray);

    // inserimento degli N array dentro ad una variabile
    NArray.push(TypeArray);

}

// stampa finale degli N array
console.log(NArray);