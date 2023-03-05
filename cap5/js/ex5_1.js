/*var pacientes=[] //Declarando um vetor global para armazenar os nomes dos pacientes
var urgencia=0;
function adicionarPaciente(){
    var inPaciente=document.getElementById("inPaciente");
    var outLista=document.getElementById("outLista");
    var paciente=inPaciente.value;
    if(paciente==""){ //Validando o dado inserido pelo usuário
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }
    //Adicionando o nome informado pelo usuário no vetor 
    pacientes.push(paciente);
    //Variável string que ira concactenar os elementos do vetor e formar a lista de espera
    var lista="";
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    //Exibir a lista
    outLista.className="green";
    outLista.textContent=lista;
    //Limpando o campo nome do paciente
    inPaciente.value="";
    inPaciente.focus();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarPaciente);

function adicionarUrgente(){
    var inPaciente=document.getElementById("inPaciente");
    var outLista=document.getElementById("outLista");
    var paciente=inPaciente.value;
    //Validando o dado inserido pelo usuário
    if(paciente==""){
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;    
    }
    if(urgencia==0){ //Verifica se é o primeiro paciente no atendimento de urgência
        pacientes.unshift(paciente);
    }else{ //Senão os demais pacientes com urgência entram atrás
        pacientes.splice(urgencia,0,paciente);
    }
    //Variável string que ira concactenar os elementos do vetor e formar a lista de espera
    var lista="";
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    //Exibir a lista
    outLista.className="red";
    outLista.textContent=lista;
    //Limpando o campo nome do paciente
    inPaciente.value="";
    inPaciente.focus(); 
    urgencia++;
}
var btUrgencia=document.getElementById("btUrgencia");
btUrgencia.addEventListener("click",adicionarUrgente);

function atenderPaciente(){
    var inPaciente=document.getElementById("inPaciente");
    if(pacientes.length==0){ //Verificando se há pacientes na lista para atender
        alert("Não há pacientes na lista");
        inPaciente.focus();
        return;
    }
    var outPaciente=document.getElementById("outPaciente");
    var outLista=document.getElementById("outLista");
    var atendimento=pacientes.shift(); //Remove do vetor o primeiro elemento e guarda na variável
    //Exibe o paciente em atendimento 
    outPaciente.textContent=atendimento;
    var lista="";
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    outLista.textContent=lista;
    if(urgencia!=0){
        urgencia--;
    }
}
var btAtender=document.getElementById("btAtender");
btAtender.addEventListener("click",atenderPaciente);*/

var pacientes=[]; //Declarando um vetor global que irá armazenar a lista de pacientes
var urgencia=0;
function adicionarPaciente(){
    var inPaciente=document.getElementById("inPaciente");
    var outLista=document.getElementById("outLista");
    var paciente=inPaciente.value;
    //Validando a informação digitada pelo usuário
    if(paciente==""){
        alert("Digite o nome do paciente");
        inPaciente.focus();
        return;
    }
    //Armazenando o nome do paciente no final do vetor
    pacientes.push(paciente);
    //Variável para concactenar os itens da lista
    var lista="";
    //Comando for para percorrer os elementos do vetor e formar a lista
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    //Exibindo a lista
    outLista.textContent=lista;
    //Limpando e colocando o cursor no elemento inPaciente
    inPaciente.value="";
    inPaciente.focus();
}
var btAdicionar=document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarPaciente);

function adicionarUrgente(){
    var inPaciente=document.getElementById("inPaciente");
    var outLista=document.getElementById("outLista");
    var paciente=inPaciente.value;
    //Validando a informação digitada pelo usuário
    if(paciente==""){
        alert("Digite o nome do paciente");
        inPaciente.focus();
        return;
    }
    //Armazenando o nome do paciente no início do vetor
    if(urgencia==0){
        pacientes.unshift(paciente);
    }else{
        pacientes.splice(urgencia,0,paciente);
    }
    //Variável para concactenar os itens da lista
    var lista="";
    //Comando for para percorrer o vetor e formar a lista
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    //Exibindo a lista
    outLista.textContent=lista;
    //Limpando e colocando o cursor no elemento inPaciente
    inPaciente.value="";
    inPaciente.focus();
    urgencia++;
}
var btUrgencia=document.getElementById("btUrgencia");
btUrgencia.addEventListener("click",adicionarUrgente);

function atenderPaciente(){
    var inPaciente=document.getElementById("inPaciente");
    var outLista=document.getElementById("outLista");
    var outPaciente=document.getElementById("outPaciente");
    //Verificando se o vetor possui elementos(não esta vazio)
    if(pacientes.length==0){
        alert("Não há pacientes para atendimento");
        inPaciente.focus();
        return;
    }
    //Removendo o próximo elemento do vetor e guardando seu conteúdo na variável atendimento
    var atendimento=pacientes.shift();
    //Variável para concactenar os itens que irão formar a lista
    var lista="";
    //Comando for para percorrer o vetor e concactenar os itens que formarão a lista
    for(var i=0;i<pacientes.length;i++){
        lista+=(i+1)+". "+pacientes[i]+"\n";
    }
    //Exibindo o paciente em atendimento
    outPaciente.textContent=atendimento;
    //Exibindo a lista
    outLista.textContent=lista;
    if(urgencia>0){
        urgencia--;
    }
}
var btAtender=document.getElementById("btAtender");
btAtender.addEventListener("click",atenderPaciente);