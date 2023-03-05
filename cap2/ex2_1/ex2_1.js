// Definindo a função que irá capturar a string do formulário e exibir em um parágrafo
function mostrarOla(){
    //Obtendo a string digitada pelo usuário do campo referenciado pelo id="nome"
    var nome=document.getElementById("nome").value;
    //Exibindo a mensagem Olá + nome digitado no parágrafo referenciado pelo id="resposta"
    document.getElementById("resposta").textContent="Olá "+nome;
}

//Cria uma referência ao botão com id="mostrar"
var mostrar=document.getElementById("mostrar");
//Registra para o batão "mostrar" um ouvinte para o evento click,
//que ao ser clicado ira chamar a função mostrarOla
mostrar.addEventListener("click",mostrarOla);