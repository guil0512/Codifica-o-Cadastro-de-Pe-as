let nome_peca = "mob";
let peso_peca = 100;
let lista_pecas = 10;
let length = 3

document.getElementById(gramas)
document.getElementById(gramas2)
document.getElementById(gramas3)

if(peso_peca >= 100 && lista_pecas <= 10 && nome_peca.length >= 3 ){
    alert("Pode cadastrar!")
}else if(lista_pecas > 10){
    alert("Não tem capacidade suficiente!")
}else if (nome_peca.length < 3){
    alert("Esse produto não existe!")
}else{
    alert("Não pode cadastrar!")
}