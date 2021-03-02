let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
  };
let info2 = {
    personagem: 'tio patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

for(let propriedades in info){
  console.log(info[propriedades])
}

for(let outraPropriedade in info2){
  console.log(info2[outraPropriedade])
}
