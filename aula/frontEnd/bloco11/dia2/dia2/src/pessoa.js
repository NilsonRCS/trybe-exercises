import React from 'react'

function Pessoa(props) {
console.log(props)

return (
<section>
<p>Nome: {props.nome}</p>
<p>Idade: {props.idade}</p>
<p>Frase: {props.frase}</p>
<div>Foto de perfil: <img width="100" src={props.foto} alt="Imagem da pessoa" /></div>
</section>
)
}

export default Pessoa 