function exibirCategoria(categoria){
    let produtos = document.getElementsByClassName('tdProduto')

    for(let i = 0; i < produtos.length; i++){

        console.log(produtos[i].id)
        if(categoria == produtos[i].id){
        
            produtos[i].style = "display: flexbox";

            
       
        }else{
            produtos[i].style = "display: none";
        }
    }
}

function exibirTodos(){

    let produtos = document.getElementsByClassName('tdProduto')

    for(let i = 0; i < produtos.length; i++){
        produtos[i].style = "display: flexbox";

    }
}

function destaque80(imagem){

    imagem.width = 80
    console.log(imagem)


}


function outDestaque60(imagem){
    imagem.width = 60
}

function destaque150(imagem){

    imagem.width = 150
    console.log(imagem)


}


function outDestaque120(imagem){
    imagem.width = 120
}


function destaque220(imagem){

    imagem.width = 220
    console.log(imagem)


}


function outDestaque200(imagem){
    imagem.width = 200
}