//Função que verifica se o saque solicitado é possível
function verificaSaque() {
    //Criando uma referência aos elementos
    var inValor = document.getElementById("inValor");
    var out100 = document.getElementById("out100");
    var out50 = document.getElementById("out50");
    var out10 = document.getElementById("out10");
    //Limpa mensagens (caso segunda execução)
    out100.textContent="";
    out50.textContent="";
    out10.textContent="";
    //Obtendo o valor informado pelo usuário
    var valor = Number(inValor.value);
    //Verificando se o valor digitado pelo usuário é válido
    if (valor <= 0 || isNaN(valor)) {
        alert("Informe um valor de saque válido.");
        inValor.focus();
        return;
    }
    //Verificando se o valor do saque é multíplo de 10
    if(valor%10!=0){
        alert("Valor inválido para as notas disponíveis no terminal (R$ 10, 50, 100)");
        inValor.focus();
        return;
    }
    //Calculando notas de 100, 50 e 10
    var notas100=Math.floor(valor/100);
    var resto=valor%100;
    var notas50=Math.floor(resto/50);
    var resto=resto%50;
    var notas10=Math.floor(resto/10);
    //Exibe apenas se houver notas
    if(notas100>0){
        out100.textContent="Notas de R$ 100,00 = "+notas100;
        out100.style.color="blue";
    }
    if(notas50>0){
        out50.textContent="Notas de R$ 50,00 = "+notas50;
        out50.style.color="blue";
    }
    if(notas10>0){
        out10.textContent="Notas de R$ 10,00 = "+notas10;
        out10.style.color="blue";
    }
}
//Cria referência ao elemento btExibir e associa a function ao evento click
var btExibir=document.getElementById("btExibir");
btExibir.addEventListener("click",verificaSaque);