function imprimiEstrelas(){
    var inNumero=document.getElementById("inNumero");
    var outEstrelas=document.getElementById("outEstrelas");
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Digite um valor numérico que seja válido.");
        inNumero.focus();
        return;
    }
    var estrelas="";
    for(var i=1;i<=numero;i++){
        for(var j=1;j<=i;j++){
            estrelas=estrelas+"*";
        }
        estrelas=estrelas+"\n";
    }
    outEstrelas.textContent=estrelas;
}
var btCriar=document.getElementById("btCriar");
btCriar.addEventListener("click",imprimiEstrelas);