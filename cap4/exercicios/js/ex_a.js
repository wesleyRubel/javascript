//Função que repete o número de frutas informado pelo usuário
function repeteFrutas(){
    var inFruta=document.getElementById("inFruta");
    var inNumero=document.getElementById("inNumero");
    var outFruta=document.getElementById("outFruta");
    var fruta=inFruta.value;
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Informe um número que seja válido.")
        inNumero.focus();
        return;
    }
    for(var i=2;i<=numero+(numero-1);i++){
        if(i%2==1){
            fruta=fruta+inFruta.value;
        }else{
            fruta=fruta+" * ";
        }
    }
    outFruta.textContent=fruta;
}
var btRepetir=document.getElementById("btRepetir");
btRepetir.addEventListener("click",repeteFrutas);