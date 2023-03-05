//Função que mostra números em ordem decrescente
function decrescerNumero(){
    var inNumero=document.getElementById("inNumero");
    var outResposta=document.getElementById("outResposta");
    var numero=Number(inNumero.value);
    if(numero<=1 || isNaN(numero)){
        alert("Digite um número que seja válido.");
        inNumero.focus();
        return;
    }
    var resposta="Entre "+numero+" e 1: ";
    for(numero;numero>1;numero--){
        resposta=resposta+numero+", ";    
    }
    resposta=resposta+numero+". ";
    outResposta.textContent=resposta;
}

var btDecrescer=document.getElementById("btDecrescer");
btDecrescer.addEventListener("click",decrescerNumero);