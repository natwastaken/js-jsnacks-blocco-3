// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

let NumberArray = [];
let sum = 0;

let i = 0;
while ( i < 5 ) {
    
    NumberArray[i] = parseInt(prompt("inserisci un numero"));

    console.log("numero inserito: " + NumberArray);

    sum += NumberArray[i];
    
    i++;

}

console.log("Somma totale: " + sum);

