//Função que verifica a velocidade
function verificaVelocidade(){
    var inVp=document.getElementById("inVp");
    var inVc=document.getElementById("inVc");
    var outSituacao=document.getElementById("outSituacao");
    var velocidade_permitida=Number(inVp.value);
    var velocidade_condutor=Number(inVc.value);
    //Verifica se os dados inseridos pelo usuário são válidos
    if((velocidade_permitida<=0 || isNaN(velocidade_permitida)) || (velocidade_condutor<=0 || isNaN(velocidade_condutor))){
        alert("Informe um valor válido.");
        inVp.focus();
        return;
    }
    //Verificar se a velocidade do condutor ultrapassou ou não a velocidade permitida
    if(velocidade_condutor<=velocidade_permitida){
        outSituacao.textContent="Situação: Sem Multa.";
        outSituacao.style.color="blue";
    }else if(velocidade_condutor<=(velocidade_permitida*1.20)){
        outSituacao.textContent="Situação: Multa Leve";
        outSituacao.style.color="orange";
    }else{
        outSituacao.textContent="Situação: Multa Grave";
        outSituacao.style.color="red";
    }
}
var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificaVelocidade);