function calculaPeso(){
    var inNome=document.getElementById("inNome");
    var rbMasc=document.getElementById("rbMasc");
    var rbFem=document.getElementById("rbFem");
    var inAltura=document.getElementById("inAltura");
    var outResposta=document.getElementById("outResposta");

    var nome=inNome.value;
    var masc=rbMasc.checked;
    var fem=rbFem.checked;
    var altura=Number(inAltura.value);

    //Verificando se o usuário digitou o nome e selecionou o sexo
    if(nome!="" && (masc==true || fem==true)){
        if(altura>0){
            if(masc){
                var peso=22*Math.pow(altura,2);
                outResposta.textContent=nome+" seu peso ideal é "+peso.toFixed(3)+"Kg.";
            }else{
                var peso=21*Math.pow(altura,2);
                outResposta.textContent=nome+" seu peso ideal é "+peso.toFixed(3)+"Kg.";
            }
        }else{
            alert("Por favor informe a altura corretamente.");
            inAltura.focus();
        }
    }else{
        alert("Por favor informe o nome e selecione uma opção de gênero.");
        inNome.focus();
    }
}

var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculaPeso);

function limparCampos(){
    /*
    document.getElementById("inNome").value="";
    document.getElementById("rbMasc").checked=false;
    document.getElementById("rbFem").checked=false;
    document.getElementById("inAltura").value="";
    document.getElementById("outResposta").textContent="";
    */
   //Método que recarrega a página
    location.reload();
    document.getElementById("inNome").focus();
}

var btLimpar=document.getElementById("btLimpar");
btLimpar.addEventListener("click",limparCampos);