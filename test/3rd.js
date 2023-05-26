function randomPair(arr) {

    // Mescola Array in modo casuale 
    arr.sort(() => Math.random() - 0.5);

    let result = [];
    let length = arr.length;

    // Genera coppie fino ad avere 2 elementi
    while (arr.length >= 2) {
        let pair = [arr.shift(), arr.shift()];
        result.push(pair);
      }

    // Controlla se arr è pari o dispari e riporta dato mancante nell'array finale
    if(length % 2 !== 0) {
        result.push(arr[0]);
    }

    return result;
}


console.log(randomPair(["John", "Mary", "Paul", "Joe", "Dav"]));