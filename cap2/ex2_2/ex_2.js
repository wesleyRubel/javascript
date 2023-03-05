//Função para converter minutos em horas
function converterDuracao(){
    //Criando referências aos elementos da página
    var inTitulo=document.getElementById("inTitulo");
    var inDuracao=document.getElementById("inDuracao");
    var outTitulo=document.getElementById("outTitulo");
    var outResposta=document.getElementById("outResposta");

    //Obtendo os conteúdos dos campos de entrada
    var titulo=inTitulo.value;
    var duracao=inDuracao.value;

    //Arredondando pra baixo o resultado da divisão
    var horas=Math.floor(duracao/60);
    //Obtendo o resto da divisão
    var minutos=duracao%60;
    //Altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent=titulo;
    outResposta.textContent=horas+" hora(s) e "+minutos+" minuto(s)";
}

//Criando uma referência para o botão com id="btConverter"
var btConverter=document.getElementById("btConverter");
//Registra um evento associado ao botão para carregar o botão
btConverter.addEventListener("click",converterDuracao);