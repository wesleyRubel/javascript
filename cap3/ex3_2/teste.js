function mostraImagem(){
    var inCat=document.getElementById("cat");
    var inDog=document.getElementById("dog");
    var outAnimal=document.getElementById("outAnimal");

    var cat=inCat.checked;
    var dog=inDog.checked;

    if(cat==false && dog==false){
        alert("Por favor selecione um animal.");
        return;
    }

    if(cat){
        outAnimal.style.backgroundImage="url(images/gato.webp)";
        outAnimal.style.width="500px";
        outAnimal.style.height="500px";
    }else{
        outAnimal.style.backgroundImage="url(images/cachorro.webp)";
        outAnimal.style.width="500px";
        outAnimal.style.height="500px";
    }
}
var btMostrar=document.getElementById("btMostrar");
btMostrar.addEventListener("click",mostraImagem);