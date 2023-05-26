function uniqueString(arr1, arr2) {

    // Filtra le stringhe di arr1 basandosi su arr2
    const newArr1 = arr1.filter(str => !arr2.includes(str));

    // Filtra le stringhe di arr2 basandosi su arr1    
    const newArr2 = arr2.filter(str => !arr1.includes(str));

    return [...newArr1, ...newArr2];
}


console.log(uniqueString(["1", "2", "3", "4","6"], ["1", "4", "5"]));
console.log(uniqueString(["quadro", "casa", "letto", "scrivania","computer"], ["computer", "casa", "poltrona"]));