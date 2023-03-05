//Função que verifica se um número é par ou ímpar
function verificaParouImpar(){
    var inNumero=document.getElementById("inNumero");
    var outResposta=document.getElementById("outResposta");
    var numero=Number(inNumero.value);
    //Verifica se o dado inserido pelo usuário é válido
    if(isNaN(numero)){
        alert("Digite apenas números.");
        inNumero.focus();
        return;
    }
    //Verifica se o número é par ou ímpar
    if(numero%2==0){
        outResposta.textContent="O número "+numero+" é par";
        outResposta.style.color="blue";
    }else{
        outResposta.textContent="O número "+numero+" é ímpar";
        outResposta.style.color="blue";
    }
}

var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificaParouImpar);