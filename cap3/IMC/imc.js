//Função responsável por calcular o IMC 
function calculaImc(){
    //Criando uma referência para os elementos
    var inNome=document.getElementById("inNome");
    var inAltura=document.getElementById("inAltura");
    var inPeso=document.getElementById("inPeso");
    var outImc=document.getElementById("outImc");
    var outSituacao=document.getElementById("outSituacao");
    var outImagem=document.getElementById("outImagem");
    //Obtendo os valores inseridos pelo usuários nos campos
    var nome=inNome.value;
    var altura=Number(inAltura.value);
    var peso=Number(inPeso.value);
    //Verificando se o usuário digitou o nome
    if(nome==""){
        alert("É necessário inserir um nome.");
        inNome.focus();
        return;
    }
    //Verificando se o usuário digitou um valor válido para altura e peso
    if(altura<=0 || peso<=0){
        alert("Por favor informe um valor válido para altura ou peso.");
        inAltura.focus();
        return;
    }
    //Calculando o IMC
    var alturaMT=altura/100;
    var imc=peso/(alturaMT*alturaMT);
    //Exibindo o IMC
    outImc.textContent=nome+" seu IMC é = "+imc.toFixed(2);
    //Dando estilo aos elementos referenciados
    outImc.style.color="#BBCAA9";
    outSituacao.style.color="#BBCAA9";
    outImagem.style.width="350px";
    outImagem.style.height="200px";
    //Verificando a situação do usuário
    if(imc<18.5){
        outSituacao.textContent="Você esta abaixo do peso ideal."
        outImagem.style.backgroundImage="url(images/magreza.png)";
        outImagem.style.backgroundAttachment="fixed";
    }
    if(imc>=18.5 && imc<=24.9){
        outSituacao.textContent="Você esta com o peso ideal.";
        outImagem.style.backgroundImage="url(images/normal.png)";
        outImagem.style.backgroundAttachment="fixed";
    }
    if(imc>=25 && imc<=29.9){
        outSituacao.textContent="Você esta com sobrepeso.";
        outImagem.style.backgroundImage="url(images/sobrepeso.png)";
        outImagem.style.backgroundAttachment="fixed";
    }
    if(imc>=30 && imc<34.9){
        outSituacao.textContent="Você esta com obesidade.";
        outImagem.style.backgroundImage="url(images/obesidade.png)";
        outImagem.style.backgroundAttachment="fixed";
    }
    if(imc>=35){
        outSituacao.textContent="Você esta com obesidade mórbida";
        outImagem.style.backgroundImage="url(images/obesidadeII.png)";
    }

}

//Criando uma referência ao elemento btCalcular (botão)
var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",calculaImc);

//Função que recarrega a página
function limpar(){
    location.reload();
    document.getElementById("inNome").focus();
}

var btLimpar=document.getElementById("btLimpar");
btLimpar.addEventListener("click",limpar);