//Função que calcula raiz quadrada
function calculaRaiz(){
    //Criando uma referência aos elementos
    var inNumero=document.getElementById("inNumero");
    var outRaiz=document.getElementById("outRaiz");
    //Obtendo o valor inserido pelo usuário
    var numero=Number(inNumero.value);
    //Verificando se o usuário inseriu um valor válido
    if(numero==0 || isNaN(numero)){
        alert("Informe um valor válido...");
        inNumero.focus();
        return;
    }
    //Calculando a raiz
    var raiz=Math.sqrt(numero);
    //Verificando se a raiz de numero é exata ou não
    if(raiz==Math.floor(raiz)){
        outRaiz.textContent="Raiz Quadrada de "+numero+" = "+raiz;
        outRaiz.style.fontSize="1.2em";
        outRaiz.style.color="blue";
    }else{
        outRaiz.textContent="Não existe Raiz exata para "+numero;
        outRaiz.style.fontSize="1.2em";
        outRaiz.style.color="red";
    }
}

//Cria uma referẽncia ao elemento btExibir (botão)
var btExibir=document.getElementById("btExibir");
//Registrando um evento ao elemento btExibir
btExibir.addEventListener("click",calculaRaiz);