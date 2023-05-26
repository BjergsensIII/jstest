function anagram(str1, str2) {

    // Stringhe indentiche return false 
    if (str1 === str2) {
        return false;
    }

    // Toglie spazie e converte stringhe in array di singole lettere
    let arr1 = str1.replace(/\s/g, "").split("");
    let arr2 = str2.replace(/\s/g, "").split("");

    // Verifica lunghezza 
    if(arr1.length !== arr2.length) {
        return false;
    }

    // Ordina caratteri
    arr1.sort();
    arr2.sort();

    // Confronta caratteri 

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}

console.log(anagram("bibliotecario", "beato coi libri"));
console.log(anagram("casa", "casa"));
console.log(anagram("cassa", "sacca"));
console.log(anagram("libro125", "1lib2r5o"));