//Definindo a função que irá calcular o valor a ser pago pelo cliente
function calculaValor(){
    //Criando uma referência para os elementos HTML
    var inBuffet=document.getElementById("inBuffet");
    var inCliente=document.getElementById("inCliente");
    var outTotal=document.getElementById("outTotal");

    //Armazenando os valores digitados nos campos do formulário
    var buffet=inBuffet.value;
    var cliente=inCliente.value;

    //Calculando o valor a ser pago
    var vTotal=(cliente/1000)*buffet;
    //Exibindo o valor a ser pago
    outTotal.textContent="Valor a pagar R$: "+vTotal.toFixed(2);
}

//Criando uma referência para o elemento btCalcular (o botão)
var calcular=document.getElementById("btCalcular");
//Registrando um evento para o elemento btCalcular e a função a ser chamada
//Quando esse evento disparado
calcular.addEventListener("click",calculaValor);