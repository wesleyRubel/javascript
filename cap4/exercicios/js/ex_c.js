//Função que verifica se um número é perfeito
function numeros_Perfeitos(){
    var inNumero=document.getElementById("inNumero");
    var outSoma=document.getElementById("outSoma");
    var outNumero=document.getElementById("outNumero");
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Digite um valor numérico que seja válido.");
        inNumero.focus();
        return;
    }
    var soma=1;
    var resultado_soma="Divisores de "+numero+": 1";
    for(var i=2;i<=numero-1;i++){
        if(numero%i==0){
            soma=soma+i;
            resultado_soma=resultado_soma+", "+i;
        }
    }
    resultado_soma=resultado_soma+" (Soma: "+soma+")";
    outSoma.textContent=resultado_soma;
    if(soma==numero){
        outNumero.textContent=numero+" É Um Número Perfeito";
    }else{
        outNumero.textContent=numero+" Não É Um Número Perfeito"
    }
}
var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",numeros_Perfeitos);