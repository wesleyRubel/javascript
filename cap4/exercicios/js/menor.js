var menor=0;
//Função que verifica o menur número digitado pelo usuário
function menorNumero(){
    var inNumero=document.getElementById("inNumero");
    var outNumero=document.getElementById("outNumero");
    var outMenor=document.getElementById("outMenor");
    var numero=Number(inNumero.value);
    if(numero<=0 || isNaN(numero)){
        alert("Digite um valor numérico.");
        inNumero.focus();
        return;
    }
    inNumero.value="";
    outNumero.textContent="Digite o 1º número: "
    var num=Number(inNumero.value)
    for(var i=2;i<=numero;i++){

    }
}