function calculaMedia(){
    var inAluno=document.getElementById("inAluno");
    var inNota1=document.getElementById("inNota1");
    var inNota2=document.getElementById("inNota2");
    var outMedia=document.getElementById("outMedia");
    var outSituacao=document.getElementById("outSituacao");

    var nome=inAluno.value;
    var nota1=Number(inNota1.value);
    var nota2=Number(inNota2.value);

    var media=(nota1+nota2)/2;

    outMedia.textContent="Média das notas: "+media.toFixed(1);

    if(media>=7){
        outSituacao.textContent="Parabéns "+nome+"! Você foi aprovado(a)";
    }else{
        outSituacao.textContent="Ops "+nome+"... você foi reprovado(a)";
    }
}

var btMostrar=document.getElementById("btMostrar");
btMostrar.addEventListener("click",calculaMedia);