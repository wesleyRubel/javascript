//Função que verifica se o valor do saque pode ser pago com as notas disponíveis no caixa
function varificaSaque(){
    //Criando uma referência aos elementos
    var inSaque=document.getElementById("inSaque");
    var out100=document.getElementById("out100");
    var out50=document.getElementById("out50");
    var out20=document.getElementById("out20");
    var out10=document.getElementById("out10");
    //Obtendo o valor de saque informado pelo usuário
    var saque=Number(inSaque.value);
    //Verifica se o valor informado pelo usuário é válido
    if(saque<=0 || isNaN(saque)){
        alert("Informe um valor de saque válido.");
        inSaque.focus();
        return;
    }
    //Verificando se o valor de saque é multíplo de 10
    if(saque%10!=0){
        alert("Valor inválido para as notas disponíveis (R$ 100, 50, 20, 10)");
        inSaque.focus();
        return
    }
    //Calcula as notas de 100, 50, 20 e 10
    var notas100=Math.floor(saque/100);
    var resto=saque%100;
    var notas50=Math.floor(resto/50);
    resto=resto%50;
    var notas20=Math.floor(resto/20);
    resto=resto%20;
    var notas10=resto/10;
    //Exibe as notas apenas se houver
    if(notas100>0){
        out100.textContent="Notas de R$ 100,00: "+notas100;
        out100.style.color="blue";
    }
    if(notas50>0){
        out50.textContent="Notas de R$ 50,00: "+notas50;
        out50.style.color="blue";    
    }
    if(notas20>0){
        out20.textContent="Notas de R$ 20,00: "+notas20;
        out20.style.color="blue";
    }
    if(notas10>0){
        out10.textContent="Notas de R$ 10,00: "+notas10;
        out10.style.color="blue";
    }
}
//Cria uma referência ao elemento btExibir e associa a function ao evento click
var btExibir=document.getElementById("btExibir");
btExibir.addEventListener("click",varificaSaque);
