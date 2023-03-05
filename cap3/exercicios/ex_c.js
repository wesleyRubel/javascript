//Função que verifica o tempo estimado para estacionar e retorna o troco caso houver
function verificaTempo(){
    var inValor=document.getElementById("inValor");
    var outTempo=document.getElementById("outTempo");
    var outTroco=document.getElementById("outTroco");
    var valor=Number(inValor.value);
    //Verifica se o usuário digitou um valor válido
    if(valor<=0 || isNaN(valor)){
        alert("Informe um valor que seja válido.");
        inValor.focus();
        return;
    }
    //Verifica se o valor informado pelo usuário é suficiente para um estacionamento
    if(valor<1.00){
        alert("Valor insuficiente para estacionar.");
        inValor.focus();
        return;
    }
    //Verifica o tempo permitido para estacionar com base no valor informado pelo usuário
    if(valor<1.75){
        outTempo.textContent="Tempo: 30 min";
        outTempo.style.color="blue";
        var troco=valor-1.00;
        if(troco!=0){
            outTroco.textContent="Troco R$: "+troco.toFixed(2);
            outTroco.style.color="blue";
        }
    }
    if(valor>=1.75 && valor<3.00){
        outTempo.textContent="Tempo: 60 min";
        outTempo.style.color="blue";
        var troco=valor-1.75;
        if(troco!=0){
            outTroco.textContent="Troco R$: "+troco.toFixed(2);
            outTroco.style.color="blue";
        }
    }
    if(valor>=3.00){
        outTempo.textContent="Tempo: 120 min";
        outTempo.style.color="blue";
        var troco=valor-3.00;
        if(troco!=0){
            outTroco.textContent="Troco R$: "+troco.toFixed(2);
            outTroco.style.color="blue";
        }
    }
}
var btConfirmar=document.getElementById("btConfirmar");
btConfirmar.addEventListener("click",verificaTempo);