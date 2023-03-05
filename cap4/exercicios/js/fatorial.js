//Função que calcula o fatorial de um número
function calculaFatorial(){
    var inNumero=document.getElementById("inNumero");
    var outFatorial=document.getElementById("outFatorial");
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Digite um valor numérico que seja válido.");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    var fatorial=1;
    var resultado=numero+"!: 1";
    var i=2;
    while(i<=numero){
        fatorial=fatorial*i;
        resultado=resultado+" X "+i;
        i++;
    }
    resultado=resultado+" = "+fatorial;
    outFatorial.textContent=resultado;
    inNumero.value="";
}
var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculaFatorial);