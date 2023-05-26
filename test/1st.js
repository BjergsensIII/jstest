function orderedArr(array) {

    // Rimuove duplicati
    let noDubleArr = [...new Set(array)];

    // Ordina Array
    noDubleArr.sort();

    return noDubleArr;
}

console.log(orderedArr(["a", "c", "a", "b", "b", "d", "a", "e"]));