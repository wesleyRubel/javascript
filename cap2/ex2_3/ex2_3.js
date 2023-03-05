//Função para calcular a promoção do veículo
function calculaPromocao(){
    //Criando uma referência para os elementos HTML
    var inVeiculo=document.getElementById("inVeiculo");
    var inPreco=document.getElementById("inPreco");
    var outVeiculo=document.getElementById("outVeiculo");
    var outEntrada=document.getElementById("outEntrada");
    var outParcela=document.getElementById("outParcela");

    //Recebendo os valores dos campos inVeiculo e inPreco
    var veiculo=inVeiculo.value;
    var preco=inPreco.value;

    //Calculando a entrada
    var entrada=preco*0.50;
    //Calculando o valor da parcela
    var parcela=(preco-entrada)/12;

    //Exibindo os valores de saída
    outVeiculo.textContent="Promoção: "+veiculo;
    outEntrada.textContent="Entrada de R$: "+entrada.toFixed(2);
    outParcela.textContent="+ 12x de R$: "+parcela.toFixed(2); 
}

//Criando uma referência para o botão com id="btPromocao"
var promocao=document.getElementById("btPromocao");
//Registrando um evento ao elemento btPromocao(botão) para chamar a função calculaPromocao
promocao.addEventListener("click",calculaPromocao);