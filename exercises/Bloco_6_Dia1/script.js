let estados = document.querySelector('#estado')
function estados () {
    const todosEstados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
    let value = 1;
    for(let index = 0; index < todosEstados.length ; index += 1){
        const criando = document.createElement('option');
        estados.apeendChild(criando).innerText = todosEstados[index];
        estados.apeendChild(criando).value = todosEstados[index];
    }
}
estados ();