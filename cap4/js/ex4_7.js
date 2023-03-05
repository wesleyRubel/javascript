//Função que imprime os símbolos
function imprimiEstrelas(){
    var inNumero=document.getElementById("inNumero");
    var outSimbolos=document.getElementById("outSimbolos");
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Informe um número que seja válido.");
        inNumero.focus();
        return;
    }
    //Criando uma variável do tipo string para guardar (concactenar) os símbolos
    var simbolo="";
    //Laço for que irá determinar o número de vezes que os símbolos irão ser impressos na tela, conforme número informado pelo usuário
    for(var i=1;i<=numero;i++){
        if(i%2!=0){ //Para o símbolo "*"
            simbolos=simbolos+"*";
        }else{ //Para o símbolo "_"
            simbolos=simbolos+"_";
        }
    }
    outSimbolos.textContent=simbolos;
}
var btPreencher=document.getElementById("btPreencher");
btPreencher.addEventListener("click",imprimiEstrelas);