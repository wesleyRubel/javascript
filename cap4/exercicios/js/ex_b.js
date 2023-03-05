function calculaPopulacao(){
    var inNumero=document.getElementById("inNumero");
    var inAno=document.getElementById("inAno");
    var outresposta=document.getElementById("outResposta");
    var numero=Number(inNumero.value);
    var ano=Number(inAno.value);
    if(numero<2 || isNaN(numero)){
        alert("Informe um valor numérico que seja maior ou igual a 2.");
        inNumero.focus();
        return;
    }
    if(ano<=0 || isNaN(ano)){
        alert("Digite um valor numérico válido.");
        inAno.focus();
        return;
    }
    var populacao="1º Ano: "+numero+" Chinchilas \n";
    for(var i=2;i<=ano;i++){
        numero=numero*3;
        populacao=populacao+i+"º Ano: "+numero+" Chinchilas \n";
    }
    outresposta.textContent=populacao;
}
var btMostrar=document.getElementById("btMostrar");
btMostrar.addEventListener("click",calculaPopulacao);