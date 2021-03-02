function recebeString(string){
    let retornaString = string.split('')
    let umPalindromo = true;
    for(let index in retornaString){
        if(retornaString[index] != string[(string.lenght - 1) - index]){
            umPalindromo = false;
        }

    }
    return umPalindromo;
}

console.log(recebeString('ara'));