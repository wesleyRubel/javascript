//Definindo a função de soma
function Soma(){
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    var soma=num1+num2;
    document.getElementById("soma").textContent=num1+" + "+num2+" = "+soma;
}

//Definindo a função de subtração
function Subtracao(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var subtracao=num1-num2;
    document.getElementById("subtracao").textContent=num1+" - "+num2+" = "+subtracao;
}

//Definindo a função de multiplicação
function Multiplicacao(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var multiplicacao=num1*num2;
    document.getElementById("multiplicacao").textContent=num1+" X "+num2+" = "+multiplicacao;    
}

//Definindo a função de divisão
function Divisao(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var divisao=num1/num2;
    document.getElementById("divisao").textContent=num1+" / "+num2+" = "+divisao;      
}

//Definindo a função de resto
function Resto(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var resto=num1%num2;
    document.getElementById("resto").textContent=num1+" % "+num2+" = "+resto;       
}

//Definindo a função de potenciação
function Potenciacao(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var potenciacao=num1**num2;
    document.getElementById("potencia").textContent=num1+" elevado a "+num2+" = "+potenciacao;        
}

//Criando uma referência para o botão com id="calcular"
var calcular=document.getElementById("calcular");
calcular.addEventListener("click",Soma);
calcular.addEventListener("click",Subtracao);
calcular.addEventListener("click",Multiplicacao);
calcular.addEventListener("click",Divisao);
calcular.addEventListener("click",Resto);
calcular.addEventListener("click",Potenciacao);