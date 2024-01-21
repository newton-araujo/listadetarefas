<h1>Lista de Tarefas Interativa</h1>

Este é um código JavaScript simples para criar uma lista de tarefas interativa. Ele permite adicionar tarefas à lista, exibindo uma mensagem de erro se o campo estiver vazio. Cada tarefa na lista é acompanhada por um botão de remoção.

<h2>Como Usar:</h2>
<ol>
<li>Clone o repositório ou baixe o arquivo JavaScript.</li>
<li>Inclua o código em seu projeto HTML.</li>
<li>Adicione o seguinte código HTML onde deseja exibir a lista de tarefas:</li>
</ol>

    <!-- Estrutura do HTML -->
        <div>
            <input type="text" id="novaTarefa" placeholder="Digite sua tarefa">
            <button onclick="addTarefa()">Adicionar Tarefa</button>
            <p id="erro" style="color: red;"></p>
            <ul id="lista"></ul>
    </div>

    <!-- Inclua o script JavaScript -->
    <script src="seu-arquivo-javascript.js"></script>

<ol><li>Certifique-se de que você tem uma imagem chamada "excluir.png" na pasta "img" do seu projeto.</li></ol>

<h2>Funcionalidades</h2>
<h3>Adicionar Tarefa</h3>
Ao digitar uma tarefa no campo de texto e clicar no botão "Adicionar Tarefa", a tarefa será adicionada à lista. Se o campo estiver vazio, uma mensagem de erro será exibida.

<h3>Remover Tarefa</h3>
Cada tarefa na lista é acompanhada por um botão de remoção. Clique no botão para remover a tarefa correspondente.