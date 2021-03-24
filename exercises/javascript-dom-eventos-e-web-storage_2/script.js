// exercício 1 //
let ondeEstou = document.getElementById('elementoOndeVoceEsta')
// exercício 2 //
let pai = document.getElementById('elementoOndeVoceEsta').parentNode
pai.style.color = "red";
// exercício 3 //
let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
filhoDoFilho.innerText = "texto para exercicio"
// exercício 4 //
let primeiroFilho = document.getElementById('pai').firstChild
// exercício 5 //
let primeiroFilhoDeOndeEstou = document.getElementById('elementoOndeVoceEsta').parentNode.firstChild
// exercício 6 //
let atencaoOndeEstou = document.getElementById('elementoOndeVoceEsta').parentNode

// exercício 7 //
let terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling

// exercício 8 //
let terceiroFIlhoDePai = document.getElementById('pai').nextElementSibling.nextElementSibling

// exercício 9 //
let criarElemento = document.querySelector('pai')
