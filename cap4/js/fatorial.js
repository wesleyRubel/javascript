//Função que calcula o fatorial de um número
function calculaFatorial(){
    var inNumero=document.getElementById("inNumero");
    var outResposta=document.getElementById("outFatorial");
    var numero=Number(inNumero.value);
    if(numero==0 || isNaN(numero)){
        alert("Digite um número que seja válido.");
        inNumero.focus();
        return;
    }
    var fatorial=1;
    for(var i=1;i<=numero;i++){
        fatorial=fatorial*i;
    }
    outResposta.textContent="Fatorial de "+numero+" = "+fatorial;
}
var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculaFatorial);