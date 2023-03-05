//Definindo a função que irá receber e somar os números
function Soma(){
    var numero1=Number(document.getElementById("num1").value);
    var numero2=Number(document.getElementById("num2").value);
    var resp=numero1+numero2;
    document.getElementById("resposta").textContent="Soma = "+resp;
}

//Criando uma referência com o botão id="somar"
var somar=document.getElementById("somar");
somar.addEventListener("click",Soma);