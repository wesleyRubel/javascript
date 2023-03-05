//Função que cálcula o horário na frança em relação ao horário no Brasil
function calculaHorario(){
    //Criando uma referência para os elementos 
    var inHoraBrasil=document.getElementById("inHoraBrasil");
    var outHoraFranca=document.getElementById("outHoraFranca");

    //Obtendo e convertendo o valor informado pelo usuário
    var horaBrasil=Number(inHoraBrasil.value);
    //Verificando se o dado inserido pelo usuário é válido
    if(horaBrasil=="" || isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente.");
        inHoraBrasil.focus();
        return;
    }
    //Calculando o horário na frança
    var horaFranca=horaBrasil+5;
    //Verificando se horaFranca é maior ou igual a 24
    if(horaFranca>=24){
        horaFranca=horaFranca-24;
    }
    //Exibindo o horário
    outHoraFranca.textContent="Hora na França: "+horaFranca.toFixed(2);
}
//Criando uma referência ao elemento btExibir (botão)
var btExibir=document.getElementById("btExibir");
//Associando o evento click ao elemento btExibir
btExibir.addEventListener("click",calculaHorario);