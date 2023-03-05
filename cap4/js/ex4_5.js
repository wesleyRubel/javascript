//Criando as variáveis(globais) que irão armazenar a quantidade de contas registradas e o valor total
var numContas=0;
var valTotal=0;
//Variável(global) que irá concactenar as strings a cada conta registrada
var resposta="";

//Função que conta a quantidade de contas registradas e acumula o valor de todas
function registraConta(){
    var inConta=document.getElementById("inConta");
    var inValor=document.getElementById("inValor");
    var outConta=document.getElementById("outConta");
    var outTotal=document.getElementById("outConta");
    var conta=inConta.value;
    var valor=Number(inValor.value);
    if(valor<=0 || isNaN(valor)){
        alert("Informe um valor que seja válido.");
        inValor.focus();
        return;
    }
    //Armazenando(concactenando) a descrição da conta e o valor
    resposta=resposta+conta+" - R$: "+valor+"\n";
    //Incrementando a conta registrada
    numContas++;
    //Adicionando o valor da conta registrada ao valor total
    valTotal=valTotal+valor;
    //Exibindo a listagem, o total de contas e o valor total
    outConta.textContent=resposta+"---------------------------------------------------------------";
    outTotal.textContent=numContas+" Conta(s) - Total R$: "+valTotal.toFixed(2);
    //Limpa os campos e posiciona o cursor em inConta
    inConta.value="";
    inValor.value="";
    inConta.focus();
}

var btRegistrar=document.getElementById("btRegistrar");
btRegistrar.addEventListener("click",registraConta);
