var titulo = document.querySelector('.titulo');
var descricao = document.querySelector('.descricao');
var limpar = document.querySelector('.limpar');

titulo.addEventListener("click", function() {
    titulo.style.color = "blue";
});

descricao.addEventListener("click", function() {
    descricao.style.backgroundColor = "yellow";
});

limpar.addEventListener("click", function(){
    titulo.style.color = "black";
    descricao.style.backgroundColor = "white";
});




