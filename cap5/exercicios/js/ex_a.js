var clubes=[];

function adicionarClubes(){
    var inClube=document.getElementById("inClube");
    if(inClube.value==""){
        alert("Digite o nome do clube");
        inClube.focus();
        return;
    }
    clubes.push(inClube.value);
    listarClubes();
    inClube.value="";
    inClube.focus();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarClubes);

function listarClubes(){
    var inClube=document.getElementById("inClube");
    if(clubes.length==0){
        alert("Não existem clubes a serem exibidos");
        inClube.focus();
        return;
    }
    var outLista=document.getElementById("outLista");
    var lista="";
    for(var i=0;i<clubes.length;i++){
        lista+=(i+1)+". "+clubes[i]+"\n";
    }
    outLista.textContent=lista;
}
var btListar=document.getElementById("btListar");
btListar.addEventListener("click",listarClubes);

function montarTabela(){
    var inClube=document.getElementById("inClube");
    if(clubes.length==0){
        alert("Não existem clubes a serem exibidos");
        inClube.focus();
        return;
    }  
    if(clubes.length%2!=0){
        alert("Não é possível montar a tabela com um número ímpar de clubes");
        inClube.focus();
        return;
    }  
    var outLista=document.getElementById("outLista");
    var emparceiramento="";
    var final=clubes.length-1
    for(var i=0;i<(clubes.length/2);i++){
        emparceiramento+=clubes[i]+" X "+clubes[final]+"\n";
        final--;
    }
    outLista.textContent=emparceiramento;
}
var btMontar=document.getElementById("btMontar");
btMontar.addEventListener("click",montarTabela);