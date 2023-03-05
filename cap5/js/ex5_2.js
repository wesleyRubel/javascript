
/*//Criando um vetor global que ira armazenar os números que o usuário tentou
var erros=[];
//Gerando um número aleatório entre 1 e 100 que será retornado a variável "sorteado"
var sorteado=Math.floor(Math.random()*100)+1;
//Criando uma constante que irá armazenar o nº de chances do usuário
const chances=6;
alert("Número sorteado: "+sorteado);
function apostarNumero(){
    var inNumero=document.getElementById("inNumero");
    var outErros=document.getElementById("outErros");
    var outChances=document.getElementById("outChances");
    var outDica=document.getElementById("outDica");
    var numero=Number(inNumero.value);
    if(numero<=0 || numero>100 || isNaN(numero)){
        alert("Digite um número que seja válido...");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    //Caso o número escolhido pelo usuário seja igual ao número sorteado
    if(numero==sorteado){
        alert("Parabéns!! Você acertou o número!!!");
        //Muda o comportamento dos botões da página
        btApostar.disabled=true;
        btResetar.className="exibe";
        outDica.textContent="Parabéns!! Número sorteado: "+sorteado;
    }else{
        //Lógica para verificar se o usuário já escolheu o mesmo número
        if(erros.indexOf(numero)>=0){
            alert("Você já escolheu o número "+numero);
            inNumero.value="";
            inNumero.focus();
            return;
        }
        erros.push(numero); //Armazena o número escolhido pelo usuário no vetor
        var numErros=erros.length; //Retorna o número de elementos para a variável "numErros"
        var numChances=chances-numErros; //Calcula o nº de chances 
        outErros.textContent=numErros+" ( "+erros.join(", ")+" )";
        outChances.textContent=numChances;
        if(numChances==0){
            alert("Você esgotou suas chances...");
            btApostar.disabled=true;
            btResetar.className="exibe";
            outDica.textContent="Game Over!! Numero sorteado: "+sorteado;
        }else{
            var dica=numero<sorteado? "maior":"menor";
            outDica.textContent="Dica: Tente um número "+dica+" que "+numero;
        }
    }
    inNumero.value="";
    inNumero.focus();
}

var btApostar=document.getElementById("btApostar");
btApostar.addEventListener("click",apostarNumero);

function jogarNovamente(){
    location.reload(); //Recarrega a página
}
var btResetar=document.getElementById("btResetar");
btResetar.addEventListener("click",jogarNovamente);*/

//Gerando um número aleatório que será o número sorteado
var sorteado=Math.floor(Math.random()*100)+1;
//Declarando um vetor global que irá receber os números já tentados pelo usuário
var erros=[];
//Declarando uma constante que ira armazenar o número inicial de chances
const chances=6;
alert("Número sorteado = "+sorteado);
function apostarNumero(){
    var inNumero=document.getElementById("inNumero");
    var outErros=document.getElementById("outErros");
    var outChances=document.getElementById("outChances");
    var outDicas=document.getElementById("outDicas");
    var numero=Number(inNumero.value);
    //Validando o dado digitado pelo usuário
    if(numero<1 || numero>100 || isNaN(numero)){
        alert("Digite um valor numérico que seja válido\nE que esteja entre 1 e 100");
        inNumero.value="";
        inNumero.focus();
        return;
    }
    if(numero==sorteado){ //Caso o número escolhido pelo usuário seja igual ao sorteado
        alert("Parabéns!!Você descobriu o número sorteado!!!");
        //Muda o comportamento dos botões
        btApostar.disabled=true;
        btResetar.className="exibe";
        //Exibindo o número sorteado
        outDicas.textContent="Parabéns!! Número sorteado: "+sorteado;
    }else{ //Caso o número escolhido pelo usuário seja diferente do sorteado
        if(erros.indexOf(numero)>-1){ //Lógica para verificar se o usuário já escolheu o mesmo número
            alert("Você já escolheu o número "+numero+"\nEscolha outro número");
            inNumero.value="";
            inNumero.focus();
            return;
        }
        //Armazenado a tentativa do usuário no vetor erros
        erros.push(numero);
        var numErros=erros.length;
        var numChances=chances-numErros;
        outErros.textContent=numErros+" ( "+erros.join(", ")+" )";
        outChances.textContent=numChances;
        if(numChances==0){ //Lógica caso o usuário tenha esgotado todas as chances
            alert("Você esgotou todas as chances!");
            btApostar.disabled=true;
            btResetar.className="exibe";
            outDicas.textContent="Game Over!!! O número sorteado era: "+sorteado;
        }else{ //Lógica caso o usuário tenha ainda chances disponíveis
            var dica=numero<sorteado? "maior":"menor";
            outDicas.textContent="Dica: Tente um número "+dica+" que "+numero;
        }
    } 
    inNumero.value="";
    inNumero.focus();
}
var btApostar=document.getElementById("btApostar");
btApostar.addEventListener("click",apostarNumero);

function jogarNovamente(){
    location.reload(); //Recarrega a página
}
var btResetar=document.getElementById("btResetar");
btResetar.addEventListener("click",jogarNovamente);