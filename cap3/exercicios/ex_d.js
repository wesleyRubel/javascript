//Função que verifica se as medidas informadas formam um triângulo
function verificaLados(){
    var inLadoA=document.getElementById("inLadoA");
    var inLadoB=document.getElementById("inLadoB");
    var inLadoC=document.getElementById("inLadoC");
    var outTriangulo=document.getElementById("outTriangulo");
    var outTipo=document.getElementById("outTipo");
    var ladoA=Number(inLadoA.value);
    var ladoB=Number(inLadoB.value);
    var ladoC=Number(inLadoC.value);
    //Verificando se o usuário digitou valores válidos
    if(ladoA<=0 || isNaN(ladoA)){
        alert("Informe um valor que seja válido.");
        inLadoA.focus();
        return;
    }
    if(ladoB<=0 || isNaN(ladoB)){
        alert("Informe um valor que seja válido.");
        inLadoA.focus();
        return;    
    }
    if(ladoC<=0 || isNaN(ladoC)){
        alert("Informe um valor que seja válido.");
        inLadoA.focus();
        return;    
    }
    //Verificando se os valores informados pelo usuário formam um triângulo
    if(ladoA<=(ladoB+ladoC) && ladoB<=(ladoA+ladoC) && ladoC<=(ladoA+ladoB)){
        if(ladoA==ladoB && ladoB==ladoC){
            outTriangulo.textContent="Triângulo Equilátero";
            outTriangulo.style.color="blue";
            outTipo.style.backgroundImage="url(images/equilatero-100.png)";
            outTipo.style.width="100px";
            outTipo.style.height="100px";
        }else if(ladoA==ladoB || ladoA==ladoC || ladoB==ladoC){
            outTriangulo.textContent="Triângulo Isóceles";
            outTriangulo.style.color="blue";
            outTipo.style.backgroundImage="url(images/isoceles-100.png)";
            outTipo.style.width="100px";
            outTipo.style.height="100px";    
        }else{
            outTriangulo.textContent="Triângulo Escaleno";
            outTriangulo.style.color="blue";
            outTipo.style.backgroundImage="url(images/escaleno-100.png)";
            outTipo.style.width="100px";
            outTipo.style.height="100px";
        }
    }else{
        outTriangulo.textContent="Lados não podem formar um Triângulo";
        outTriangulo.style.color="blue";
    }
}
var btVerificar=document.getElementById("btVerificar");
btVerificar.addEventListener("click",verificaLados);