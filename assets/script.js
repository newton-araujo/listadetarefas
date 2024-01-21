

//botão Adicionando Tarefa
function addTarefa() {
    //Variaveis (input e adicionar "lista")
    let input = document.getElementById('novaTarefa')
    let adicionar = document.getElementById('lista')
    //Variaval com msg de erro
    let erro = document.getElementById('erro')

    //Condição que verifica se o input está vazio;
    if(input.value.trim() === '') {
        erro.innerHTML = 'Por favor, insira uma tarefa válida.'
    
    } else {
            //Caso o input receba alguma informação;
            erro.innerHTML = ''

            //variavel para criar 'li'.
            let objLi = document.createElement('li')
            objLi.className = 'lista'

            //Adicionando o input no 'li';
            let adicionarTexto = document.createTextNode(input.value)
            objLi.appendChild(adicionarTexto)


            //Criando botão Remove;
            let removeButton = document.createElement('button')
            removeButton.className = 'btnExcluir'
            removeButton.innerHTML = `<img src="./img/excluir.png" alt="lixeira">`;
            removeButton.onclick = () => adicionar.removeChild(objLi)


            //Li recebendo o botão remove assim que receber algum dado.
            objLi.appendChild(removeButton)

            //Adicionando 'li'.
            adicionar.appendChild(objLi)

    }

    //Zerando o input após enviar o dado.
    input.value = ''
}


