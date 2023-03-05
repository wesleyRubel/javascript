/*var carros=[]; //Declarando um vetor global que ira armazenar uma lista de objetos(carros)
//Função que ira receber os dados informados pelo usuário e armazenar no vetor
function adicionarCarros(){
    var inModelo=document.getElementById("inModelo");
    var inPreco=document.getElementById("inPreco");
    var modelo=inModelo.value;
    var preco=Number(inPreco.value);
    //Verificando se os dados inseridos pelo usuário são válidos
    if(modelo=="" || preco<=0 || isNaN(preco)){
        alert("Informe corretamente os dados");
        inModelo.value="";
        inPreco.value="";
        inModelo.focus();
        return;
    }
    //Armazenando no vetor os dados inseridos
    carros.push({modelo:modelo,preco:preco});
    //Limpando os campos dos elementos
    inModelo.value="";
    inPreco.value="";
    inModelo.focus();
    //Chamando a função que irá fazer a listagem dos veículos
    listarCarros();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarCarros);

function listarCarros(){
    if(carros.length==0){
        alert("Não há carros na lista");
        return;
    }
    var outLista=document.getElementById("outLista");
    var lista=""; //Variável string que ira concactenar as informações contidas no vetor para formar a listagem
    for(var i=0;i<carros.length;i++){
        lista+=carros[i].modelo+" - R$: "+carros[i].preco.toFixed(2)+"\n";
    }
    outLista.textContent=lista;
}
var btListar=document.getElementById("btListar");
btListar.addEventListener("click",listarCarros);

function filtrarCarros(){
    //Verificando se o vetor esta vazio, ou seja, se o usuário adicionou veículos
    if(carros.length==0){
        alert("Não há carros na lista para fazer a filtragem");
        return;
    }
    var maximo=Number(prompt("Qual valor máximo o cliente deseja pagar?"));
    //Verificando se o usuário digitou um valor válido
    if(maximo<=0 || isNaN(maximo)){
        alert("Digite os dados carretamente");
        return;
    }
    var lista=""; //Variável string que ira concactenar as informações contidas no vetor para formar a listagem
    //Laço for que ira percorrer todos elementos do vetor
    for(var i=0;i<carros.length;i++){
        if(carros[i].preco<=maximo){
            lista+=carros[i].modelo+" - R$: "+carros[i].preco.toFixed(2)+"\n";
        }
    }
    //Verificando se há algum veículo compatível com o valor informado pelo usuário
    if(lista==""){
        document.getElementById("outLista").textContent="Não há veículos com preço de até R$: "+maximo.toFixed(2);
    }else{
        document.getElementById("outLista").textContent="Veículos com valor de até R$: "+maximo.toFixed(2)+"\n---------------------------------------\n"+lista;
    }
}
var btFiltrar=document.getElementById("btFiltrar");
btFiltrar.addEventListener("click",filtrarCarros);*/

//Declarando um vetor de objetos que irá guardar o modelo e o preço de cada veículo
var carros = [];

function adicionarCarros() {
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");
    var modelo = inModelo.value;
    var preco = Number(inPreco.value);
    //Validando os dados digitados pelo usuário
    if (modelo == "" || preco < 1000 || isNaN(preco)) {
        alert("Digite os dados corretamente");
        inModelo.value = "";
        inPreco.value = "";
        inModelo.focus();
        return;
    }
    //Guardando os dados do veículo no vetor carros
    carros.push({ modelo: modelo, preco: preco });
    //Chamando a função listarCarros()
    listarCarros();
    //Limpando os campos e posicionando o cursor no elemento inModelo
    inModelo.value = "";
    inPreco.value = "";
    inModelo.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function filtrarCarros() {
    var inModelo = document.getElementById("inModelo");
    var outLista=document.getElementById("outLista");
    //Verificando se foram cadastrados veículos (se o vetor esta vazio)
    if (carros.length == 0) {
        alert("Não existem veículos cadastrados a serem exibidos na lista");
        inModelo.focus();
        return;
    }
    //Solicitando um valor máximo ao usuário
    var maximo=Number(prompt("Veículos até o valor de R$: "));
    //Validando o valor informado pelo usuário
    if(maximo<1000 || isNaN(maximo)){
        alert("Informe um valor numérico válido maior que R$ 1000,00");
        return;
    }
    //Variável para concactenar as strings que formarão a lista
    var lista="";
    //Laço for que irá percorrer o vetor carros
    for(var i=0;i<carros.length;i++){
        if(carros[i].preco<=maximo){ //Caso o preço do carro seja menor ou igual ao valor máximo informado pelo usuário
            lista+=carros[i].modelo+" - R$: "+carros[i].preco.toFixed(2)+"\n";
        }
    }
    //Verificando se existem veículos que correspondem ao valor informado pelo usuário
    if(lista==""){
        outLista.textContent="Não existem veículos na lista com o valor até R$: "+maximo.toFixed(2);
    }else{
        outLista.textContent="Veículos com o valor até R$ "+maximo.toFixed(2)+"\n-----------------------------------------\n"+lista;
    }
}
var btFiltrar=document.getElementById("btFiltrar");
btFiltrar.addEventListener("click",filtrarCarros);

function listarCarros() {
    var inModelo = document.getElementById("inModelo");
    var outLista = document.getElementById("outLista");
    //Verificando se foram cadastrados veículos (se o vetor esta vazio)
    if (carros.length == 0) {
        alert("Não existem veículos cadastrados a serem exibidos na lista");
        inModelo.focus();
        return;
    }
    //Variável para concactenar as strings que formarão a lista
    var lista = "";
    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }
    //Exibindo a lista
    outLista.textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);