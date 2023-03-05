var numeros=[];

function adicionarNumeros(){
    var inNumero=document.getElementById("inNumero");
    var numero=Number(inNumero.value);
    if(isNaN(numero)){
        alert("Digite um valor válido");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    if(numeros.indexOf(numero)>-1){
        alert("Você já digitou o número "+numero+"\nTente outro");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    numeros.push(numero);
    listarNumeros();
    inNumero.value="";
    inNumero.focus();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarNumeros);

function listarNumeros(){
    var outNumeros=document.getElementById("outNumeros");
    var lista=numeros.join(", ");
    outNumeros.textContent=lista;
}

function verificaOrdem(){
    var inNumero=document.getElementById("inNumero");
    if(numeros.length==0){
        alert("Não existem elementos a serem verificados");
        inNumero.focus();
        return;
    }
    var outOrdem=document.getElementById("outOrdem");
    var ordem=true;
    for(var i=0;i<numeros.length;i++){
        if(numeros[i]>numeros[i+1]){
            ordem=false;
            break;
        }
    }
    if(ordem){
        outOrdem.className="fonteAzul";
        outOrdem.textContent="Os números estão em ordem crescente";
    }else{
        outOrdem.className="red";
        outOrdem.textContent="Atenção...os números não estão em ordem crescente";
    }
}
var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificaOrdem);