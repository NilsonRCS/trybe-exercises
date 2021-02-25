let peça = 'Rainha'
switch (peça.toLocaleLowerCase()) {
    case 'rei':
        console.log ('Rei, Se movimenta uma casa para qualquer direção.')
        break;
    case 'rainha':
        console.log ('Rainha, Se movimenta na vertital,horizontal ou diagonal.')
        break;
    case 'bispo':
            console.log ('Bispo, se movimenta na diagonal.')
            break;
    case 'cavalo':
        console.log ('Cavalo, Se movimenta em L.')
        break;
    case 'torre':
        console.log ('Torre, Se movimenta na horizontal e vertical.')
        break;
    case 'peão':
        console.log ('Peão, no primeiro movimento anda duas casas no restante uma')
        break;
    default:
        console.log ('Essa peça não existe.')
}