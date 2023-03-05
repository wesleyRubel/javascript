//Função que verifica se um número é primo ou não
function primos(){
    var inNumero=document.getElementById("inNumero");
    var outResposta=document.getElementById("outResposta");
    var numero=Number(inNumero.value);
    if(numero==0 || isNaN(numero)){
        alert("Informe um número que seja válido.");
        inNumero.focus();
        return;
    }
    //Criando a variável de verificação
    var resp=false;
    //Utilizando o for para verificar se o numero é primo
        for(var i=2;i<numero;i++){
            if(numero%i==0){
                resp=true;
                break;
            }
        }

    if(resp){
        outResposta.textContent=numero+" não é primo";
    }else{
        outResposta.textContent=numero+" é primo";
    }
}
var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",primos);