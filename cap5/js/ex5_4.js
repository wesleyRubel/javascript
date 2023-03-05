/*var criancas=[]; //Vetor global que irá receber o nome e idade em cada elemento
function adicionarCriancas(){
    var inNome=document.getElementById("inNome");
    var inIdade=document.getElementById("inIdade");
    var nome=inNome.value;
    var idade=Number(inIdade.value);
    //Validando os dados fornecidos pelo usuário
    if(nome=="" || idade<1 || isNaN(idade)){
        alert("Informe os dados corretamente");
        inNome.value="";
        inIdade.value="";
        inNome.focus();
        return;
    }
    //Armazenando os dados informados pelo usuário no vetor de objetos
    criancas.push({nome:nome,idade:idade});
    //Limpando os campos dos elementos
    inNome.value="";
    inIdade.value="";
    //Chamando a função responsável por exibir a lista de crianças
    listarCriancas();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarCriancas);

function listarCriancas(){
    //Verificando se o vetor esta vazio, ou seja se o usuário adicionou crianças
    if(criancas.length==0){
        alert("Não existem elementos a serem exibidos");
        return;
    }
    //Variável string que ira concactenar os elementos do vetor que serão exibidos na lista
    var lista="";
    //Laço for que ira percorrer todos elementos do vetor
    for(var i=0;i<criancas.length;i++){
        lista+=criancas[i].nome+" - "+criancas[i].idade+" anos \n";
    }
    //Exibindo a lista
    document.getElementById("outLista").textContent=lista;
}
var btListar=document.getElementById("btListar");
btListar.addEventListener("click",listarCriancas);

function resumirLista(){
   //Verifica se a lista esta vazia
   if(criancas.length==0){
    alert("Não existem elementos a serem exibidos");
    return;
   }
   //Cria uma cópia do vetor criancas
   var copia=criancas.slice();
   //Ordena o vetor cópia pela idade
   copia.sort(function(a,b){return a.idade-b.idade});
   var resumo=""; //Para concactenar a saída
   var aux=copia[0].idade //Recebendo a menor idade
   var nome=[]; //Para inserir os nomes de cada idade
   //Percorre os elementos do vetor classificado por idade
   for(var i=0;i<copia.length;i++){
    //Se é da mesma idade auxiliar adiciona ao vetor
    if(copia[i].idade==aux){
        nome.push(copia[i].nome);
    }else{
        //Senão adiciona ao resumo, dados e nomes inserido em nomes
        resumo+=aux+" ano(s) "+nome.length+" Crianças - ";
        resumo+=(nome.length/copia.length*100).toFixed(2)+" %\n";
        resumo+="( "+nome.join(", ")+" )\n\n";
        aux=copia[i].idade; //Obtem a nova idade na ordem
        nome=[]; //Limpa o vetor dos nomes
        nome.push(copia[i].nome); //Adiciona o primeiro da nova idade
    }
    //Adiciona os nomes da última idade ordenada
    resumo+=aux+" ano(s) "+nome.length+" Crianças - ";
    resumo+=(nome.length/copia.length*100).toFixed(2)+"%\n"
    resumo+=" ( "+nome.join(", ")+" )\n\n";
    //Altera o conteúdo de outLista
    document.getElementById("outLista").textContent=resumo;
   }
}
var btResumir=document.getElementById("btResumir");
btResumir.addEventListener("click",resumirLista);*/

//Vetor de objetos que irá receber o nome e idade de cada criança
var criancas = [];

function adicionarCriancas() {
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var nome = inNome.value;
    var idade = Number(inIdade.value);
    if (nome == "" || idade < 1 || isNaN(idade)) {
        alert("Digite os dados corretamente");
        inNome.focus();
        return;
    }
    criancas.push({ nome: nome, idade: idade });
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();
    listarCriancas();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas() {
    var inNome = document.getElementById("inNome");
    if (criancas.length == 0) {
        alert("Não há crianças cadastradas a serem exibidas na lista");
        inNome.focus();
        return;
    }
    var lista = "";
    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
    }
    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirLista() {
    if (criancas.length == 0) {
        alert("Não há crianças cadastradas");
        return;
    }
    //Criando uma cópia do vetor criancas
    var copia = criancas.slice();
    //Ordenando copia por ordem de idade
    copia.sort(function (a, b) { return a.idade - b.idade });
    //Variável para concactenar a saída
    var resumo = "";
    //Variável que irá receber a menor idade do vetor ordenado
    var aux = copia[0].idade;
    //Vetor para inserir nomes de cada idade
    var nomes = [];
    //Percorre os elementos do vetor(classificado por idade)
    for (var i = 0; i < copia.length; i++) {
        if (copia[i].idade == aux) { //Se é da mesma idade auxiliar adiciona ao vetor
            nomes.push(copia[i].nome);
        } else { //Senão, adiciona ao resumo, dados e nomes inseridos em nomes
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "( " + nomes.join(", ") + " )\n\n";
            aux = copia[i].idade; //Obtém a nova idade na ordem 
            nomes = []; //Limpa o vetor dos nomes
            nomes.push(copia[i].nome); //Adiciona o primeiro nome da nova idade
        }
    }
    //Adiciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "( " + nomes.join(", ") + " )\n\n";
    //Altera o conteúdo de outLista
    document.getElementById("outLista").textContent=resumo;
}
var btResumir=document.getElementById("btResumir");
btResumir.addEventListener("click",resumirLista);