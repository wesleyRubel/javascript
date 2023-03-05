//Função que recebe um numero "n" do usuário e calcula o produto dos números ímpares e pares que há entre 1 e "n"
function Produto(){
    var inNumero=document.getElementById("inNumero");
    var outImpares=document.getElementById("outImpares");
    var outPares=document.getElementById("outPares");
    var numero=Number(inNumero.value);
    if(numero<=1 || isNaN(numero)){
        alert("Digite um valor númerico válido e maior que 1.");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    var impar=1;
    var par=1;
    for(var i=1;i<=numero;i++){
        if(i%2!=0){
            impar=impar*i;
        }else{
            par=par*i;
        }
    }
    outImpares.textContent="Produto dos ímpares = "+impar;
    outPares.textContent="Produto dos pares = "+par;
}
var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",Produto);