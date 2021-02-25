let alicotaINSS;
let alicotaIR;
let salarioBruto =5000;

if (salarioBruto < 1556.94) {
    alicotaINSS =salarioBruto * 0.08
} else if (salarioBruto <= 2594.92) {
    alicotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    alicotaINSS = salarioBruto * 0.11;
} else {
    alicotaINSS = 570.88;
} 

let salarioLiquido = salarioBruto - alicotaINSS;

if (salarioLiquido <= 1903.98){
    alicotaIR = 0;
} else if (salarioLiquido <= 2826.65 ) {
    alicotaIR = (salarioLiquido * 0.075) -142.80;
} else if (salarioLiquido <= 3751.05) {
    alicotaIR = (salarioLiquido * 0.15) -354.80;
} else if (salarioLiquido <= 4664.68) {
    alicotaIR = (salarioLiquido * 0.225) -636.13;
} else {
    alicotaIR = (salarioLiquido * 0.275) -869.36;
}

console.log ('Salário: '+(salarioLiquido - alicotaIR));

