//Função que calcula a tabuada de um número
function mostrarTabuada(){
    //Criando uma referência aos elementos HTML responsáveis pela entrada e saída de dados
    var inNumero=document.getElementById("inNumero");
    var outResposta=document.getElementById("outResposta");
    //Obtendo o dado inserido pelo usuário
    var numero=Number(inNumero.value);
    //Verificando se o dado digitado pelo usuário é válido
    if(numero==0 || isNaN(numero)){
        alert("Digite um valor numérico que seja válido.");
        inNumero.focus();
        return;
    }
    //Criando uma variável que será responsável por guardar a tabuada de numero a cada laço
    var tabuada="";
    var resp;
    //Lógica para exibir a tabuada
    for(var i=1;i<=10;i++){
        resp=numero*i;
        tabuada=tabuada+numero+" X "+i+" = "+resp+"\n";
    }
    //Exibindo a tabuada do número
    outResposta.textContent=tabuada;
}
//Criando uma referência ao elemento "btMostrar" e associando um evento, que quando acionado executará a função "mostrarTabuada"
var btMostrar=document.getElementById("btMostrar");
btMostrar=addEventListener("click",mostrarTabuada);