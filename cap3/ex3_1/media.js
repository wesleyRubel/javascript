//Definindo a função para calcular a média escolar
function calculaMedia(){
    //Criando uma referência para os elementos HTML
    var inNome=document.getElementById("inNome");
    var inNota1=document.getElementById("inNota1");
    var inNota2=document.getElementById("inNota2");
    var outMedia=document.getElementById("outMedia");
    var outSituacao=document.getElementById("outSituacao");
    //Obtendo os dados inseridos pelo usuário nos campos do formulário
    var nome=inNome.value;
    var nota1=Number(inNota1.value);
    var nota2=Number(inNota2.value);
    //Calcular a média e exibi-la
    var media=(nota1+nota2)/2;
    outMedia.textContent="Média das notas: "+media.toFixed(2);
    //Verificando a situação do aluno (aprovado/reprovado)
    if(media>=7){
        outSituacao.textContent="Parabéns "+nome+"! Você foi aprovado(a)";
        outSituacao.style.color="blue";
    }else if(media>=4){
        outSituacao.textContent="Atenção "+nome+". Você esta em exame.";
        outSituacao.style.color="green";
    }else{
        outSituacao.textContent="Ops..."+nome+". Você foi reprovado(a)";
        outSituacao.style.color="red";
    }
}

//Criando uma referência para o elemento btCalcular (botão)
var btCalcular=document.getElementById("btCalcular");
//Registrando um evento associado ao elemento btCalcular
btCalcular.addEventListener("click",calculaMedia);