//Exercicio 01 Promoção farmácia
function calculaPromocao(){
    var inMedicamento=document.getElementById("inMedicamento");
    var inPreco=document.getElementById("inPreco");
    var outMedicamento=document.getElementById("outMedicamento");
    var outPromocao=document.getElementById("outPromocao");

    var medicamento=inMedicamento.value;
    var preco=inPreco.value;

    var promocao=Math.floor(preco*2);

    outMedicamento.textContent="Promoção de "+medicamento;
    outPromocao.textContent="Leve 2 por apenas R$: "+promocao.toFixed(2);
}
var btMostrar=document.getElementById("btMostrar");
btMostrar.addEventListener("click",calculaPromocao);

