let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let allNumbers = 0; allNumbers < numbers.length;allNumbers++){
 resultado += numbers[allNumbers]
}
let novoResultado = resultado / numbers.length-1;
if (novoResultado >= 20) {
    console.log ('Valor maior que 20')
} else { 
    console.log ('Valor Menor que 20')
}


