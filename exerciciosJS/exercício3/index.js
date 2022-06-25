let quantidadeNotas = prompt("quantas notas você quer verificar")
let soma = 0
let media = 0

for (let i = 1; i <= quantidadeNotas; i++ ){
    let nota = Number( prompt(`Digite a ${i}º nota` ) )
    soma += nota
}

media = soma/quantidadeNotas
if(media >= 6){
    alert(`Sua média final foi ${media} , APROVADO`)

}else{
    alert(`Sua média final foi ${media}, REPROVADO!`)
}